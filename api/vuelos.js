export default function handler(req, res) {
  const { query } = req.query;

  if (!query || query.trim() === "") {
    // si no mandan query, devolver todo
    return res.status(200).json(ciudades);
  }

  const resultados = ciudades.filter((ciudad) =>
    ciudad.displayText.toLowerCase().includes(query.toLowerCase())
  );

  res.status(200).json(resultados);
}
