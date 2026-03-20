function Chaild(props) {
  // console.log("Chaild component received props:", props);

  const sendCHaildData = () => {
    props.onReceiveData("Hello from Chaild component!");
  }
  return (
    <div>
      <h1>Chaild Component</h1>
      <button onClick={sendCHaildData}>
        Send
      </button>
      <p>Name: {props.userData.name}</p>
      <p>Age: {props.userData.age}</p>
      <p>Email: {props.userData.email}</p>
    </div>
  );
}
export default Chaild;
