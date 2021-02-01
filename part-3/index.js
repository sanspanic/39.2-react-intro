const App = () => (
  <div>
    <Person age="21" name="Older" hobbies={["coding", "singing"]} />
    <Person age="14" name="Youngster" hobbies={["reading", "dancing"]} />
    <Person
      age="27"
      name="Another Person"
      hobbies={["hobby1", "hobby 2", "hobby 3"]}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
