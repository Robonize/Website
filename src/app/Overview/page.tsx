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
      <div className='h-80 w-[1400px] bg-[#259776] mt-20 rounded-2xl shadow-2xl text-5xl font-bold'>
        <p className='mt-10 ml-10'>Last day yield: $0</p>
        <p className='mt-10 ml-10'>Estimated daily yield: $0</p>
        <p className='mt-10 ml-10'>DPY: 0%</p>
      </div>
      <div className='h-[450px] w-[1400px] bg-[#259776] flex flex-col mt-12 rounded-2xl shadow-2xl text-4xl font-bold items-center'>
        <div className='flex flex-row  mt-8'>
          <p className='mx-32 '>Machine</p>
          <p className='mx-12'>Tokens Owned</p>
          <p className='mx-12'>Token Value</p>
          <p className='mx-12'>APY</p>
        </div>
        <div>
        <button className='flex flex-row  mt-8 bg-slate-50 hover:bg-slate-200 hover:-translate-y-1 text-black rounded-xl py-3 w-[1300px] shadow-xl justify-between'>
          <p className='mx-20'>Cartooning Machine</p>
          <p className='mx-16 mr-48'>0</p>
          <p className='mx-16 mr-16'>$20</p>
          <p className='mx-20'>15%</p>
        </button>
        <button className='flex flex-row  mt-8 bg-slate-50 hover:bg-slate-200 hover:-translate-y-1 text-black rounded-xl py-3 w-[1300px] shadow-xl justify-between'>
          <p className='mx-24'>Washing Machine</p>
          <p className='mx-20 mr-48'>0</p>
          <p className='mx-16 mr-20'>$10</p>
          <p className='mx-20'>0%</p>
        </button>
        </div>

      </div>
    </div>
    </>
  );
}
