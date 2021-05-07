import WaitGame from "../WaitGame";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

//getByDisplayValue
test("render stopbtn when click on startBtn", () => {
  render(<WaitGame />);
  const startBtn = screen.getByDisplayValue("Start Game");

  fireEvent.click(startBtn);
  const stopBtn = screen.getByDisplayValue("Start Game");
  expect(stopBtn).toBeInTheDocument();
});

test("correct class on result message component when click on stop", () => {
  render(<WaitGame />);
  const startBtn = screen.getByDisplayValue("Start Game");
  fireEvent.click(startBtn);

  const stopBtn = screen.getByDisplayValue("End Game");
  fireEvent.click(stopBtn);

  const resultMessage = screen.getByTestId("result");
  //screen.debug();
  expect(resultMessage).toHaveClass("result_wrapper show");
});
