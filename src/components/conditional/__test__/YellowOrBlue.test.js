import YellowOrBlue from "../YellowOrBlue";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("control YellowOrBlue heading", () => {
  render(<YellowOrBlue />);
  const heading = screen.getByText("Yellow or Blue");
  expect(heading).toBeInTheDocument();
});

//getByDisplayValue
test("Check that output_section gets class show on click on btn", () => {
  render(<YellowOrBlue />);
  //screen.debug();
  const btn = screen.getByDisplayValue("Generate Color");
  const output = screen.getByTestId("output");
  fireEvent.click(btn);

  expect(output).toHaveClass("output_section show");
});
