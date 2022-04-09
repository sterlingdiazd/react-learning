import React from "react";
import { shallow } from "enzyme";
import Calculator from "./Calculator";

describe("Calculator", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Calculator />);
    expect(wrapper).toMatchSnapshot();
  });
});
