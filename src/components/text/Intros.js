//Lists
export const SortedListIntro = () => {
  return (
    <article className="comp_intro">
      <h1>Sorted list </h1>
      <p>
        In this simple application we can add and delete todos from a list.
        There are several small tests we can do on top of this application, and
        they illustrate element selection and data handling. In order to cover
        most cases, we should add a list of items to the todo-list, and then
        remove the list of items again.
      </p>
    </article>
  );
};
export const UnsortedListIntro = () => {
  return (
    <article className="comp_intro">
      <h1>Unsorted list</h1>
      <p>
        In this section we repeat the same exercise as in sorted list, but
        allowing the list items to be added to a random position in the list.
        This adds complexity when identifying the elements to remove.
      </p>
    </article>
  );
};
export const CatShelterIntro = () => {
  return (
    <article className="comp_intro">
      <h1>Cat shelter</h1>
      <p>
        Lick human with sandpaper tongue purr like an angel stare at guinea pigs
        for go into a room to decide you didn't want to be in there anyway sit
        by the fire or making sure that fluff gets into the owner's eyes fat
        baby cat best buddy little guy.
      </p>
    </article>
  );
};
//Forms
export const FormValidationIntro = () => {
  return (
    <article className="comp_intro">
      <h1>Form validation</h1>
      <p>
        Many applications use forms to submit data. Here you can submit a form
        and the contents of the form will be displayed below.
      </p>
    </article>
  );
};
//Timing
export const SpeedGameIntro = () => {
  return (
    <article className="comp_intro">
      <h1>Speed Game</h1>
      <p>
        This game tests the user reaction time. This is also useful to show-case
        test automation render waits. where x is a random time between 1 and 10
        seconds. The hit the button as fast as you can. The smaller the number
        of milliseconds above, the better.
      </p>
    </article>
  );
};
export const WaitGameIntro = () => {
  return (
    <article className="comp_intro">
      <h1>Wait Game</h1>
      <p>
        As opposed to speed game, this game tests the users time perception
        skill. This is also useful to showcase delay functionality in testing.
        Try to to hit the "End Game" button after exactly 5 seconds, and the
        goal is to have as few milliseconds as possible above 5 seconds.
      </p>
    </article>
  );
};
