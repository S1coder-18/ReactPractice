import { useEffect, useState } from "react";
import "./User.css"; // Import the CSS file

interface UserData {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
    zipcode: string; // NOTE: should be string, not number (zipcode can contain "-")
  };
}

export const User = () => {
  const [users, setUsers] = useState<UserData[]>([]);
//   const[limit] = useState(5);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
    //   .then((data: UserData[]) => setUsers(data.slice(0,limit)))
      .then((data: UserData[]) => {
        const filteredData = data.filter((_,index) => index<6); //Filter by index
        // const filteredData = data.filter(user => user.address.city === "South Christy")
        setUsers(filteredData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="user-container">
      <h2 className="user-title">Users Data</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Zipcode</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{user.address.zipcode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
