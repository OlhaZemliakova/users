import React from "react";

class AddUser extends React.Component {
  userAdd = {};
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      avatar: "",
      isHappy: false,
    };
  }
  render() {
    return (
      <form ref={(el) => (this.myForm = el)}>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => this.setState({ first_name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => this.setState({ last_name: e.target.value })}
        />
        <textarea
          type="text"
          placeholder="email"
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Add the link to your avatar"
          onChange={(e) => this.setState({ avatar: e.target.value })}
        />
        <label htmlFor="isHappy">Is happy?</label>
        <input
          type="checkbox"
          id="isHappy"
          placeholder="Last Name"
          onChange={(e) => this.setState({ isHappy: e.target.checked })}
        />
        <button
          type="button"
          onClick={() => {
            this.userAdd = {
              first_name: this.state.first_name,
              last_name: this.state.last_name,
              email: this.state.email,
              avatar: this.state.avatar,
              isHappy: this.state.isHappy,
            };

            if (!this.userAdd.first_name) return;

            if (this.props.user) this.userAdd.id = this.props.user.id;
            this.props.addUser(this.userAdd);
            this.myForm.reset();
          }}
        >
          Add
        </button>
      </form>
    );
  }
}

export default AddUser;
