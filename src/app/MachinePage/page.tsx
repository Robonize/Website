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
      <div className='mt-12'>
        <p className='text-white text-4xl'>Machine Data</p>
        <div className='flex flex-row justify-center items-center h-72 w-[1400px] bg-[#259776]  rounded-2xl shadow-2xl text-5xl font-bold'>
          <div className="h-40 w-96 bg-slate-200 rounded-2xl shadow-2xl flex flex-col justify-center items-center text-black ">
            <p className='text-3xl'>Units Produced (24h)</p>
            <p className='text-4xl mt-5'>100.000</p>
          </div>
        </div>
      </div>
      
      <div className='mt-10'>
      <p className='text-white text-4xl'>Machine financial info</p>
        <div className='h-[450px] w-[1400px] bg-[#259776] flex flex-col rounded-2xl shadow-2xl text-4xl font-bold items-center'>
        

        </div>
      </div>
      
    </div>
    </>
  );
}
