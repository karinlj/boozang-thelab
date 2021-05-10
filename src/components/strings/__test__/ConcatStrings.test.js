import ConcatStrings from "../ConcatStrings";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Control ConcatStrings heading", () => {
  render(<ConcatStrings />);
  const heading = screen.getByText("Concatenate Strings");
  //screen.debug();
  expect(heading).toBeInTheDocument();
});

test("Check that output_section gets class show on click on btn", () => {
  render(<ConcatStrings />);
  const btn = screen.getByDisplayValue("Generate strings");
  const output = screen.getByTestId("output");
  fireEvent.click(btn);

  expect(output).toHaveClass("output_section show");
});
