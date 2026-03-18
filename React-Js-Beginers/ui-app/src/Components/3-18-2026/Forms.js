import "./style.css";
import { useState } from "react";
function Forms(params) {
  const obj = {
    name: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(obj);
  const [recivedData, setRecivedData] = useState({});
  const inputHandler = (event) => {
    const { name, value } = event.target;
    // console.log(name, ":===", value, "===", formData);
    setFormData({ ...formData, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setRecivedData(formData);
    setFormData({ ...obj });
  };
  return (
    <div className="form-wrapper">
      <div className="form-container">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              onChange={inputHandler}
              value={formData.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              onChange={inputHandler}
              value={formData.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              onChange={inputHandler}
              value={formData.password}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="form-data">
        <h2>Form Data:</h2>
        <p>Name: {recivedData.name}</p>
        <p>Email: {recivedData.email}</p>
        <p>Password: {recivedData.password}</p>
      </div>
    </div>
  );
}
export default Forms;
