import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./user.scss";
class UserComponent extends React.Component {
  state = {
    listUsers: [],
  };
  handleViewUserDetail = (userId) => {
    this.props.history.push("/user/" + userId);
  };
  componentDidMount() {
    axios.request(`https://reqres.in/api/users?page=2`).then((res) => {
      this.setState({
        listUsers: res && res.data && res.data.data ? res.data.data : [],
      });
      console.log(res.data.data);
    });
  }
  render() {
    let { listUsers } = this.state;
    return (
      <>
        <div>List user from api</div>
        {listUsers.map((user) => {
          return (
            <>
              <p
                className="userInfo"
                key={user.id}
                onClick={() => this.handleViewUserDetail(user.id)}
              >
                Name: {user.first_name} {user.last_name} - ID: {user.id}
              </p>
              <hr className="linebreak" />
            </>
          );
        })}
      </>
    );
  }
}

export default withRouter(UserComponent);
