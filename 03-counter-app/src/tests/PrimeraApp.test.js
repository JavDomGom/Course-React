import React from "react";
// import { render } from "@testing-library/react";
import { render } from "@testing-library/jest-dom";
import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas en PrimeraApp.js", () => {
  //   test('Debe mostrar el mensaje "Hola mundo"', () => {
  //     const saludo = "Hola mundo";
  //     const { getByText } = render(<PrimeraApp saludo={saludo} />);

  //     expect(getByText(saludo)).toBeInTheDocument();
  //   });

  test("Debe mostrar <PrimeraApp /> correctamente", () => {
    const saludo = "Hola mundo";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el subtitulo enviado por props", () => {
    const saludo = "Hola mundo";
    const subtitulo = "Soy un subtitulo";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );

    const textoParrafo = wrapper.find("p").text();

    expect(textoParrafo).toBe(subtitulo);
  });
});
