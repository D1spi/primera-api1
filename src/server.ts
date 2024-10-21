import './loadEnvironment.js';
import express from 'express';

// Initialize expres
const app = express();
const port = process.env.HOST_PORT ?? '3000';

// Lista de estudiantes
const estudiantes: string[] = [
  "Santiago Fernández-Pedrera",
  "Nahomy Argueta",
  "Daniel Galeano",
  "Denis Podovei",
  "Ivan Vallejo",
  "Nil Marquez",
  "Paul Aznar Tequén",
  "Òscar Cruañas",
  "Quim Pallarés",
  "Satenik Avetisyan",
  "Pol Cubo",
  "Oriol Fontcuberta Aduart"
];

// Ruta para obtener la lista de estudiantes
app.get('/a', (req, res) => res.json({ estudiantes }));

// Ruta para contar el número de estudiantes
app.get('/count', (req, res) => {
  const count = estudiantes.length; // Contar el número de estudiantes
  res.json({ count });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;
