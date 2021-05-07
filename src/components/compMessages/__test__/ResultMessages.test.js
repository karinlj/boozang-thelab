import ResultMessages from "../ResultMessages";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("testing ResultMessages textcontent and class", () => {
  //mock
  const defaultProps = {
    isOpenWrapper: true,
    resultMessage: "Success",
    subMessage: "5 seconds",
    isSuccess: true,
  };

  //extracting the getByTestId() from render()
  //render(<ResultMessages messageData={defaultProps} />);
  const { getByTestId } = render(<ResultMessages messageData={defaultProps} />);
  //screen.debug();
  const resultMessage = getByTestId("result");
  const message = getByTestId("message");

  expect(resultMessage).toHaveClass("result_wrapper show");
  expect(resultMessage).toHaveTextContent(defaultProps.resultMessage);
  expect(resultMessage).toHaveTextContent(defaultProps.subMessage);
  expect(message).toHaveClass("success_message");
});
