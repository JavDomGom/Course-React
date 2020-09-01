import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas en 05-funciones.js", () => {
  test("getUser() debe devolver un objeto.", () => {
    const userTest = {
      uid: "ABC123",
      username: "JohnDoe",
    };
    const user = getUser();

    expect(user).toStrictEqual(userTest);
  });

  test('getUsuarioActivo() debe devolver un objeto con username "Javier", si recibe argumento.', () => {
    const userTest = {
      uid: "ABC123",
      username: "Javier",
    };
    const user = getUsuarioActivo("Javier");

    expect(user).toStrictEqual(userTest);
  });

  test('getUsuarioActivo() debe devolver un objeto con username "John", si no recibe argumento.', () => {
    const user = getUsuarioActivo();

    expect(user).toStrictEqual({
      uid: "ABC123",
      username: "John",
    });
  });
});
