import React from "react";
import { shallow } from "enzyme";
import SplitPane from "./SplitPane";

describe("SplitPane", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SplitPane />);
    expect(wrapper).toMatchSnapshot();
  });
});
