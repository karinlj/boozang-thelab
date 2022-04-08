import "./messages.scss";
const ResultMessages = ({ messageData }) => {
  return (
    // toggle between opacity:0 and 1
    <div className={`result_wrapper ${messageData.isOpenWrapper ? "show" : ""}`} data-testid="result">
      {/* toggle between green or red message */}
      <p className={`success_message ${messageData.isSuccess ? "" : "fail"}`} data-testid="message">
        {messageData.resultMessage}
      </p>
      {messageData.subMessage && <p className="sub_message">{messageData.subMessage}</p>}
    </div>
  );
};
export default ResultMessages;
