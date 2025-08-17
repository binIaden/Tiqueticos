// api/vuelos.js

// Importamos las ciudades que antes estaban en server.js
const ciudadesDisponibles = [
  {"id":"423","displayText":"San Andrés (ADZ)","country":"CO"},
  {"id":"424","displayText":"San José del Guaviare (SJE)","country":"CO"},
  {"id":"425","displayText":"Santa Marta (SMR)","country":"CO"},
  {"id":"406","displayText":"Cartagena (CTG)","country":"CO"},
  {"id":"405","displayText":"Cali (CLO)","country":"CO"},
  {"id":"418","displayText":"Pereira (PEI)","country":"CO"},
  {"id":"404","displayText":"Bucaramanga (BGA)","country":"CO"},
  {"id":"408","displayText":"Cúcuta (CUC)","country":"CO"},
  {"id":"413","displayText":"Manizales (MZL)","country":"CO"},
  {"id":"416","displayText":"Neiva (NVA)","country":"CO"},
  {"id":"428","displayText":"Villavicencio (VVC)","country":"CO"},
  {"id":"419","displayText":"Popayán (PPN)","country":"CO"},
  {"id":"415","displayText":"Montería (MTR)","country":"CO"},
  {"id":"400","displayText":"Armenia (AXM)","country":"CO"},
  {"id":"410","displayText":"Ibagué (IBE)","country":"CO"},
  {"id":"426","displayText":"Tumaco (TCO)","country":"CO"},
  {"id":"422","displayText":"Riohacha (RCH)","country":"CO"},
  {"id":"402","displayText":"Barranquilla (BAQ)","country":"CO"},
  {"id":"403","displayText":"Bogotá (BOG)","country":"CO"},
  {"id":"414","displayText":"Medellín (MDE)","country":"CO"}
];

// Esta es la API que maneja las requests
export default function handler(req, res) {
  if (req.method === "GET") {
    // Devuelve todas las ciudades
    res.status(200).json(ciudadesDisponibles);
  } else if (req.method === "POST") {
    // Permite buscar ciudad por nombre enviado en el body
    const { query } = req.body;
    const resultados = ciudadesDisponibles.filter(c =>
      c.displayText.toLowerCase().includes(query.toLowerCase())
    );
    res.status(200).json(resultados);
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}
