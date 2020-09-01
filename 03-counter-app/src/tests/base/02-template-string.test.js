import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-template-string.js", () => {
  test('getSaludo() debe devolver "Hola Javier" si recibe argumento.', () => {
    const nombre = "Javier";
    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre);
  });

  test('getSaludo() debe devolver "Hola John" si no recibe argumento.', () => {
    const saludo = getSaludo();

    expect(saludo).toBe("Hola John");
  });
});
