import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Personal = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = () => {
    fetch("https://reqres.in/api/users")
      .then((data) => data.json())
      .then((data) => setUsers(data.data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="personal-wrapper">
      <h1>Personnel List</h1>
      <div className="card-wrapper">
        {users.map((user) => {
          const { first_name, last_name, avatar, email, id } = user;
          return (
            <div
              className="card"
              key={`user-${id}`}
              onClick={() => navigate(`/personal/${id}`, { state: user })}
            >
              <img src={avatar} alt={first_name} />
              <h3>
                {first_name} {last_name}
              </h3>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Personal;
