const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Log</h1>
        <form action="/" method="post">
          Title:
          <input type="text" name="title" />
          <br />
          Entry:
          <input type="text" name="entry" />
          <br />
          Is ship broken:
          <input type="checkbox" name="shipIsBroken" />
          <br />
          <button type="submit">submit</button>
        </form>
        <a href="/">back</a>
      </div>
    );
  }
}

module.exports = New;
