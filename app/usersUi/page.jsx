"use client";

import React from "react";

export default function Users() {
  const [users, setUsers] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  async function getUsers() {
    const response = await fetch("/users");
    const data = await response.json();
    setUsers(data);
  }

  React.useEffect(() => {
    getUsers();
  }, []);

  async function addUser(e) {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: inputValue }),
    });

    const newUser = { id: users.length + 1, name: inputValue };
    setUsers([...users, newUser]);
    setInputValue("");
  }
  async function deletUser(params) {
    console.log("gg");
    alert(params);
    async function deletUser(id) {
      try {
        await fetch(`/users?id=${id}`, { method: "DELETE" });
        getUsers();
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <div>
      <form onSubmit={(e) => addUser(e)}>
        <input
          type="text"
          placeholder="Enter text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add user</button>
      </form>
      for
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <button
            className="btn bg
          -danger"
            onClick={() => deletUser(user.id)}
          >
            delet
          </button>
        </div>
      ))}
      <button onClick={getUsers}>Show Users</button>
    </div>
  );
}
