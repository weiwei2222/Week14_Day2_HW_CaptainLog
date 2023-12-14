const React = require("react");

class Search extends React.Component {
  render() {
    const { logs } = this.props;

    return (
      <div>
        <h1>Search Pokemon result page!</h1>
        <ul>
          {logs.length
            ? logs.map((logs, i) => {
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
                    <form
                      action={`/log/${logs._id}?_method=DELETE`}
                      method="POST"
                    >
                      <input type="submit" value="DELETE" />
                    </form>
                  </li>
                );
              })
            : "Sorry, can't find this log."}
        </ul>
        <a href="/">back</a>
      </div>
    );
  }
}

module.exports = Search;
