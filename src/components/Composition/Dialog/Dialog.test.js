import React from "react";
import { shallow } from "enzyme";
import Dialog from "./Dialog";

describe("Dialog", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Dialog />);
    expect(wrapper).toMatchSnapshot();
  });
});
