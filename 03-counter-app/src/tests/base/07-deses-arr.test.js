import "@testing-library/jest-dom";
import { retornaArreglo } from "../../base/07-deses-arr";

describe("Pruebas en 07-deses-arr.js", () => {
  test("retornaArreglo() debe devolver una string y un number.", () => {
    const [cadena, numero] = retornaArreglo();

    expect(cadena).toBe("ABC");
    expect(typeof cadena).toBe("string");
    expect(numero).toBe(123);
    expect(typeof numero).toBe("number");
  });
});
