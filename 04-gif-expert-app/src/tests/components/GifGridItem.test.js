import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem />", () => {
  const title = "Un título";
  const url = "https://localhost/test.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Debe mostrar el componente correctamente.", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe tener un párrafo con el título.", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("Debe tener una imagen con src y alt de los props.", () => {
    const img = wrapper.find("img");
    // console.log(img.prop("src"));
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("Debe tener la clase animated__fadeIn.", () => {
    const div = wrapper.find("div");
    // console.log(div.prop("className"));
    expect(div.prop("className")).toContain("animate__fadeIn");
  });
});
