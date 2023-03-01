import React from "react";
import AddUser from "./components/AddUser";
import Header from "./components/Header";
import Users from "./components/Users";
import axios from "axios";

const baseUrl = "https://reqres.in/api/users?page=2";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      users: [],
    });
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
    axios.get(baseUrl).then((response) => {
      this.setState({ users: response.data.data });
    });
  }

  render() {
    return (
      <div>
        <Header title="List of users:" />
        <main>
          <Users
            users={this.state.users}
            deleteUser={this.deleteUser}
            editUser={this.editUser}
          />
        </main>
        <aside>
          <AddUser addUser={this.addUser} />
        </aside>
      </div>
    );
  }

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id),
    });
  }

  editUser(user) {
    let allUsers = this.state.users;
    allUsers[user.id - 1] = user;

    this.setState({ users: [] }, () => {
      this.setState({ users: [...allUsers] });
    });
  }

  addUser(user) {
    const id = this.state.users.length + 1;
    this.setState({ users: [...this.state.users, { id, ...user }] });
  }
}

export default App;
