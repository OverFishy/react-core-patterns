import React, { useState } from "react";
import UsersList from "./components/usersList/UsersList";
import AddUser from "./components/addUser/AddUser";

function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = (userInput) => {
    setUsers((prevState) => {
      return [...prevState, userInput];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
