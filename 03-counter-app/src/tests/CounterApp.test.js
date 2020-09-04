import React from "react";
// import { render } from "@testing-library/react";
import { render } from "@testing-library/jest-dom";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas en CounterApp.js", () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("Debe mostrar <CounterApp /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el valor por defecto de 100", () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);

    const h2 = wrapper.find("h2").text();

    expect(h2).toBe(value.toString());
  });

  test("Debe incrementar el valor con el botón +1", () => {
    wrapper.find("button").at(0).simulate("click");
    const h2 = wrapper.find("h2").text();
    expect(h2).toBe("11");
  });

  test("Debe decrementar el valor con el botón -1", () => {
    wrapper.find("button").at(2).simulate("click");
    const h2 = wrapper.find("h2").text();
    expect(h2).toBe("9");
  });

  test("Debe resetear el valor por defecto con el botón Reset", () => {
    const value = 105;
    const wrapper = shallow(<CounterApp value={value} />);

    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const h2 = wrapper.find("h2").text();

    expect(h2).toBe(value.toString());
  });
});
