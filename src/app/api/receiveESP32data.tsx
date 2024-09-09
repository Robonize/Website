import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    
    const { status, valor_sensor } = req.body;

    console.log("Deu bom caralho!")
    console.log(req.body)

    res.status(200).json({
      message: 'Dados recebidos com sucesso!',
      status: status,
      valor_sensor: valor_sensor,
    });
  } else {
    res.status(405).json({ message: 'Método não permitido, use POST.' });
  }
}