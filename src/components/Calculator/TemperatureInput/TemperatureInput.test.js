import React from "react";
import { shallow } from "enzyme";
import TemperatureInput from "./TemperatureInput";

describe("TemperatureInput", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TemperatureInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
