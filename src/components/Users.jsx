import React from "react";
import User from "./User";

class Users extends React.Component {
  render() {
    if (this.props.users.length > 0) {
      return (
        <div>
          {this.props.users.map((item) => (
            <User deleteUser={this.props.deleteUser} editUser={this.props.editUser} key={item.id} user={item}/>
          ))}
        </div>
      );
    } else {
      return (
        <div className="user">
          <h3>No users found</h3>
        </div>
      );
    }
  }
}

export default Users;
