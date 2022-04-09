import React from "react";
import { shallow } from "enzyme";
import FancyBorder from "./FancyBorder";

describe("FancyBorder", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FancyBorder />);
    expect(wrapper).toMatchSnapshot();
  });
});
