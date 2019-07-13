/* eslint-disable no-undef */
import React from "react";
import renderer from "react-test-renderer";
import { Button } from "../";
import "jest-styled-components";

test("Button renders the same", () => {
  const component = renderer.create(<Button>Label</Button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
