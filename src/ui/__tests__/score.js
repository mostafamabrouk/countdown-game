/* eslint-disable no-undef */
import React from "react";
import renderer from "react-test-renderer";
import { Score } from "../";
import "jest-styled-components";

test("Score renders withouut any parameters", () => {
  const component = renderer.create(<Score />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Score renders with minutes and seconds", () => {
  const component = renderer.create(<Score wins={0} loses={2} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
