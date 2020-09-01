import "@testing-library/jest-dom";
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en 08-imp-exp.js", () => {
  test("getHeroeById() debe devolver un héroe por ID.", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find((h) => heroe.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test("getHeroeById() debe devolver undefined si héroe no existe.", () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test("getHeroesByOwner() debe devolver un array con los héroes de DC.", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    const heroesData = heroes.filter((heroe) => heroe.owner === owner);

    expect(heroes).toEqual(heroesData);
  });

  test("getHeroesByOwner() debe devolver un array con los héroes de Marvel.", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);

    expect(heroes).toHaveLength(2);
  });
});
