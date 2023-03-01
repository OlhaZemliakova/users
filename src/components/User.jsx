import React from "react";
import { AiFillCloseCircle, AiFillEdit } from "react-icons/ai";
import AddUser from "./AddUser";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: false,
    };
  }
  user = this.props.user;
  render() {
    return (
      <div className="user">
        <div className="user-action">
          <AiFillCloseCircle
            onClick={() => this.props.deleteUser(this.user.id)}
            className="delete-icon"
          />
          <AiFillEdit
            onClick={() => {
              this.setState({
                editForm: !this.state.editForm,
              });
            }}
            className="edit-icon"
          />
        </div>
        <div className="user-information">
          <img className="user-avatar" src={this.user.avatar} alt="avatar" />
          <div className="user-data">
            <h3>
              {this.user.first_name} {this.user.last_name}
            </h3>
            <p>
              email: <strong>{this.user.email}</strong>
            </p>
            <p>{this.user.isHappy ? "Happy :)" : "Unhappy ;("}</p>
          </div>
        </div>
        {this.state.editForm && (
          <AddUser user={this.user} addUser={this.props.editUser} />
        )}
      </div>
    );
  }
}

export default User;
