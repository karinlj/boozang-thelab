import Kittens from "../Kittens";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Kitten render", () => {
  //   const kittens = [
  //     { id: 1, icon: '<img src="#" alt="Cat"/>', top: "5px", left: "10px" },
  //     { id: 2, icon: '<img src="#" alt="Cat"/>', top: "8px", left: "20px" },
  //     { id: 3, icon: '<img src="#" alt="Cat"/>', top: "12px", left: "30px" },
  //   ];
  //   const handleClick = jest.fn();

  // render(<Kittens kittens={kittens} onclick={handleClick} />);

  const defaultProps = {
    kittens: [
      { id: 1, icon: '<img src="#" alt="Cat"/>', top: "5px", left: "10px" },
      { id: 2, icon: '<img src="#" alt="Cat"/>', top: "8px", left: "20px" },
      { id: 3, icon: '<img src="#" alt="Cat"/>', top: "12px", left: "30px" },
    ],
    handleClick: jest.fn(),
  };

  render(<Kittens {...defaultProps} />);

  const kitten = document.getElementsByTagName("span")[0];
  expect(kitten).toBeInTheDocument;
  //screen.debug();
});
