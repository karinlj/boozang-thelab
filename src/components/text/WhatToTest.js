import "./text.scss";

//Timing
export const SpeedGameWhatToTest = () => {
  return (
    <section className="what_to_test_box">
      <h2>What to test?</h2>
      <ul>
        <li>Check that a message is shown when hitting the "End Game" button as soon as it appears.</li>
      </ul>
      <a
        href="/features/speedGame.txt"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cucumber specification opens in new window"
      >
        <span>Cucumber specification</span>
      </a>
    </section>
  );
};
export const WaitGameWhatToTest = () => {
  return (
    <section className="what_to_test_box">
      <h2>What to test?</h2>
      <ul>
        <li>Check that an error message is shown when hitting the "End Game" button as soon as it appears.</li>
        <li>Check that a success message is shown when hitting the "End Game" button after 5 seconds.</li>
      </ul>

      <a
        href="/features/waitGame.txt"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cucumber specification opens in new window"
      >
        <span>Cucumber specification</span>
      </a>
    </section>
  );
};
//Conditional logic
export const YellowOrBlueWhatToTest = () => {
  return (
    <section className="what_to_test_box">
      <h2>What to test?</h2>
      <ul>
        <li>
          Check that a success message is shown when hitting the right button, and an error message is show when hitting
          the wrong button.
        </li>
      </ul>

      <a
        href="/features/yellowOrBlue.txt"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cucumber specification opens in new window"
      >
        <span>Cucumber specification</span>
      </a>
    </section>
  );
};
export const CatOrDogWhatToTest = () => {
  return (
    <section className="what_to_test_box">
      <h2>What to test?</h2>
      <ul>
        <li>
          Check that a success message is shown when hitting the right button, and an error message is show when hitting
          the wrong button.
        </li>
      </ul>
      <a
        href="/features/catOrDog.txt"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cucumber specification opens in new window"
      >
        <span>Cucumber specification</span>
      </a>
    </section>
  );
};
//Lists, Forms and Tables
export const CatShelterWhatToTest = () => {
  return (
    <section className="what_to_test_box">
      <h2>What to test?</h2>
      <ul>
        <li>Validate that a cat can be added to the shelter.</li>
        <li>Validate that a cat can be renamed.</li>
        <li>Validate that a cat can be removed from the shelter.</li>
      </ul>
      <a
        href="/features/catShelter.txt"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cucumber specification opens in new window"
      >
        Cucumber specification
      </a>
    </section>
  );
};
export const SortedListWhatToTest = () => {
  return (
    <section className="what_to_test_box">
      <h2>What to test?</h2>
      <ul>
        <li>Validate that an item can be added to the list.</li>
        <li> Validate that maximum 5 items can be added to the list.</li>
      </ul>
      <a
        href="/features/sortedList.txt"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cucumber specification opens in new window"
      >
        Cucumber specification
      </a>
    </section>
  );
};
export const FormFillWhatToTest = () => {
  return (
    <section className="what_to_test_box">
      <h2>What to test?</h2>
      <ul>
        <li>Validate that an item can be added via the form.</li>
      </ul>
      <a
        href="/features/formfill.txt"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cucumber specification opens in new window"
      >
        Cucumber specification
      </a>
    </section>
  );
};
export const TablesWhatToTest = () => {
  return (
    <section className="what_to_test_box">
      <h2>What to test?</h2>
      <ul>
        <li>Validate that the empty filters are working.</li>
        <li>Validate that the filters are working.</li>
      </ul>
      <a
        href="/features/tables.txt"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cucumber specification opens in new window"
      >
        Cucumber specification
      </a>
    </section>
  );
};
//strings
export const ConcatStringsWhatToTest = () => {
  return (
    <section className="what_to_test_box">
      <h2>What to test?</h2>
      <ul>
        <li>Add two strings read from the application.</li>
        <li>Random input.</li>
      </ul>
      <a
        href="/features/concatStrings.txt"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cucumber specification opens in new window"
      >
        Cucumber specification
      </a>
    </section>
  );
};
