import SpeedGame from "../SpeedGame";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(() => {
  cleanup();
});
// test("should render SpeedGame component", () => {
//   render(<SpeedGame />);
//   const SpeedGameElement = screen.getByTestId("SpeedGame");
//   expect(SpeedGameElement).toBeInTheDocument();
// });

// test("should render SpeedGame component", () => {
//   const tree = renderer.create(<SpeedGame />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

test("resultMessage should have correct classname when click on Start", () => {
  //   const { debug } = render(<SpeedGame />);
  //   debug();
  const { getByTestId } = render(<SpeedGame test="0" />);
  const startBtnElement = getByTestId("startBtn");

  const resultMessage = getByTestId("result");

  fireEvent.click(startBtnElement);

  expect(resultMessage).toHaveClass("result_wrapper");
});

// test("function handleStart should be called when click on startBtn", () => {
//mock a function
//   const handleStart = jest.fn();
//   const { getByTestId } = render(<SpeedGame />);
// });

// test("test", () => {
//   expect(true).toBe(true);
// });
