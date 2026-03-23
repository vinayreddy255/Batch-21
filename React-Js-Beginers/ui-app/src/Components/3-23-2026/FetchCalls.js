import { useEffect, useState } from "react";
import axios from "axios";
function FetchCalls() {
  const [usersList, setUserList] = useState([]);
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // console.log(data);
    //     setUserList(data);
    //   });
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setUserList(response.data);
    });
  }, []);
  console.log("usersList:", usersList);
  return (
    <div>
      <h1>Fetch Calls</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Full Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                {user.address.city},{user.address.zipcode}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default FetchCalls;
