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
