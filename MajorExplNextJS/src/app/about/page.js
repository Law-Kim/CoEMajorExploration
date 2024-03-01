
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      </div>

      <div>
        <h1 className={`mb-3 text-2xl font-semibold`}>College of Engineering Major Exploration - Oregon State University</h1>
      </div>
      <div className="p-3">
      New and prospective students may have trouble figuring out which major to study in their college <br/>careers at Oregon State’s College of Engineering.
      Our project is a web-based application that will <br/> help students identify the majors that align with their interests the most and provide the <br/>necessary 
      resources for them to make a decision.<br/> <br/>
      </div>
      <div>
      <h1 className={`mb-3 text-2xl font-semibold`}>Contributors</h1>
      </div>
      <div className="p-3">
      Lawrence Kim <br/>
      Derek Inman
      </div>
      
    </main>
  )
}
