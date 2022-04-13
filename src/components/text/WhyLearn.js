import "./text.scss";

//Lists and Tables
export const SortedListTestInfo = () => {
  return (
    <section className="why_learn">
      <h2>Why learn: Sorted list?</h2>
      <p>
        In many SaaS applications, data lists of different kinds are often used. Being able to add items in bulk to a
        list and removing them again is common practice. These operations are key to most SaaS applications and having a
        good grasp of list handling is essential to automating tests of any application.
      </p>
    </section>
  );
};
export const UnsortedListTestInfo = () => {
  return (
    <section className="why_learn">
      <h2>Why learn: Unsorted list?</h2>
      <p>
        One common problem in test automation is to be able to uniquely identify objects in lists. When identifying
        elements using CSS selectors, sometimes you'll need to make assumptions about the order of an item. In general,
        this is bad practice, as it makes the test sensitive to preconditions, something we want to avoid.
      </p>
    </section>
  );
};
export const CatShelterTestInfo = () => {
  return (
    <section className="why_learn">
      <h2>Why learn: Cat Shelter?</h2>
      <p>
        In this exercise, we expand on form testing. Cat Shelters contains multiple views and the form contains radio
        buttons as well as regular inputs. Try to add a list of cats based on an external data source, like a CSV file.
      </p>
    </section>
  );
};
export const TablesTestInfo = () => {
  return (
    <section className="why_learn">
      <h2>Why learn: Tables?</h2>
      <p>Tables are common in SaaS application, but present a number of challenges when automating.</p>
    </section>
  );
};

//Forms
export const FormFillTestInfo = () => {
  return (
    <section className="why_learn">
      <h2>Why learn: Form Fill?</h2>
      <p>
        In test automation, it's important not to not hard-code information entered in forms, as this information will
        often change. A common mistake is to record separate flows for each set of data, making tests numerous and
        difficult to maintain. Ideally, you want to be able to keep your data separate in a JSON or CSV, and map this
        data directly into forms.
      </p>
    </section>
  );
};
//Timing
export const SpeedGameTestInfo = () => {
  return (
    <section className="why_learn">
      <h2>Why learn: Speed Game</h2>
      <p>
        A classic problem in test automation is handling render waits. If certain elements are taking longer to render,
        the test might fail. On the other hand, if we create long delays the overall test takes too long to run. Best if
        is we can wait until an element appears, but then click it as fast as we can.
      </p>
    </section>
  );
};
export const WaitGameTestInfo = () => {
  return (
    <section className="why_learn">
      <h2>Why learn: Wait Game</h2>
      <p>
        Sometimes there is a necessity to wait a certain time to make sure the application catches up. In test
        automation, being reactive is not always the best medicine, and sometimes it pays off to be patient. A common
        scenario is when a back-end system needs to process something behind the scenes, that the front-end isn't aware
        of. In these cases, it's crucial to be able to force a delay.
      </p>
    </section>
  );
};
//Bug reporting
export const VisualBugsTestInfo = () => {
  return (
    <section className="why_learn">
      <h2>Why learn: Visual Bugs</h2>
      <p>
        Even if test automation can be a very powerful tool, doing certain kinds of tasks is best left to the human. An
        example of this is finding visual bugs. Here, you can still use automated bug reporting to help you out. Often
        writing the steps to reproduce a bug in emails or ticketing systems can be very time-consuming and add
        unnecessary overhead. Use test automation technology and in-browser annotations to partly automate this process.
      </p>
    </section>
  );
};
//Conditional logic
export const YellowOrBlueTestInfo = () => {
  return (
    <section className="why_learn">
      <h2>Why learn: Yellow or Blue</h2>
      <p>
        In this case, we look at basic condition handling. If something exists, do this, otherwise, do that. This is the
        fundament on doing tests on top of a system where the initial state isn't known, or a future state cannot be
        predicted. By using logic like this, we can allow our tests to adapt to how the application behaves.
      </p>
    </section>
  );
};
export const CatOrDogTestInfo = () => {
  return (
    <section className="why_learn">
      <h2>Why learn: Cat or Dog</h2>
      <p>
        Often it's preferred to make all assertions on existance of elements or simple Boolean expressions. There are
        times in test automation where we need to base our logic on an image.{" "}
      </p>
      <p>
        This can be especially useful when asserting the state of a graphical toggle-button, where the element and text
        content is the same, regardless of state.
      </p>
    </section>
  );
};
//DOM changes
export const ScrambleItemsTestInfo = () => {
  return (
    <section className="why_learn">
      <h2>Why learn: Scramble Items</h2>
      <p>
        XPath and CSS selectors are notoriously brittle, and often changes to id and class attributes will break test
        cases.
      </p>
      <p>
        Here you can simulate changes to both id, class, and content to see how your test tool handles the challenge.
      </p>
    </section>
  );
};
export const MultiScrambleTestInfo = () => {
  return (
    <section className="why_learn">
      <h2>Why learn: Multi scramble</h2>
      <p>
        Keeping your tests stable for code updates are one of the biggest challenges to test automation. Often,
        technical details like class and id are changing constantly.
      </p>
      <p>
        But even the wording can change for common actions. "Add" gets replaced by "Create", "Delete" get replaced by
        "Remove".
      </p>
    </section>
  );
};
//strings
export const ConcatStringTestInfo = () => {
  return (
    <section className="why_learn">
      <h2>Why learn: Concatenate Strings</h2>
      <p>
        Very often in test automation, we need to be able to use the data that the application outputs in a later test
        step. A good example of this is when doing assertions based on computer-generated id:s or time or date strings.
      </p>
    </section>
  );
};
//games
export const KittenCollectTestInfo = () => {
  return (
    <section className="why_learn">
      <h2>Why learn: Collecting Kittens</h2>
      <p>
        Any web application is a little bit like a game. By automating game play we combine automating actions,
        conditional logic and handling waits. If you can automate this game, you are far along in handling any scenario
        that may arise in a SaaS application.
      </p>
    </section>
  );
};
export const CanvasGameTestInfo = () => {
  return (
    <section className="why_learn">
      <h2>Why learn: Canvas Game</h2>
      <p>
        This exercise contains two challenging obstacles. The most challenging is that playing field is an HTML canvas,
        which is a single HTML element. This means typical test automation element locators will be useless, and one is
        usually forces to hard-code events using coordinates (x,y). The second challenge is that we need to automate
        drag and drop, which forces us to simulate multiple events.
      </p>
    </section>
  );
};
