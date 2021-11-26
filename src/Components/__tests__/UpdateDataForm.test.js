import {fireEvent, 
  render, 
  screen, 
  waitFor 
} from "@testing-library/react";
import UpdateDataForm from "../Organization/UpdateDataForm";
import userEvent from "@testing-library/user-event";


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