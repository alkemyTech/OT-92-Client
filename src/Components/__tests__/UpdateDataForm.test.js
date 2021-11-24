import {render, screen, cleanup} from "@testing-library/react";
import UpdateDataForm from "../Organization/UpdateDataForm";


test("should render UpdateDataForm", () => {
  render(<UpdateDataForm />);
  const UpdateDataFormElement = screen.getByTestId("name");
  expect(UpdateDataFormElement).toBeInTheDocument();
});