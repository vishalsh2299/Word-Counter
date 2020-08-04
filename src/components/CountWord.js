import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const CountWord = () => {
  const [state, setState] = useState({
    name: "",
  });

  const [result, setResult] = useState(null);

  const numberOfWord = (event) => {
    event.preventDefault();

    axios
      .post("/count", { ...state })
      .then((res) => {
        setResult(res.data);
        setState({
          name: "",
        });
      })
      .catch(() => {
        setResult({
          success: false,
          message: "Something went wrong. Try again later",
        });
      });
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={numberOfWord}>
        <Form.Group controlId="name">
          <Form.Label className="heading-low">
            Count top {state.name} most occurring words
          </Form.Label>
          <Form.Control
            type="number"
            name="name"
            value={state.name}
            placeholder="Enter Number"
            onChange={onInputChange}
          />
        </Form.Group>

        <Button className="btn" type="submit">
          Count
        </Button>
      </form>
    </div>
  );
};

export default CountWord;

// onClick={() => {
//     setState({ loading: true }, () => {
//       console.log(state);
//       axios.get("/count").then((result) => {
//         if (result.data) {
//           let items = [...state.items];
//           items = result.data;
//           setState({ items: items, loading: false });
//           // console.log(this.state);
//         }
//         //   this.setState({
//         //     loading: false,
//         //   });
//       });
//     });
//     console.log(state);
//   }}
