import "./messages.scss";
const ResultMessages = ({
  openWrapper,
  successMessage,
  subMessage,
  messageString,
}) => {
  return (
    <div className={`result_wrapper ${!openWrapper ? "show" : ""}`}>
      <h4
        className={`success_message ${
          successMessage === messageString ? "" : "fail"
        }`}
      >
        {successMessage}
      </h4>
      <p className="sub_message">{subMessage}</p>
    </div>
  );
};
export default ResultMessages;
