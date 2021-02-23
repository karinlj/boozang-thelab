//Lists
export const SortedListTestInfo = () => {
  return (
    <article className="comp_test_info">
      <h4>Why learn: Sorted list?</h4>
      <p>
        In many SaaS applications, data lists of different kinds are often used.
        Being able to add items in bulk to a list and removing them again is
        common practice. These operations are key to most SaaS applications and
        having a good grasp of list handling is essential to automating tests of
        any application.
      </p>
    </article>
  );
};
export const UnsortedListTestInfo = () => {
  return (
    <article className="comp_test_info">
      <h4>Why learn: Unsorted list?</h4>
      <p>
        One common problem in test automation is to be able to uniquely identify
        objects in lists. When identifying elements using CSS selectors,
        sometimes you'll need to make assumptions about the order of an item. In
        general, this is bad practice, as it makes the test sensitive to
        preconditions, something we want to avoid.
      </p>
    </article>
  );
};
export const CatShelterTestInfo = () => {
  return (
    <article className="comp_test_info">
      <h4>Why learn: Cat Shelter?</h4>
      <p>
        Missing until dinner time destroy the blinds lay on arms while you're
        using the keyboard or i cry and cry and cry unless you pet me, and then
        maybe i cry just for fun. Hit you unexpectedly who's the baby, for head
        nudges stare out the window.
      </p>
    </article>
  );
};
//Forms
export const FormValidationTestInfo = () => {
  return (
    <article className="comp_test_info">
      <h4>Why learn: Form validation?</h4>
      <p>
        In test automation, it's important not to not hard-code information
        entered in forms, as this information will often change. A common
        mistake is to record separate flows for each set of data, making tests
        numerous and difficult to maintain. Ideally, you want to be able to keep
        your data separate in a JSON or CSV, and map this data directly into
        forms.
      </p>
    </article>
  );
};
//Timing
export const SpeedGameTestInfo = () => {
  return (
    <article className="comp_test_info">
      <h4>Why learn: Speed Game</h4>
      <p>
        A classic problem in test automation is handling render waits. If
        certain elements are taking longer to render, the test might fail. On
        the other hand, if we create long delays the overall test takes too long
        to run. Best if is we can wait until an element appears, but then click
        it as fast as we can.
      </p>
    </article>
  );
};
export const WaitGameTestInfo = () => {
  return (
    <article className="comp_test_info">
      <h4>Why learn: Wait Game</h4>
      <p>
        Sometimes there is a necessity to wait a certain time to make sure the
        application catches up. In test automation, being reactive is not always
        the best medicine, and sometimes it pays off to be patient. A common
        scenario is when a back-end system needs to process something behind the
        scenes, that the front-end isn't aware of. In these cases, it's crucial
        to be able to force a delay.
      </p>
    </article>
  );
};
//Bug reporting
export const VisualBugsTestInfo = () => {
  return (
    <article className="comp_test_info">
      <h4>Why learn: Visual Bugs</h4>
      <p>
        Even if test automation can be a very powerful tool, doing certain kinds
        of tasks is best left to the human. An example of this is finding visual
        bugs. Here, you can still use automated bug reporting to help you out.
        Often writing the steps to reproduce a bug in emails or ticketing
        systems can be very time-consuming and add unnecessary overhead. Use
        test automation technology and in-browser annotations to partly automate
        this process.
      </p>
    </article>
  );
};
//Conditional logic
export const YellowOrBlueTestInfo = () => {
  return (
    <article className="comp_test_info">
      <h4>Why learn: Yellow or Blue</h4>
      <p>
        In this case, we look at basic condition handling. If something exists,
        do this, otherwise, do that. This is the fundament on doing tests on top
        of a system where the initial state isn't known, or a future state
        cannot be predicted. By using logic like this, we can allow our tests to
        adapt to how the application behaves.
      </p>
    </article>
  );
};
export const CatOrDogTestInfo = () => {
  return (
    <article className="comp_test_info">
      <h4>Why learn: Cat or Dog</h4>
      <p>
        Often it's preferred to make all assertions on existance of elements or
        simple Boolean expressions. There are times in test automation where we
        need to base our logic on an image.{" "}
      </p>
      <p>
        This can be especially useful when asserting the state of a graphical
        toggle-button, where the element and text content is the same,
        regardless of state.
      </p>
    </article>
  );
};
//DOM changes
export const ScrambleItemsTestInfo = () => {
  return (
    <article className="comp_test_info">
      <h4>Why learn: Scramble Items</h4>
      <p>
        XPath and CSS selectors are notoriously brittle, and often changes to id
        and class attributes will break test cases.
      </p>
      <p>
        Here you can simulate changes to both id, class, and content to see how
        your test tool handles the challenge.
      </p>
    </article>
  );
};
export const MultiScrambleTestInfo = () => {
  return (
    <article className="comp_test_info">
      <h4>Why learn: Multi scramble</h4>
      <p>
        Keeping your tests stable for code updates are one of the biggest
        challenges to test automation. Often, technical details like class and
        id are changing constantly.
      </p>
      <p>
        But even the wording can change for common actions. "Add" gets replaced
        by "Create", "Delete" get replaced by "Remove".
      </p>
    </article>
  );
};
//strings
export const ConcatStringTestInfo = () => {
  return (
    <article className="comp_test_info">
      <h4>Why learn: Concatenate Strings</h4>
      <p>
        Very often in test automation, we need to be able to use the data that
        the application outputs in a later test step. A good example of this is
        when doing assertions based on computer-generated id:s or time or date
        strings.
      </p>
    </article>
  );
};
//games
export const KittenCollectTestInfo = () => {
  return (
    <article className="comp_test_info">
      <h4>Why learn: Collecting Kittens</h4>
      <p>
        Any web application is a little bit like a game. By automating game play
        we combine automating actions, conditional logic and handling waits. If
        you can automate this game, you are far along in handling any scenario
        that may arise in a SaaS application.
      </p>
    </article>
  );
};
