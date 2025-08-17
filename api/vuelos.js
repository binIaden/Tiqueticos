// api/vuelos.js
import { ultimaBusqueda } from "./datos";

export default function handler(req, res) {
  // Si no hay nada guardado, devolver array vacío
  res.status(200).json(ultimaBusqueda || []);
}
