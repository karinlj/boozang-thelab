import ResultMessages from "../ResultMessages";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

test("hej", () => {
  const openWrapper = true;
  const successMessage = "hej";
  const subMessage = "hejdo";
  const messageString = "You are fast!!";

  const { getByTestId } = render(
    <ResultMessages
      openWrapper={openWrapper}
      successMessage={successMessage}
      subMessage={subMessage}
      messageString={messageString}
    />
  );

  //   const resultMessage = getByTestId("result");

  //   expect(resultMessage).toHaveClass("result_wrapper");
  //   expect(resultMessage).toHaveTextContent(successMessage);
  //   expect(resultMessage).toHaveTextContent(subMessage);
  //   expect(resultMessage).toHaveTextContent(messageString);

  const { debug } = render(<ResultMessages />);
  debug();
});
