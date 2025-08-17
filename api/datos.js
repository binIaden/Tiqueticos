export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido, usa POST" });
  }

  // Lista de ciudades con todos los campos necesarios
  const ciudades = [
    { id: "400", displayText: "Armenia (AXM)", country: "CO", code: "AXM" },
    { id: "402", displayText: "Barranquilla (BAQ)", country: "CO", code: "BAQ" },
    { id: "403", displayText: "Bogotá (BOG)", country: "CO", code: "BOG" },
    { id: "404", displayText: "Bucaramanga (BGA)", country: "CO", code: "BGA" },
    { id: "405", displayText: "Cali (CLO)", country: "CO", code: "CLO" },
    { id: "406", displayText: "Cartagena (CTG)", country: "CO", code: "CTG" },
    { id: "407", displayText: "Cúcuta (CUC)", country: "CO", code: "CUC" },
    { id: "408", displayText: "Medellín (MDE)", country: "CO", code: "MDE" },
    { id: "424", displayText: "San José del Guaviare (SJE)", country: "CO", code: "SJE" },
    { id: "425", displayText: "Santa Marta (SMR)", country: "CO", code: "SMR" },
    { id: "423", displayText: "San Andrés (ADZ)", country: "CO", code: "ADZ" },
    { id: "428", displayText: "Villavicencio (VVC)", country: "CO", code: "VVC" },
    { id: "419", displayText: "Popayán (PPN)", country: "CO", code: "PPN" },
    { id: "415", displayText: "Montería (MTR)", country: "CO", code: "MTR" },
    { id: "410", displayText: "Ibagué (IBE)", country: "CO", code: "IBE" },
    { id: "426", displayText: "Tumaco (TCO)", country: "CO", code: "TCO" },
    { id: "422", displayText: "Riohacha (RCH)", country: "CO", code: "RCH" }
  ];

  // Filtro por query si se manda en el body
  const { query } = req.body || {};
  const resultados = query
    ? ciudades.filter(c => c.displayText.toLowerCase().includes(query.toLowerCase()))
    : ciudades;

  res.status(200).json(resultados);
}

