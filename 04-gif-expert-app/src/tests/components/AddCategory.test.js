import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  const setCategories = () => {};

  test("Debe mostrar el componente correctamente.", () => {
    const wrapper = shallow(<AddCategory setCategories={setCategories} />);
    expect(wrapper).toMatchSnapshot();
  });
});
