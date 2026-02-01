import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import DashboardClient from './DashboardClient';
import { getServerSession } from 'next-auth';


export default async function page() {
    const session = await getServerSession(authOptions);

    if(!session){
        redirect("/")
    }

  return <DashboardClient/>;
}
