import { OverviewVideos } from "./text/videos/VideoSections";
const Overview = () => {
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-8 col-xl-7">
        <article className="comp_intro">
          <h1 className="center">Overview of the Tool</h1>
          <p>
            Boozang is a tool that runs directly in your browser, that allows you to test the application just like a
            user would. It differs from common test automation frameworks by being completely code-less.
          </p>
          <p>
            Boozang instead uses natural-language element selectors, that has the advantage of being extremely stable to
            code changes. They allow you to differentiate element based on the what the user sees, not the underlying
            implementation details of your application.
          </p>
          <p> Advantages of the Boozang approach:</p>
          <ul className="_list">
            <li>Tests can be created thirty (x30) times faster compared to coding tests</li>
            <li>Non-programmers can do test automation</li>
            <li>Tests are ultra-stable to changes to your application</li>
            <li>AI can be used to automatically repair tests that are broken</li>
          </ul>
        </article>
      </div>

      <div className="col-12 col-md-4">
        <OverviewVideos />
      </div>
    </div>
  );
};
export default Overview;
