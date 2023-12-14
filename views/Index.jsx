const React = require("react");

class Index extends React.Component {
  render() {
    const { logs } = this.props;

    return (
      <div>
        <h1>The Captain's Log Index Page</h1>
        <nav>
          <a href="/new">Create a New Log</a>
        </nav>
        <ul>
          {logs.map((log, i) => {
            return (
              <li>
                The <a href={`/logs/${logs._id}`}>{logs.title}</a>
                <br />
                {logs.entry} <br />
                {logs.shipIsBroken
                  ? `The ship is broken`
                  : `The ship is NOT broken`}
                <br />
                <a href={`/logs/${log._id}/edit`}> Edit This Log </a>
                <form
                  action={`/logs/${fruit._id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="DELETE" />
                </form>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
