"use client";

import ConnectWallet from '../components/connectWallet';
import ModalConnect from '../components/ModalConnect';
import SideBar from '../components/sideBar';
import { SolanaProvider } from '../context/SolanaContext';

export default function Home() {

  return (

    <><SideBar />

    <SolanaProvider>
        
        <div>
            <div className="fixed top-0 right-0 flex justify-end">
                <ConnectWallet />
                <ModalConnect />
            </div>
       </div>

    </SolanaProvider>

    
    <div className='w-auto h-screen ml-48 flex flex-col items-center'>
      <div className='mt-11'>
        <p className='text-white text-4xl'>Machine Data</p>
        <div className='flex flex-row justify-center items-center h-64 w-[1400px] bg-[#259776]  rounded-2xl shadow-2xl text-5xl font-bold'>
          <div className="h-40 w-96 bg-slate-200 rounded-2xl shadow-2xl flex flex-col justify-center items-center text-black ">
            <p className='text-3xl'>Units Produced (24h)</p>
            <p className='text-4xl mt-5'>100.000</p>
          </div>
        </div>
      </div>
      
      <div className='mt-9'>
      <p className='text-white text-4xl'>Machine financial info</p>
        <div className='h-[410px] w-[1400px] bg-[#259776] flex flex-col rounded-2xl shadow-2xl text-2xl font-bold items-start'>
          <div className="h-24 w-64 mt-10 ml-10 bg-slate-200 rounded-2xl shadow-2xl flex flex-col justify-center items-center text-black ">
              <p className='text-2xl'>Token Price</p>
              <p className='text-3xl mt-5'>$2.20</p>
          </div>
          <div className="h-24 w-64 mt-10 ml-10 bg-slate-200 rounded-2xl shadow-2xl flex flex-col justify-center items-center text-black ">
              <p className='text-2xl'>Amount of tokens</p>
              <p className='text-3xl mt-5'>10.000</p>
          </div>

        </div>
      </div>

      <div className='mt-7 flex flex-row justify-end w-[1400px]'>
        <button className="bg-[#259776] py-3 px-8 rounded-xl text-4xl shadow-2xl hover:bg-[#2f7d67] hover:-translate-y-1 font-bold">Buy Token</button>
      </div>
      
    </div>
    </>
  );
}
