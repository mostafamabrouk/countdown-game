/* eslint-disable no-undef */
import React from "react";
import renderer from "react-test-renderer";
import { Timer } from "../";
import "jest-styled-components";

test("Timer renders withouut any parameters", () => {
  const component = renderer.create(<Timer />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Timer renders with minutes and seconds", () => {
  const component = renderer.create(<Timer minutes="00" seconds="05" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
