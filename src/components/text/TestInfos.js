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
      <h4>Why learn: Cat feeding list?</h4>
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
