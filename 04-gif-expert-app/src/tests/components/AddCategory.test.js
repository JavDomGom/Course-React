import React from "react";
import "@testing-library/dom";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Debe mostrar el componente correctamente.", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe cambiar la caja de texto.", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";

    input.simulate("change", { target: { value: value } });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("No debe enviar la info con onSubmit.", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });
});
