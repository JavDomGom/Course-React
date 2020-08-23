// Desestructuración.
const persona = {
  nombre: "Javier",
  edad: 39,
  clave: "Ironman",
};

// const { edad, nombre, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({ clave, nombre, edad, rango = "Capitán" }) => {
  //   console.log(nombre, edad, rango);
  return {
    nombreClave: clave,
    edad: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};

const {
  nombreClave,
  edad,
  latlng: { lat, lng },
} = useContext(persona);

console.log(nombreClave, edad);
console.log(lat, lng);
