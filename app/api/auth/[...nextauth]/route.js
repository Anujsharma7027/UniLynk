import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/user";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";


export const authOptions = {
  trustHost: true,

  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();

        const email = credentials.email.toLowerCase().trim();
        const user = await User.findOne({ email });

        if (!user) throw new Error("User not found");
        if (!user.password) throw new Error("No password set");

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValid) throw new Error("Wrong password");

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name || "",
        };
      },
    }),

  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  callbacks: {
    // 1️⃣ Ensure user exists
    async signIn({ user, account }) {
      await connectDB();

      if (!user?.email) return false;

      const email = user.email.toLowerCase();

      await User.findOneAndUpdate(
        { email },
        {
          email,
          name: user.name || "",
          image: user.image || "",
          provider: account?.provider || "credentials",
        },
        { upsert: true, new: true }
      );

      return true;
    },

    // 2️⃣ Decide WHERE to redirect
    async redirect({ baseUrl }) {
      return `${baseUrl}/redirect-handler`;
    },


    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.name = user.name;
        token.id = user.id || token.sub;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.id = token.id;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
