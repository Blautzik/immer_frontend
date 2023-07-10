import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'


// TODO login screen if no session and user homepage if session

export default async function Home() {
  const session = await getServerSession(options)

  if(!session) {
    redirect('/auth/login')
  }


  return (
    <>
    {session ? (
        <h1>{session?.user.name} is logged in</h1>
      ):(
        <h1>not logged in</h1>
      )
    }
    
    </>

  );
}
