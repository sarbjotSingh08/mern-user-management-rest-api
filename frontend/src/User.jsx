import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:3002/api/users");
        setUsers(res.data.data);
      } catch (error) {
        console.log("Error fetching users");
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3002/api/users/${id}`);
      setUsers((prev) =>
        prev.filter((user) => user._id !== id)
      );
    } catch (err) {
      console.log("Delete failed");
    }
  };

//   users = [
//   { name: "", age: 23, email: "a@gmail.com" },
//   { name: "John", age: null, email: "b@gmail.com" }
// ]
// in case that why we validate the users 

  // Filter valid users
  const validUsers = users.filter(
    (user) =>
      user.name?.trim() !== "" &&
      user.email?.trim() !== "" &&
      user.age !== null
  );

  return (
    <div>
      <h1>Admin Users</h1>

      {validUsers.length === 0 ? (
        <p>No users exist</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {validUsers.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/edit/${user._id}`}>
                    <button>Edit</button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleDelete(user._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}