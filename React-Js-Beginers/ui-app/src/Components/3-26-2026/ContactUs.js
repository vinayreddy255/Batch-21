import { useNavigate, Link } from "react-router-dom";
function ContactUs() {
  const navigate = useNavigate();
  const navigateUsers = () => {
    navigate("/users");
  };
  return (
    <div>
      <h1>ContactUs</h1>
      <button onClick={navigateUsers}>sendToUsers</button>
    </div>
  );
}
export default ContactUs;
