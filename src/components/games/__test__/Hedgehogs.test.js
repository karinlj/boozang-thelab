import Hedgehogs from "../Hedgehogs";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Hedgehog render", () => {
  const hedgehogs = [
    { id: 1, icon: '<img src="#" alt="Hedgehog"/>', top: "5px", left: "10px" },
    { id: 2, icon: '<img src="#" alt="Hedgehog"/>', top: "8px", left: "20px" },
    { id: 3, icon: '<img src="#" alt="Hedgehog"/>', top: "12px", left: "30px" },
  ];
  const handleClick = jest.fn();

  render(<Hedgehogs hedgehogs={hedgehogs} onclick={handleClick} />);
  const hedgehog = document.getElementsByTagName("span")[0];
  expect(hedgehog).toBeInTheDocument;
  //screen.debug();
});
