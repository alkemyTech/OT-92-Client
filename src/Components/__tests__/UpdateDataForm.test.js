import {render, screen, cleanup, fireEvent} from "@testing-library/react";
import UpdateDataForm from "../Organization/UpdateDataForm";


test("should render nameError", () => {
  render(<UpdateDataForm />);
  const input = screen.getByTestId("nameError");
  fireEvent.change(input, {target: {value: ""}});
  expect(input.value).toBe("");
});

test("should render logoError", () => {
  render(<UpdateDataForm />);
  const input = screen.getByTestId("logoError");
  fireEvent.change(input, {target: {value: ""}});
  expect(input.value).toBe("");
});

test("should render longDescriptionError", () => {
  render(<UpdateDataForm />);
  const input = screen.getByTestId("longDescriptionError");
  fireEvent.change(input, {target: {value: ""}});
  expect(input.value).toBe("");
});

test("should render instagramUrlError", () => {
  render(<UpdateDataForm />);
  const input = screen.getByTestId("instagramUrlError");
  fireEvent.change(input, {target: {value: ""}});
  expect(input.value).toBe("");
});

test("should render facebookUrlError", () => {
  render(<UpdateDataForm />);
  const input = screen.getByTestId("facebookUrlError");
  fireEvent.change(input, {target: {value: ""}});
  expect(input.value).toBe("");
});

