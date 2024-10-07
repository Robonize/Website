"use client";

import SideBar from '../components/sideBar';

export default function Home() {

  return (

    <><SideBar />
    
    <div className='w-auto h-screen ml-48 flex flex-col items-center'>
      <div className='h-80 w-[1400px] bg-[#259776] mt-16 rounded-2xl shadow-2xl text-5xl font-bold'>
        <p className='mt-10 ml-10'>Last day yield: $0</p>
        <p className='mt-10 ml-10'>Estimated daily yield: $0</p>
        <p className='mt-10 ml-10'>DPY: 0%</p>
      </div>
      <div className='h-96 w-[1400px] bg-[#259776] mt-12 rounded-2xl shadow-2xl'>

      </div>
    </div>
    </>
  );
}
