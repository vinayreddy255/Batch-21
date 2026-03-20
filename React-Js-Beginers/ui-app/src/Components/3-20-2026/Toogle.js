import { useState } from "react";
function Toogle(params) {
  const usersList = [
    { id: 1, name: "Alice", city: "New York", salary: 50000 },
    { id: 2, name: "Bob", city: "Los Angeles", salary: 60000 },
    { id: 3, name: "Charlie", city: "Chicago", salary: 70000 },
    { id: 4, name: "David", city: "Houston", salary: 55000 },
  ];
  const [showList, setShowList] = useState(true);
  const show = () => {
    setShowList(true);
  };
  const hide = () => {
    setShowList(false);
  };
  return (
    <div>
      <h1>Toogle</h1>
      <button onClick={show} disabled={showList}>
        Show
      </button>
      <button onClick={hide} disabled={!showList}>
        Hide
      </button>
      {showList && (
        <ul>
          {usersList.map((user) => (
            <div>
              <li key={user.id}>
                {user.name}-{user.city}-{user.salary}
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Toogle;
