import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <div className='h-screen flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-mono'> Hi immer frontenders! </h1>
          <p className='text-xl font-mono'>
            feel free to edit anything you like, use the team_collaboration branch and make a pull request in the github repo
          </p>
          <p className='text-xl font-mono'>
            happy coding!
          </p>
        </div>
      </div>
    </main>
  )
}
