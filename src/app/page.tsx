import logo from "./assets/logo v0.21.png";
import Image from "next/image";
import background from "./assets/back.jpg";

export default function Home() {
  return (
    <div className="relative h-screen w-screen">
      {/* Background */}
      <Image
        src={background}
        alt=""
        className="absolute top-0 left-0 h-full w-full object-cover -z-10"
        layout="fill"
      />
      
      {/* Main Content */}
      <main className="relative z-10 flex flex-col gap-8 h-full">
        {/* Header */}
        <header className="bg-[#3A3A3A] h-24 w-full flex flex-row items-center px-8">
          <div className="h-20 w-20">
            <a href="/" className="">
              <Image src={logo} alt="Robonize logo" />
            </a>
          </div>
          <nav className="grid grid-cols-4 content-center ml-10 font-bold">
            <a href="/washingMachine" className="text-2xl px-10 text-[#259776]">Launch</a>
            <a href="/" className="text-2xl px-10">Team</a>
            <a href="/" className="text-2xl px-10">How it works</a>
            <a href="https://x.com/_robonize" className="text-2xl px-10">Our twitter</a>
          </nav>
        </header>

        {/* Centered Content */}
        <div className="flex flex-col items-center justify-center h-full text-center">
          <Image src={logo} alt="Robonize logo" className="h-60 w-60" />
          <h1 className="text-9xl font-bold">Robonize</h1>
          <a href="/Overview" className="mt-10">
            <button className="bg-[#259776] py-5 px-9 rounded-3xl text-6xl hover:bg-[#2f7d67] hover:-translate-y-1">
              Launch
            </button>
          </a>
        </div>
      </main>
    </div>
  );
}


