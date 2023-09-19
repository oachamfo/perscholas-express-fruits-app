const React = require("react");

class Index extends React.Component {
  render() {
    const { vegetables } = this.props;
    return (
      <div>
        <h1>Vegetables Index Page</h1>
        <ul>
          {vegetables.map((vegetable, i) => {
            return (
              <li key={i}>
                The <a href={`/vegetables/${i}`}>{vegetable.name}</a> is{" "}
                {vegetable.color} <br></br>
                {vegetable.readyToEat
                  ? `It is ready to eat`
                  : `It is not ready to eat`}
                <br />
              </li>
            );
          })}
        </ul>
        <nav>
          <a href="/vegetables/new">Create a New Vegetable</a>
        </nav>
      </div>
    );
  }
}
module.exports = Index; //exporting so it can be used in server.js; we export models and views so they can be used in server.js
