// Funciones en JS
// const saludar = function (nombre) {
//   return `Hola, ${nombre}!`;
// };

const saludar2 = (nombre) => {
  return `Hola, ${nombre}!`;
};

const saludar3 = (nombre) => `Hola, ${nombre}!`;
const saludar4 = () => `Hola mundo!`;

// console.log(saludar("Javier"));

console.log(saludar2("Javier"));
console.log(saludar3("John"));
console.log(saludar4());

const getUser = () => ({
  uid: "123",
  username: "JavDomGom",
});

const user = getUser();
console.log(user);

// Tarea
// 1. Transformar a funcion flecha.
// 2. Tiene que retornar un objeto implicito.
// 3. Pruebas.
// function getUsuarioActivo(nombre) {
//   return {
//     uid: "ABCD1234",
//     username: nombre,
//   };
// }

const getUsuarioActivo = (uid, nombre) => ({
  uid: uid,
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("ABCD1234", "Javier");
console.log(usuarioActivo);
