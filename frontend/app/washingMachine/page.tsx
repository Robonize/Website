"use client";

import { useState, useEffect } from 'react';
import SideBar from '../components/sideBar';

interface SensorData {
  status: string;
  valor_sensor: number;
}

export default function Home() {
  const [sensorData, setSensorData] = useState<SensorData | null>(null);

  // Função para buscar dados da API
  const fetchData = async () => {
    try {
      const response = await fetch('https://robonize.vercel.app/api/receiveESP32data');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setSensorData(data);
    } catch (error) {
      console.error('Error fetching sensor data:', error);
    }
  };

  // Buscar os dados ao carregar a página e configurar o intervalo para atualizar constantemente
  useEffect(() => {
    // Busca inicial
    fetchData();

    // Configurar intervalo para atualizar a cada 1 segundos 
    const interval = setInterval(() => {
      fetchData();
    }, 1000);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, []);

  return (

    <><SideBar />
    
    <div className='w-auto h-screen ml-48 flex flex-col items-center'>
      <div className='bg-[#757575] h-2/5 w-[1500px] rounded-lg mt-16 text-white '>
      {sensorData ? (
        <div className='m-10 text-6xl'>
          <p>Machine status: {sensorData.status}</p>
        </div>
      ) : (
        <p className='m-10 text-6xl'>Loading data...</p>
      )}
      </div>
      <div className='bg-[#757575] h-2/5 w-[1500px] rounded-lg mt-16'>

      </div>
      <div className=' w-72 h-36'>
         <h1>Washing machine monitoring</h1>
      {sensorData ? (
        <div>
          <p>Machine status: {sensorData.status}</p>
          <p>Sensor data: {sensorData.valor_sensor}</p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
      </div>
     
    </div>
    </>
  );
}
