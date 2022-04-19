const Cucumber = ({ url, feature }) => {
  return (
    <section className="cucumber">
      <h2>How to test?</h2>
      <p>
        See specification in <span className="gherkin">Cucumber Gherkin</span> syntax by clicking button below.{" "}
      </p>
      <a
        href={`/features/${url}.txt`}
        className="link_btn pink"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cucumber specification opens in new window"
      >
        Feature: {feature}
      </a>
      <p>
        More information in the&nbsp;
        <a
          href="https://cucumber.io/docs/gherkin/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Cucumber docs opens in new window"
        >
          official cucumber docs.
        </a>
      </p>
    </section>
  );
};

export default Cucumber;
