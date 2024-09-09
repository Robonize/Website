import { useState, useEffect } from 'react';

interface SensorData {
  status: string;
  valor_sensor: number;
}

export default function Home() {
  const [sensorData, setSensorData] = useState<SensorData | null>(null);

  // Função para buscar dados da API
  const fetchData = async () => {
    const response = await fetch('../api/receiveData');
    const data = await response.json();
    setSensorData(data);
  };

  // Buscar os dados ao carregar a página
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Monitoramento da Máquina de Lavar</h1>
      {sensorData ? (
        <div>
          <p>Status da máquina: {sensorData.status}</p>
          <p>Valor do sensor de luminosidade: {sensorData.valor_sensor}</p>
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
  );
}