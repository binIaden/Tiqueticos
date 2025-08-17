// api/vuelos.js
import { ultimaBusqueda } from "./datos";

export default function handler(req, res) {
  const { query } = req.query;

  if (query) {
    // si llega query, filtramos dentro de ultimaBusqueda
    const resultados = (ultimaBusqueda || []).filter((ciudad) =>
      ciudad.displayText.toLowerCase().includes(query.toLowerCase())
    );
    return res.status(200).json(resultados);
  }

  // si no hay query, devolver última búsqueda tal cual
  res.status(200).json(ultimaBusqueda || []);
}
