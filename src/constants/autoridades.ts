export const director = {
  nombre: "Dr. Carlos Alberto Minchón Medina",
  cargo: "Director (e) de la Escuela Profesional de Estadística",
  correo: "direccion.estadistica@unitru.edu.pe",
  bio: "Doctor en Ciencias e Ingeniería con amplia experiencia en investigación estadística, consultoría y miembro clave de la Comisión de Reforma Curricular.",
  foto: null // Placeholder
};

export const coordinadores = [
  {
    nombre: "Mg. Ing. Roberto Carlos Salazar",
    cargo: "Coordinador Académico",
    correo: "acad.estadistica@unitru.edu.pe"
  },
  {
    nombre: "Dra. Ing. Patricia Salinas Vega",
    cargo: "Coordinadora de Investigación",
    correo: "investiga.estadistica@unitru.edu.pe"
  },
  {
    nombre: "Mg. Ing. Luis Fernando Gómez",
    cargo: "Coordinador de Prácticas Preprofesionales",
    correo: "practicas.estadistica@unitru.edu.pe"
  }
];

export const organigrama = {
  nombre: "Dirección de Escuela",
  cargo: "Dr. Carlos Alberto Minchón Medina",
  hijos: [
    {
      nombre: "Coordinación Académica",
      cargo: "Mg. Ing. Roberto Carlos Salazar",
      hijos: [
        { nombre: "Comité de Currículo", cargo: "" },
        { nombre: "Tutoría y Asesoría", cargo: "" }
      ]
    },
    {
      nombre: "Coordinación de Investigación",
      cargo: "Dra. Ing. Patricia Salinas"
    },
    {
      nombre: "Prácticas Preprofesionales",
      cargo: "Mg. Ing. Luis Fernando Gómez"
    }
  ]
};
