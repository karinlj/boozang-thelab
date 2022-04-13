import "./text.scss";
import Cucumber from "./Cucumber";

//Timing
export const SpeedGameWhatToTest = () => {
  return (
    <section className="what_to_test">
      <h2>What to test?</h2>
      <ul>
        <li>Check that a message is shown when hitting the "End Game" button as soon as it appears.</li>
      </ul>
      <Cucumber url="speedGame" feature="Speed Game" />
    </section>
  );
};
export const WaitGameWhatToTest = () => {
  return (
    <section className="what_to_test">
      <h2>What to test?</h2>
      <ul>
        <li>Check that an error message is shown when hitting the "End Game" button as soon as it appears.</li>
        <li>Check that a success message is shown when hitting the "End Game" button after 5 seconds.</li>
      </ul>
      <Cucumber url="waitGame" feature="Wait Game" />
    </section>
  );
};
//Conditional logic
export const YellowOrBlueWhatToTest = () => {
  return (
    <section className="what_to_test">
      <h2>What to test?</h2>
      <ul>
        <li>
          Check that a success message is shown when hitting the right button, and an error message is show when hitting
          the wrong button.
        </li>
      </ul>
      <Cucumber url="yellowOrBlue" feature="Yellow or Blue" />
    </section>
  );
};
export const CatOrDogWhatToTest = () => {
  return (
    <section className="what_to_test">
      <h2>What to test?</h2>
      <ul>
        <li>
          Check that a success message is shown when hitting the right button, and an error message is show when hitting
          the wrong button.
        </li>
      </ul>
      <Cucumber url="catOrDog" feature="Cat or Dog" />
    </section>
  );
};
//Lists, Forms and Tables
export const CatShelterWhatToTest = () => {
  return (
    <section className="what_to_test">
      <h2>What to test?</h2>
      <ul>
        <li>Validate that a cat can be added to the shelter.</li>
        <li>Validate that a cat can be renamed.</li>
        <li>Validate that a cat can be removed from the shelter.</li>
      </ul>
      <Cucumber url="catShelter" feature="Cat Shelter" />
    </section>
  );
};
export const SortedListWhatToTest = () => {
  return (
    <section className="what_to_test">
      <h2>What to test?</h2>
      <ul>
        <li>Validate that an item can be added to the list.</li>
        <li> Validate that maximum 5 items can be added to the list.</li>
      </ul>
      <Cucumber url="sortedList" feature="Sorted List" />
    </section>
  );
};
export const FormFillWhatToTest = () => {
  return (
    <section className="what_to_test">
      <h2>What to test?</h2>
      <ul>
        <li>Validate that an item can be added via the form.</li>
      </ul>
      <Cucumber url="formfill" feature="Form Fill" />
    </section>
  );
};
export const TablesWhatToTest = () => {
  return (
    <section className="what_to_test">
      <h2>What to test?</h2>
      <ul>
        <li>Validate that the empty filters are working.</li>
        <li>Validate that the filters are working.</li>
      </ul>
      <Cucumber url="tables" feature="Tables" />
    </section>
  );
};
//strings
export const ConcatStringsWhatToTest = () => {
  return (
    <section className="what_to_test">
      <h2>What to test?</h2>
      <ul>
        <li>Add two strings read from the application.</li>
        <li>Random input.</li>
      </ul>
      <Cucumber url="concatStrings" feature="Concatenate Strings" />
    </section>
  );
};
