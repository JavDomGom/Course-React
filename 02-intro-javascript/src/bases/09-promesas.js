import { getHeroById } from "./bases/08-import-export";
import heroes from "./data/heroes";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // Tarea
//     const hero = getHeroById(2);

//     resolve(hero);
//     // reject("No se pudo encontrar el héroe.");
//   }, 2000);
// });

// promesa
//   .then((hero) => {
//     console.log("hero: ", hero);
//   })
//   .catch((err) => console.warn(err));

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Tarea
      const hero = getHeroById(id);
      if (hero) {
        resolve(hero);
      } else {
        reject("No se pudo encontrar el héroe.");
      }
    }, 2000);
  });
};

getHeroByIdAsync(1).then(console.log).catch(console.warn);
