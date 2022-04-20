import "./text.scss";

//Intro pages
export const HomeIntro = () => {
  return (
    <section className="intro_section">
      <h1 className="center">Welcome to the Boozang Test Lab!</h1>
      <p className="preamble">Test different aspects of web applications and practice how to do test automation.</p>
      <p className="preamble">The site also to acts as a testing ground for your automation tools.</p>
      <p>
        Here you find a number of test categories, that each has a number of problems to solve. Each problem has a brief
        description and an information box of why this problem is worth solving. There is also one or two videos on how
        to solve it using the Boozang tool.{" "}
      </p>

      <p>
        You will be able to play around with the tool, but in order to save your tests to our Cloud server you'll need
        to sign-up for a{" "}
        <a target="_blank" rel="noreferrer" href="https://ai.boozang.com/#security/signup">
          Free Trial
        </a>
        .
      </p>
      <p>There will also be a Udemy course shortly that will take you through each task with a solution.</p>
    </section>
  );
};
export const IntroductionIntro = () => {
  return (
    <section className="intro_section">
      <h1 className="center">Introduction</h1>
      <p className="preamble">
        Sometimes writing test automation code is as time-consuming as writing the code itself. One could wonder if it's
        really worth it. Isn't writing the features more important than testing them?
      </p>
      <p>
        Perhaps this is accurate in the beginning of your applications life-cycle. But as your application grows, new
        application features tend to break existing ones.
      </p>
      <p>
        Having automated end-to-end tests greatly reduces the amount of manual testing needed. Developers get instant
        feedback when their code updates break crucial application flows.
      </p>
      <p>
        This increases the productive output from your development team dramatically, and allows you to push features
        into your live system at a faster pace, while resting assured you didn't introduce bugs in your live system.
      </p>
    </section>
  );
};
export const OverviewIntro = () => {
  return (
    <section className="intro_section">
      {" "}
      <h1 className="center">Overview of the Tool</h1>
      <p>
        Boozang is a tool that runs directly in your browser, that allows you to test the application just like a user
        would. It differs from common test automation frameworks by being completely code-less.
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
    </section>
  );
};

//Lists and Tables
export const SortedListIntro = () => {
  return (
    <section className="intro_section">
      <h1>Sorted list </h1>
      <p>
        In this simple application we can add and delete todos from a list. There are several small tests we can do on
        top of this application, and they illustrate element selection and data handling. In order to cover most cases,
        we should add a list of items to the todo-list, and then remove the list of items again.
      </p>
    </section>
  );
};
export const UnsortedListIntro = () => {
  return (
    <section className="intro_section">
      <h1>Unsorted list</h1>
      <p>
        In this section we repeat the same exercise as in sorted list, but allowing the list items to be added to a
        random position in the list. This adds complexity when identifying the elements to remove.
      </p>
    </section>
  );
};
export const CatShelterIntro = () => {
  return (
    <section className="intro_section">
      <h1>Cat shelter</h1>
      <p>
        View the current inhabitants in the Cat Shelter below. If the house icon is enabled, the cat has found a home.
        You can add a cat to the shelter using the "Add" button, and edit a cat by clicking the cat name.
      </p>
    </section>
  );
};
export const TablesIntro = () => {
  return (
    <section className="intro_section">
      <h1>Tables</h1>
      <p>
        Below you'll see a table of animals from the savannah. The animal can be filtered by species, and you can also
        perform different operations on each row, where an animal can be liked or unliked.
      </p>
    </section>
  );
};

//Forms
export const FormFillIntro = () => {
  return (
    <section className="intro_section">
      <h1>Form Fill</h1>
      <p>
        Many applications use forms to submit data. Here you can submit a form and the contents of the form will be
        displayed below.
      </p>
    </section>
  );
};
//Timing
export const SpeedGameIntro = () => {
  return (
    <section className="intro_section">
      <h1>Speed Game</h1>
      <p>
        This game tests the user reaction time. This is also useful to show-case test automation render waits. where x
        is a random time between 1 and 10 seconds. The hit the button as fast as you can. The smaller the number of
        milliseconds above, the better.
      </p>
    </section>
  );
};
export const WaitGameIntro = () => {
  return (
    <section className="intro_section">
      <h1>Wait Game</h1>
      <p>
        As opposed to speed game, this game tests the users time perception skill. This is also useful to showcase delay
        functionality in testing. Try to to hit the "End Game" button after exactly 5 seconds, and the goal is to have
        as few milliseconds as possible above 5 seconds.
      </p>
    </section>
  );
};
//Bug reporting
export const VisualBugsIntro = () => {
  return (
    <section className="intro_section">
      <h1>Visual Bugs</h1>
      <p>
        In this exercise, a city dweller not too familiar with the fauna of Africa was tasked with adding labels to
        pictures of a series of animals. Find the mistakes that were made.
      </p>
    </section>
  );
};
//Conditional logic
export const YellowOrBlueIntro = () => {
  return (
    <section className="intro_section">
      <h1>Yellow or Blue</h1>
      <p>
        Click the Generate color button to display a color with a word and then click the button with the correspondent
        color.
      </p>
    </section>
  );
};
export const CatOrDogIntro = () => {
  return (
    <section className="intro_section">
      <h1>Cat or Dog</h1>
      <p>Click the Generate pet button to display an image and then click the button with the correspondent pet.</p>
    </section>
  );
};
//DOM changes
export const ScrambleItemsIntro = () => {
  return (
    <section className="intro_section">
      <h1>Scramble Items</h1>
      <p>
        This is a super-simple game where simply pressing the right button will result in success. We make the game
        harder by having buttons that scramble the button id, class, content and order attributes, respectively. This
        game, which is simple for a human to play, can be surprisingly hard for a machine to play, as they often rely on
        attributes hidden in the HTML, such as class and id.
      </p>
    </section>
  );
};
export const MultiScrambleIntro = () => {
  return (
    <section className="intro_section">
      <h1>Multi scramble</h1>
      <p>
        This is a simple game where you can change the action labels that manipulate something in your data model. In a
        typical SaaS application, this could, for example, be Project, User or Bank Account - here represented by
        Kangaroo, Koala, or Dolphin. The trick is to let your test automation tool still find the buttons even if the
        wording is changing, but only affecting the appropriate buttons.
      </p>
    </section>
  );
};
//strings
export const ConcatStringsIntro = () => {
  return (
    <section className="intro_section">
      <h1>Concatenate Strings</h1>
      <p>Click the Generate string button to display two strings and then type in the strings together.</p>
    </section>
  );
};
//games
export const KittenCollectIntro = () => {
  return (
    <section className="intro_section">
      <h1>Collecting Kittens</h1>
      <p>
        The kittens have all run away, so it's your job to get them home safe. Collect as many kittens as you can by
        clicking on them, and watch out for the hedgehogs!
      </p>
    </section>
  );
};
export const CanvasGameIntro = () => {
  return (
    <section className="intro_section">
      <h1>Canvas Game</h1>
      <p>The Canvas game helps illustrate how automate on top of an HTML canvas.</p>
    </section>
  );
};
