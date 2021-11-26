import {fireEvent, 
  render, 
  screen, 
  waitFor 
} from "@testing-library/react";
import renderer from "react-test-renderer";
import UpdateDataForm from "../Organization/UpdateDataForm";
import userEvent from "@testing-library/user-event";


test("should render nameError", () => {
  render(<UpdateDataForm />);
  const inputName = screen.getByTestId("nameError");
  fireEvent.change(inputName, {target: {value: ""}});
  expect(inputName.value).toBe("");
});

test("should render logoError", () => {
  render(<UpdateDataForm />);
  const inputLogo = screen.getByTestId("logoError");
  fireEvent.change(inputLogo, {target: {value: ""}});
  expect(inputLogo.value).toBe("");
});

test("should render longDescriptionError", () => {
  render(<UpdateDataForm />);
  const inputDescription = screen.getByTestId("longDescriptionError");
  fireEvent.change(inputDescription, {target: {value: ""}});
  expect(inputDescription.value).toBe("");
});

test("should render instagramUrlError", () => {
  render(<UpdateDataForm />);
  const inputInstagram = screen.getByTestId("instagramUrlError");
  fireEvent.change(inputInstagram, {target: {value: ""}});
  expect(inputInstagram.value).toBe("");
});

test("should render facebookUrlError", () => {
  render(<UpdateDataForm />);
  const inputFacebook = screen.getByTestId("facebookUrlError");
  fireEvent.change(inputFacebook, {target: {value: ""}});
  expect(inputFacebook.value).toBe("");
});

test("rendering and submitting a form", async () => {
  const handleSubmit = jest.fn();
  render(<UpdateDataForm onSubmit={handleSubmit}/>);

  userEvent.type(screen.getByLabelText(/name/i), "");
  userEvent.type(screen.getByLabelText(/logo/i), "");
  userEvent.type(screen.getByLabelText(/longDescription/i), "");
  userEvent.type(screen.getByLabelText(/linkInstagram/i), "");
  userEvent.type(screen.getByLabelText(/linkFacebook/i), "");

  userEvent.click(screen.getByRole("button", {name: /submit/i}));

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      name: "",
      logo: "",
      longDescription: "",
      linkInstagram: "",
      linkFacebook: ""
    }),
  );
});

test("matches snapshot", () => {
  const tree = renderer.create(<UpdateDataForm />).toJSON();
  expect(tree).toMatchSnapshot();
});