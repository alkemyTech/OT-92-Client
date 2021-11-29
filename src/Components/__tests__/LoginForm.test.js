import LoginForm from "../Auth/LoginForm";
import {fireEvent, 
  render, 
  screen,
} from "@testing-library/react";
import renderer from "react-test-renderer";

test("Should render emailError", () => {
  render(<LoginForm />);
  const inputEmail = screen.getByTestId("emailError");
  fireEvent.change(inputEmail, {target: {value: ""}});
  expect(inputEmail.value).toBe("");
});

test("Should render passwordError", () => {
  render(<LoginForm />);
  const inputPassword = screen.getByTestId("passwordError");
  fireEvent.change(inputPassword, {target: {value: ""}});
  expect(inputPassword.value).toBe("");
});

test("matches snapshot", () => {
  const tree = renderer.create(<LoginForm />).toJSON();
  expect(tree).toMatchSnapshot();
});