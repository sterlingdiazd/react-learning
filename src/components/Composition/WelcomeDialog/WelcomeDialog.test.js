import React from "react";
import { shallow } from "enzyme";
import WelcomeDialog from "./WelcomeDialog";

describe("WelcomeDialog", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<WelcomeDialog />);
    expect(wrapper).toMatchSnapshot();
  });
});
