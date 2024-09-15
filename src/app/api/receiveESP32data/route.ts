import { NextRequest, NextResponse } from 'next/server';

// Variáveis para armazenar o status e o valor do sensor
let sensorData = {
  status: 'No data',
  valor_sensor: null,
};

// Lida com a requisição GET, retornando os dados do sensor armazenados
export async function GET() {
  return NextResponse.json(sensorData);
}

// Lida com a requisição POST, atualizando os dados do sensor
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log(body)
    const { status, valor_sensor } = body;

    // Verifica se os dados recebidos são válidos
    if (status && valor_sensor !== undefined) {
      // Atualiza os dados do sensor
      sensorData = { status, valor_sensor };

      return NextResponse.json({
        message: 'Dados recebidos com sucesso!',
        status,
        valor_sensor,
      });
    } else {
      return NextResponse.json({ message: 'Dados inválidos' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ message: 'Erro ao processar os dados' }, { status: 500 });
  }
}
