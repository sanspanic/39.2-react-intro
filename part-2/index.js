const App = () => (
    <div>
        <Tweet username="Sandy" date="01/02/2021" msg="This is a tweet" />
        <Tweet username="Pig" date="01/02/2021" msg="I am pig 🐖 " />
        <Tweet username="Dog" date="01/02/2021" msg="I am dog 🐕 " />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
