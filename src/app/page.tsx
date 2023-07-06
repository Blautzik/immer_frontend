import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from 'next-auth/next'


// TODO login screen if no session and user homepage if session

export default async function Home() {
  const session = await getServerSession(options)

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
