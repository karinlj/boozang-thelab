import { HomeVideos } from "./text/videos/VideoSections";
const Home = () => {
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-8">
        <article className="comp_intro">
          <h1 className="center">Welcome to the Boozang Test Lab!</h1>
          <p className="preamble">Test different aspects of web applications and practice how to do test automation.</p>
          <p className="preamble">The site also to acts as a testing ground for your automation tools.</p>
          <p>
            Here you find a number of test categories, that each has a number of problems to solve. Each problem has a
            brief description and an information box of why this problem is worth solving. There is also one or two
            videos on how to solve it using the Boozang tool.{" "}
          </p>

          <p>
            You will be able to play around with the tool, but in order to save your tests to our Cloud server you'll
            need to sign-up for a{" "}
            <a target="_blank" rel="noreferrer" href="https://ai.boozang.com/#security/signup">
              Free Trial
            </a>
            .
          </p>
          <p>There will also be a Udemy course shortly that will take you through each task with a solution.</p>
        </article>
      </div>
      <div className="col-12 col-md-4">
        <HomeVideos />
      </div>
    </div>
  );
};
export default Home;
