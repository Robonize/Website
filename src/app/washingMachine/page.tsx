"use client";

import { useState, useEffect } from 'react';

interface SensorData {
  status: string;
  valor_sensor: number;
}

export default function Home() {
  const [sensorData, setSensorData] = useState<SensorData | null>(null);

  // Função para buscar dados da API
  const fetchData = async () => {
    const response = await fetch('/api/receiveESP32data');
    const data = await response.json();
    setSensorData(data);
  };

  // Buscar os dados ao carregar a página
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
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
  );
}