import { HomeVideos } from "./text/videos/VideoSections";
const Home = () => {
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <article className="comp_intro">
          <h1 className="center">Welcome to theLab!</h1>
          <p>Welcome to the Boozang Test Lab!</p>
          <p>
            Test different aspects of web applications and practice how to do
            test automation.
          </p>
          <p>
            The site also to acts as a testing ground for your automation tools.
          </p>
          <p>
            Here you find a number of test categories, that each has a number of
            problems to solve. Each problem has a brief description and an
            information box of why this problem is worth solving. There is also
            one or two videos on how to solve it using the Boozang tool.{" "}
          </p>
          <p>
            If you want to see how these tasks can be solved using the Boozang
            tool you can launch it{" "}
            <a href="http://thelab.boozang.com/bz-staging.html?fbclid=IwAR0QFbdC4i9iguRNXQjXhYgnyNjS0_qnVwbw6Q3Od8-fo753MIhIS0ZN7DM#5bea26946c43587a5950f410/0.0.1/m5/t2/">
              here
            </a>
            .
          </p>
          <p>
            You will be able to play around with the tool, but in order to save
            your tests to our Cloud server you'll need to sign-up for a{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://ai.boozang.com/#security/signup"
            >
              Free Trial
            </a>
            .
          </p>
          <p>
            There will also be a Udemy course shortly that will take you through
            each task with a solution.
          </p>
        </article>
      </div>
      <div className="col-12 col-md-5">
        <HomeVideos />
      </div>
    </div>
  );
};
export default Home;
