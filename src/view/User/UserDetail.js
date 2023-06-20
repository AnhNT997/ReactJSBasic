import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
class UserDetail extends React.Component {
  state = {
    user: [],
  };
  handleBackToListUser() {
    this.props.history.push("/user");
  }
  componentDidMount() {
    if (this.props.match && this.props.match.params) {
      //   console.log(this.props.match.params.id);
      let id = this.props.match.params.id;
      axios.request(`https://reqres.in/api/users/${id}`).then((response) => {
        console.log(response.data.data);
        this.setState({
          user:
            response && response.data && response.data.data
              ? response.data.data
              : null,
        });
      });
    }
  }
  render() {
    let { user } = this.state;
    return (
      <>
        <div>
          <img src={user.avatar} alt="" />
          <p>
            FullName: {user.first_name} {user.last_name}
          </p>
          <p>Email Address: {user.email}</p>
          <button onClick={() => this.handleBackToListUser()}>back</button>
        </div>
      </>
    );
  }
}

export default withRouter(UserDetail);
