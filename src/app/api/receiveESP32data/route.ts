import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({ status: 'OK', valor_sensor: 123 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { status, valor_sensor } = body;

  if (status && valor_sensor !== undefined) {
    return NextResponse.json({
      message: 'Dados recebidos com sucesso!',
      status,
      valor_sensor,
    });
  }

  return NextResponse.json({ message: 'Dados inválidos' }, { status: 400 });
}