const nombre = "Javier";
const apellido = "Domínguez";

const nombreCompleto = `${nombre} ${apellido}`;

export function getSaludo(nombre = "John") {
  return "Hola " + nombre;
}
