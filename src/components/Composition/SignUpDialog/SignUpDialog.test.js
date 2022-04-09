import React from "react";
import { shallow } from "enzyme";
import SignUpDialog from "./SignUpDialog";

describe("SignUpDialog", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SignUpDialog />);
    expect(wrapper).toMatchSnapshot();
  });
});
