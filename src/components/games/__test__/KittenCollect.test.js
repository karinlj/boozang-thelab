import KittenCollect from "../KittenCollect";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Control KittenCollect heading", () => {
  render(<KittenCollect />);
  const heading = screen.getByText("Collecting Kittens");
  //screen.debug();
  expect(heading).toBeInTheDocument();
});

test("Check message text when click on start", () => {
  render(<KittenCollect />);
  const btn = screen.getByDisplayValue("Start Game");
  const message = screen.getByTestId("message");
  fireEvent.click(btn);

  expect(message).toHaveTextContent("");
});
