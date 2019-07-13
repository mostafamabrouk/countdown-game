/* eslint-disable no-undef */
import React from "react";
import renderer from "react-test-renderer";
import { Notification } from "../";
import "jest-styled-components";

test("Notification renders withouut any parameters", () => {
  const component = renderer.create(<Notification />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Notification renders with message", () => {
  const component = renderer.create(
    <Notification>This is a message</Notification>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Notification renders with message and error", () => {
  const component = renderer.create(
    <Notification error={true}>This is a message</Notification>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Notification renders with message and success", () => {
  const component = renderer.create(
    <Notification success={true}>This is a message</Notification>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
