// archivo: api/datos.js
export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido, usa POST" });
  }

  // Lista de ciudades igual que en datos.php
  const ciudades = [
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
    },
    {
      id: "423",
      displayText: "San Andrés (ADZ)",
      displayDestinationHtml: "Colombia",
      displayHtml: "<em>San Andrés</em> (ADZ)",
      type: 0,
      isActive: true,
      code: "ADZ",
      country: "CO"
    },
    {
      id: "424",
      displayText: "San José del Guaviare (SJE)",
      displayDestinationHtml: "Colombia",
      displayHtml: "<em>San José del Guaviare</em> (SJE)",
      type: 0,
      isActive: true,
      code: "SJE",
      country: "CO"
    },
    {
      id: "425",
      displayText: "Santa Marta (SMR)",
      displayDestinationHtml: "Colombia",
      displayHtml: "<em>Santa Marta</em> (SMR)",
      type: 0,
      isActive: true,
      code: "SMR",
      country: "CO"
    },
    {
      id: "426",
      displayText: "Tumaco (TCO)",
      displayDestinationHtml: "Colombia",
      displayHtml: "<em>Tumaco</em> (TCO)",
      type: 0,
      isActive: true,
      code: "TCO",
      country: "CO"
    },
    {
      id: "428",
      displayText: "Villavicencio (VVC)",
      displayDestinationHtml: "Colombia",
      displayHtml: "<em>Villavicencio</em> (VVC)",
      type: 0,
      isActive: true,
      code: "VVC",
      country: "CO"
    },
    {
      id: "419",
      displayText: "Popayán (PPN)",
      displayDestinationHtml: "Colombia",
      displayHtml: "<em>Popayán</em> (PPN)",
      type: 0,
      isActive: true,
      code: "PPN",
      country: "CO"
    },
    {
      id: "415",
      displayText: "Montería (MTR)",
      displayDestinationHtml: "Colombia",
      displayHtml: "<em>Montería</em> (MTR)",
      type: 0,
      isActive: true,
      code: "MTR",
      country: "CO"
    },
    {
      id: "410",
      displayText: "Ibagué (IBE)",
      displayDestinationHtml: "Colombia",
      displayHtml: "<em>Ibagué</em> (IBE)",
      type: 0,
      isActive: true,
      code: "IBE",
      country: "CO"
    },
    {
      id: "422",
      displayText: "Riohacha (RCH)",
      displayDestinationHtml: "Colombia",
      displayHtml: "<em>Riohacha</em> (RCH)",
      type: 0,
      isActive: true,
      code: "RCH",
      country: "CO"
    }
  ];

  // Filtrar por query si llega en el body
  const { query } = req.body || {};
  const resultados = query
    ? ciudades.filter(c => c.displayText.toLowerCase().includes(query.toLowerCase()))
    : ciudades;

  res.status(200).json(resultados);
}
