function CondationStyle(params) {
  const usersList = [
    { id: 1, name: "Alice", city: "New York", salary: 50000 },
    { id: 2, name: "Bob", city: "Los Angeles", salary: 60000 },
    { id: 3, name: "Charlie", city: "Chicago", salary: 70000 },
    { id: 4, name: "David", city: "Houston", salary: 55000 },
    { id: 5, name: "Eve", city: "Phoenix", salary: 65000 },
    { id: 6, name: "Frank", city: "Philadelphia", salary: 48000 },
    { id: 7, name: "Grace", city: "San Antonio", salary: 72000 },
    { id: 8, name: "Heidi", city: "San Diego", salary: 53000 },
    { id: 9, name: "Ivan", city: "Dallas", salary: 58000 },
    { id: 10, name: "Judy", city: "San Jose", salary: 62000 },
  ];
  return (
    <div>
      <h2>CondationStyle</h2>
      <ul>
        {usersList.map((user) => (
          <div style={{ marginLeft: "20px", width: "300px" }} key={user.id}>
            <p
              style={{
                backgroundColor: user.salary > 60000 ? "red" : "green",
                color: "white",
                padding: "5px",
                with: "200px",
              }}
            >
              {user.name} - {user.city} - {user.salary}
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default CondationStyle;
