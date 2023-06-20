import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
class MyComponent extends React.Component {
  state = {};
  componentDidMount() {
    // setTimeout(() => {
    //   //   console.log("message sent but appear after 3seconds");
    //   this.props.history.push("/todo");
    // }, 3000);
  }
  handleDeleteUser(user) {
    this.props.deleteUser(user);
  }
  render() {
    console.log("home component props: ", this.props);
    let listUser = this.props.reduxState;
    return (
      <>
        <p>this is class MyComponent</p>
        <div>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((user, index) => {
              return (
                <p key={user.id}>
                  {user.id}-{user.name}{" "}
                  <span onClick={() => this.handleDeleteUser(user)}>x</span>
                </p>
              );
            })}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    reduxState: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (deleteUser) =>
      dispatch({ type: "DELETE_USER", payload: deleteUser }),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MyComponent));
