
import logo from "./assets/logo v0.21.png"
import Image from "next/image";


export default function Home() {
  return (
    <div className="bg-[#0F0F0F] h-screen">
      <main className="flex flex-col gap-8 row-start-2 sm:items-start h-full">
        <header className="bg-[#3A3A3A] h-24 w-full flex flex-row align-middle">
          <div className="h-20 w-20">
            <a href="/" className="">
              <Image src={logo} alt="Robonize logo" className=""/>
            </a>
          </div>
          <div className="grid grid-cols-3 content-center ml-56 font-bold">
            <a href="/washingMachine" className=" h-10 px-20 text-2xl text-[#259776]">Launch</a>
            <a href="/" className=" h-10 px-20 text-2xl">Team</a>
            <a href="/"className="h-10 px-20 text-2xl">How it works</a>
          </div>
        </header>
        <div className="flex flex-col justify-center h-full w-screen">
          <Image src={logo} alt="Robonize logo" className="self-center h-60 w-60 "/>
          <h1 className="text-9xl flex justify-center font-bold">Robonize</h1>
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
