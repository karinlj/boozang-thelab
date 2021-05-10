import ScrambleItems from "../ScrambleItems";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Control ScrambleItems heading", () => {
  render(<ScrambleItems />);
  const heading = screen.getByText("Scramble Items");
  // screen.debug();
  expect(heading).toBeInTheDocument();
});

test("Check that output gets class clicked_class on click on btn", () => {
  render(<ScrambleItems />);
  const btn = screen.getByDisplayValue("puma");
  const output = screen.getByTestId("btnOne");
  fireEvent.click(btn);

  expect(output).toHaveClass("code clicked_class");
});
