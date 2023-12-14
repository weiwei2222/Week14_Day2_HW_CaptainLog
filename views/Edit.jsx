const React = require("react");

class Edit extends React.Component {
  render() {
    return (
      <div>
        <h1> Edit the Log</h1>
        <form action={`/log/${this.props.logs._id}?_method=PUT`} method="POST">
          Name:
          <input
            type="text"
            name="title"
            defaultValue={this.props.logs.title}
          />
          <br />
          Entry:
          <input
            type="text"
            name="entry"
            defaultValue={this.props.logs.entry}
          />
          <br />
          Is ship broken:
          {this.props.logs.shipIsBroken ? (
            <input type="checkbox" name="shipIsBroken" defaultChecked />
          ) : (
            <input type="checkbox" name="shipIsBroken" />
          )}
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
        <a href="/">back</a>
      </div>
    );
  }
}
module.exports = Edit;
