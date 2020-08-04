import React, { useState, useEffect } from "react";

const FetchWords = (props) => {
  //   const [state, setState] = useState({
  //     items: [
  //       {
  //         name: "",
  //         total: "",
  //       },
  //     ],
  //     loading: true,
  //   });

  //   useEffect(() => {
  //     fetch("/send").then((res) => {
  //       setState({ items: res.data, loading: false });
  //     });
  //     console.log(state.items);
  //   }, [state.items]);

  //   const shoot = () => {
  //     fetch("/send").then((res) => {
  //       //   setState({
  //       //     items: [{ name: res.data.name, total: res.data.total }],
  //       //     loading: false,
  //       //   });
  //       console.log(res.data);
  //     });
  //     console.log(state.items);
  //   };

  let words = null;
  if (props.listItems.length !== 0) {
    words = (
      <div>
        <div className="count">
          <div className="word">
            <h3>Word</h3>
            <hr className="striped-border"></hr>
            {props.listItems.map((x) => (
              <p>
                <h3>{x.name}</h3>
                <hr></hr>
              </p>
            ))}
          </div>
          <div className="frequency">
            <h3>Frequency</h3>
            <hr className="striped-border"></hr>
            {props.listItems.map((x) => (
              <p>
                <h3>{x.total}</h3>
                <hr></hr>
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    words = <div></div>;
  }

  return (
    // <div>{state.loading ? <div>loading...</div> : <div>person...</div>}</div>
    <div>{words}</div>
  );
};

export default FetchWords;

// make a button and another variable another function
// onClcik change state
