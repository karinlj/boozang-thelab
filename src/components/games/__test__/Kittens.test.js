import Kittens from "../Kittens";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Kittens render", () => {
  const defaultProps = {
    kittens: ["luki", "truls", "hugo", "filip"],
    handleClick: jest.fn(),
  };
  //   const id = Math.random();

  render(<Kittens {...defaultProps} />);

  //   const heading = screen.getByText("Collecting Kittens");
  screen.debug();
  //expect(heading).toBeInTheDocument();
});

// test("Check message text when click on start", () => {
//   render(<KittenCollect />);
//   const btn = screen.getByDisplayValue("Start Game");
//   const message = screen.getByTestId("message");
//   fireEvent.click(btn);

//   expect(message).toHaveTextContent("");
// });
