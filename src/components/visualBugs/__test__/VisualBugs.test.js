import VisualBugs from "../VisualBugs";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("control VisualBugs heading", () => {
  render(<VisualBugs />);
  const heading = screen.getByText("Visual Bugs");
  //screen.debug();
  expect(heading).toBeInTheDocument();
});
