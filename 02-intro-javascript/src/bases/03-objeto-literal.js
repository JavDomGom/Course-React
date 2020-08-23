const persona = {
  nombre: "Javier",
  apellido: "Domínguez",
  edad: 39,
  direccion: {
    ciudad: "Madrid",
    codigoPostal: 28050,
  },
};

// console.table(persona);

const persona2 = { ...persona };
persona2.nombre = "Peter";

console.log(persona);
console.log(persona2);
