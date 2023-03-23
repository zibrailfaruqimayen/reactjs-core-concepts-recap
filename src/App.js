import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <District name="Noakhali" special="vibag"></District>
      <District name="Bramonbaria" special="Joda Akbor"></District>
      <District name="Comilla" special="Moynamoti"></District>
    </div>
  );
}

const districtStyle = {
  backgroundColor: "gray",
  margin: "30px",
  borderRadius: "20px",
  padding: "15px",
};
function District(props) {
  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.special}</p>
    </div>
  );
}

export default App;
