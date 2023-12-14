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
        <form action="/search" method="post">
          Search by title:
          <input type="text" name="title" />
          <button type="submit">submit</button>
        </form>
        <ul>
          {logs.map((logs, i) => {
            return (
              <li key={i}>
                Title:<a href={`/log/${logs._id}`}>{logs.title}</a>
                <br />
                Entry:{logs.entry}
                <br />
                {logs.shipIsBroken
                  ? `The ship is broken`
                  : `The ship is NOT broken`}
                <br />
                <a href={`/log/${logs._id}/edit`}> Edit This Log </a>
                <form action={`/log/${logs._id}?_method=DELETE`} method="POST">
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
