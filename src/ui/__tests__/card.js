/* eslint-disable no-undef */
import React from "react";
import renderer from "react-test-renderer";
import { Card } from "../";
import "jest-styled-components";

test("Card renders withouut any parameters", () => {
  const component = renderer.create(<Card />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Card renders with character", () => {
  const component = renderer.create(<Card char="s" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Card renders with character and error", () => {
  const component = renderer.create(<Card char="s" error={true} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Card renders with character and success", () => {
  const component = renderer.create(<Card char="s" success={true} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Card renders with character and dragged before", () => {
  const component = renderer.create(<Card char="s" opaque={true} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
