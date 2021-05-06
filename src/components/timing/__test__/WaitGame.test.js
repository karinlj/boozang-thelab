import WaitGame from "../WaitGame";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

test("WaitGame render", () => {
  //   const { debug } = render(<WaitGame />);
  //   debug();
  //extracting the getByTestId() from render()
  // const { getByTestId } = render(<WaitGame />);
  // const startBtnElement = getByTestId("startBtn");
  // const resultMessage = getByTestId("result");
  // fireEvent.click(startBtnElement);
  // expect(resultMessage).toHaveClass("result_wrapper");
});
