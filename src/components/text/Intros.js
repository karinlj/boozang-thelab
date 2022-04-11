import "./text.scss";

//Lists and Tables
export const SortedListIntro = () => {
  return (
    <section className="comp_intro">
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
    <section className="comp_intro">
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
    <section className="comp_intro">
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
    <section className="comp_intro">
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
    <section className="comp_intro">
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
    <section className="comp_intro">
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
    <section className="comp_intro">
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
    <section className="comp_intro">
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
    <section className="comp_intro">
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
    <section className="comp_intro">
      <h1>Cat or Dog</h1>
      <p>Click the Generate pet button to display an image and then click the button with the correspondent pet.</p>
    </section>
  );
};
//DOM changes
export const ScrambleItemsIntro = () => {
  return (
    <section className="comp_intro">
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
    <section className="comp_intro">
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
    <section className="comp_intro">
      <h1>Concatenate Strings</h1>
      <p>Click the Generate string button to display two strings and then type in the strings together.</p>
    </section>
  );
};
//games
export const KittenCollectIntro = () => {
  return (
    <section className="comp_intro">
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
    <section className="comp_intro">
      <h1>Canvas Game</h1>
      <p>The Canvas game helps illustrate how automate on top of an HTML canvas</p>
    </section>
  );
};
