import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/user";

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

      await User.findOneAndUpdate(
        { email: user.email },
        {
          email: user.email,
          name: user.name,
          image: user.image,
          provider: account?.provider,
        },
        { upsert: true, new: true }
      );

      return true;
    },

    // 2️⃣ Decide WHERE to redirect
    async redirect({ baseUrl }) {
      try {
        await connectDB();

        return `${baseUrl}/redirect-handler`;
      } catch {
        return baseUrl;
      }
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
