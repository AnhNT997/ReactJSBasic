import React from "react";
import { withRouter } from "react-router-dom";
class MyComponent extends React.Component {
  state = {};
  componentDidMount() {
    setTimeout(() => {
      //   console.log("message sent but appear after 3seconds");
      this.props.history.push("/todo");
    }, 3000);
  }
  render() {
    return (
      <>
        <p>this is class MyComponent</p>
      </>
    );
  }
}

export default withRouter(MyComponent);
