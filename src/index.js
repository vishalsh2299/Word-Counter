import * as serviceWorker from "./serviceWorker";

import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import CountWord from "./components/CountWord";
import FetchWords from "./components/FetchWords";
import LinearProgress from "@material-ui/core/LinearProgress";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "",
          total: "",
        },
      ],
      loading: true,
    };
  }

  componentDidMount() {
    setInterval(() => {
      fetch("/count")
        .then((res) => res.json())
        .then((res) => {
          if (res.data) {
            let items = [...this.state.items];
            items = res.data;
            this.setState({ items: items, loading: false });
            console.log(this.state);
          }
          //console.log(this.state.items);
        });
    }, 2000);
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-6 offset-md-3">
          <Header />
          <CountWord />
          <br />
          {this.state.loading ? (
            <LinearProgress color="secondary" className="linearProgress" />
          ) : (
            <FetchWords listItems={this.state.items} />
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
