import React from "react";
import { shallow } from "enzyme";
import TestReact from "./TestReact";

describe("TestReact", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TestReact />);
    expect(wrapper).toMatchSnapshot();
  });
});
