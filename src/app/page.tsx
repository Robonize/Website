
export default function Home() {
  return (
    <div className="bg-slate-950 h-screen">
      <main className="flex flex-col gap-8 row-start-2 sm:items-start h-full">
        <header className="bg-slate-800 h-24 w-full">
          <a href="/">Robonize</a>
        </header>
        <div className="flex flex-col justify-center h-full w-screen">
          <h1 className="text-9xl flex justify-center">Robonize</h1>
          <a href="/washingMachine" className="flex justify-center py-10">
            <button className="bg-[#259776] py-5 px-9 rounded-3xl text-6xl">
              Launch
            </button>
          </a>
        </div>
        
      </main>
      
    </div>
  );
}
