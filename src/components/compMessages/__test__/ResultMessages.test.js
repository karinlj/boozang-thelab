import ResultMessages from "../ResultMessages";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("testing ResultMessages textcontent and class", () => {
  //   const { debug } = render(<ResultMessages />);
  //   debug();
  //mock
  const messageData = {
    isOpenWrapper: true,
    resultMessage: "Success",
    subMessage: "5 seconds",
    isSuccess: true,
  };

  //extracting the getByTestId() from render()
  const { getByTestId } = render(<ResultMessages messageData={messageData} />);
  const resultMessage = getByTestId("result");
  const message = getByTestId("message");

  expect(resultMessage).toHaveClass("result_wrapper show");
  expect(resultMessage).toHaveTextContent(messageData.resultMessage);
  expect(resultMessage).toHaveTextContent(messageData.subMessage);
  expect(message).toHaveClass("success_message");
});
