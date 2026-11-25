// Crea src/datos.js con una exportación nombrada libros: un array de al menos 6 objetos con id, titulo,
// autor, paginas y disponible (true o false). Incluye uno con menos de 200 páginas y otro con disponible:
// false.

export const libros = [
  {
    id: 1,
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    paginas: 96, // Menos de 200 páginas
    disponible: true,
  },
  {
    id: 2,
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    paginas: 471,
    disponible: true,
  },
  {
    id: 3,
    titulo: "1984",
    autor: "George Orwell",
    paginas: 328,
    disponible: false, // No disponible
  },
  {
    id: 4,
    titulo: "La sombra del viento",
    autor: "Carlos Ruiz Zafón",
    paginas: 576,
    disponible: true,
  },
  {
    id: 5,
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    paginas: 863,
    disponible: true,
  },
  {
    id: 6,
    titulo: "Pedro Páramo",
    autor: "Juan Rulfo",
    paginas: 128, // También menor a 200 páginas
    disponible: false,
  },
];
