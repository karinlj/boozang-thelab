import SpeedGame from "../SpeedGame";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
//import renderer from "react-test-renderer";

// test("render speedgame component", () => {
//   render(<SpeedGame />);
//   screen.debug();
// });

//getByText()
test("render speedgame heading", () => {
  render(<SpeedGame />);
  expect(screen.getByText("Speed Game")).toBeInTheDocument();
});

//getByTestId()
test("render speedgame startBtn", () => {
  render(<SpeedGame />);
  const startBtn = screen.getByTestId("startBtn");
  expect(startBtn).toBeInTheDocument();
});

// fireEvent.click()
test("resultMessage should have correct classname when click on Start", () => {
  render(<SpeedGame />);
  const startBtn = screen.getByTestId("startBtn");
  const resultMessage = screen.getByTestId("result");

  fireEvent.click(startBtn);
  expect(resultMessage).toHaveClass("result_wrapper");
});

// test("test", () => {
//   expect(true).toBe(true);
// });
