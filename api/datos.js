// archivo: api/datos.js
export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido, usa POST" });
  }

  // ---- Lista de ciudades ----
  const ciudades1 = [
    {
      id: "400",
      displayText: "Armenia (AXM)",
      displayDestinationHtml: "Colombia",
      displayHtml: "<em>Armenia</em> (AXM)",
      type: 0,
      isActive: true,
      code: "AXM",
      country: "CO"
    },
    {
      id: "402",
      displayText: "Barranquilla (BAQ)",
      displayDestinationHtml: "Colombia",
      displayHtml: "<em>Barranquilla</em> (BAQ)",
      type: 0,
      isActive: true,
      code: "BAQ",
      country: "CO"
    },
    {
      id: "403",
      displayText: "Bogotá (BOG)",
      displayDestinationHtml: "Colombia",
      displayHtml: "<em>Bogotá</em> (BOG)",
      type: 0,
      isActive: true,
      code: "BOG",
      country: "CO"
    },
    {
      id: "404",
      displayText: "Bucaramanga (BGA)",
      displayDestinationHtml: "Colombia",
      displayHtml: "<em>Bucaramanga</em> (BGA)",
      type: 0,
      isActive: true,
      code: "BGA",
      country: "CO"
    },
    {
      id: "405",
      displayText: "Cali (CLO)",
      displayDestinationHtml: "Colombia",
      displayHtml: "<em>Cali</em> (CLO)",
      type: 0,
      isActive: true,
      code: "CLO",
      country: "CO"
    },
    {
      id: "406",
      displayText: "Cartagena (CTG)",
      displayDestinationHtml: "Colombia",
      displayHtml: "<em>Cartagena</em> (CTG)",
      type: 0,
      isActive: true,
      code: "CTG",
      country: "CO"
    },
    {
      id: "407",
      displayText: "Cúcuta (CUC)",
      displayDestinationHtml: "Colombia",
      displayHtml: "<em>Cúcuta</em> (CUC)",
      type: 0,
      isActive: true,
      code: "CUC",
      country: "CO"
    },
    {
      id: "408",
      displayText: "Medellín (MDE)",
      displayDestinationHtml: "Colombia",
      displayHtml: "<em>Medellín</em> (MDE)",
      type: 0,
      isActive: true,
      code: "MDE",
      country: "CO"
    }
  ];

  // ---- Lista de vuelos ----
  const vuelos = [
    { origen: "BOG", destino: "MDE", precio: 120000 },
    { origen: "BOG", destino: "CTG", precio: 180000 },
    { origen: "MDE", destino: "BAQ", precio: 150000 },
    { origen: "CLO", destino: "CUC", precio: 200000 },
    { origen: "AXM", destino: "BGA", precio: 170000 },
    { origen: "CTG", destino: "BOG", precio: 190000 }
  ];

  // ---- Unir en respuesta ----
  res.status(200).json({
    ciudades: ciudades1,
    vuelos: vuelos
  });
}
