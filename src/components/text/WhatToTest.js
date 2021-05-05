import "./text.scss";

//Timing
export const SpeedGameWhatToTest = () => {
  return (
    <article className="comp_what_to_test">
      <h4>What to test?</h4>
      <ul>
        <li>Check that a message is shown when hitting the "End Game" button as soon as it appears.</li>
      </ul>
      <button className="linkBtn">
        <a href="/features/speedGame.txt" target="_blank" rel="noopener noreferrer">
          <span>Cucumber specification</span>
        </a>
      </button>
    </article>
  );
};
export const WaitGameWhatToTest = () => {
  return (
    <article className="comp_what_to_test">
      <h4>What to test?</h4>
      <ul>
        <li>Check that an error message is shown when hitting the "End Game" button as soon as it appears.</li>
        <li>Check that a success message is shown when hitting the "End Game" button after 5 seconds.</li>
      </ul>
      <button className="linkBtn">
        <a href="/features/waitGame.txt" target="_blank" rel="noopener noreferrer">
          <span>Cucumber specification</span>
        </a>
      </button>
    </article>
  );
};
//Conditional logic
export const YellowOrBlueWhatToTest = () => {
  return (
    <article className="comp_what_to_test">
      <h4>What to test?</h4>
      <ul>
        <li>
          Check that a success message is shown when hitting the right button, and an error message is show when hitting
          the wrong button.
        </li>
      </ul>
      <button className="linkBtn">
        <a href="/features/speedGame.txt" target="_blank" rel="noopener noreferrer">
          <span>Cucumber specification</span>
        </a>
      </button>
    </article>
  );
};
export const CatOrDogWhatToTest = () => {
  return (
    <article className="comp_what_to_test">
      <h4>What to test?</h4>
      <ul>
        <li>
          Check that a success message is shown when hitting the right button, and an error message is show when hitting
          the wrong button.
        </li>
      </ul>
      <button className="linkBtn">
        <a href="/features/speedGame.txt" target="_blank" rel="noopener noreferrer">
          <span>Cucumber specification</span>
        </a>
      </button>
    </article>
  );
};
//Lists, Forms and Tables
export const CatShelterWhatToTest = () => {
  return (
    <article className="comp_what_to_test">
      <h4>What to test?</h4>
      <ul>
        <li>Validate that a cat can be added to the shelter.</li>
        <li>Validate that a cat can be renamed.</li>
        <li>Validate that a cat can be removed from the shelter.</li>
      </ul>
      <button className="linkBtn">
        <a href="/features/catShelter.txt" target="_blank" rel="noopener noreferrer">
          Cucumber specification
        </a>
      </button>
    </article>
  );
};
export const SortedListWhatToTest = () => {
  return (
    <article className="comp_what_to_test">
      <h4>What to test?</h4>
      <ul>
        <li>Validate that an item can be added to the list.</li>
        <li> Validate that maximum 5 items can be added to the list.</li>
      </ul>
      <button className="linkBtn">
        <a href="/features/sortedList.txt" target="_blank" rel="noopener noreferrer">
          Cucumber specification
        </a>
      </button>
    </article>
  );
};
export const FormFillWhatToTest = () => {
  return (
    <article className="comp_what_to_test">
      <h4>What to test?</h4>
      <ul>
        <li>Validate that an item can be added via the form.</li>
      </ul>
      <button className="linkBtn">
        <a href="/features/formfill.txt" target="_blank" rel="noopener noreferrer">
          Cucumber specification
        </a>
      </button>
    </article>
  );
};
export const TablesWhatToTest = () => {
  return (
    <article className="comp_what_to_test">
      <h4>What to test?</h4>
      <ul>
        <li>Validate that the empty filters are working.</li>
        <li>Validate that the filters are working.</li>
      </ul>
      <button className="linkBtn">
        <a href="/features/tables.txt" target="_blank" rel="noopener noreferrer">
          Cucumber specification
        </a>
      </button>
    </article>
  );
};
//strings
export const ConcatStringsWhatToTest = () => {
  return (
    <article className="comp_what_to_test">
      <h4>What to test?</h4>
      <ul>
        <li>Add two strings read from the application.</li>
        <li>Random input.</li>
      </ul>
      <button className="linkBtn">
        <a href="/features/concatStrings.txt" target="_blank" rel="noopener noreferrer">
          Cucumber specification
        </a>
      </button>
    </article>
  );
};
