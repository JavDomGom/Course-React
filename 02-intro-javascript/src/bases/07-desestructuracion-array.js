const personajes = ["Goku", "Vegeta", "Trunks"];
const [, , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea
// 1. El primer valor del arr se llamará nombre.
// 2. El segundo valor del arr se llamará setNombre.

const useState = (nombre) => {
  return [
    nombre,
    () => {
      console.log(nombre);
    },
  ];
};

const [nombre, setNombre] = useState("Goku");

console.log(nombre);
setNombre();
