import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <District name='Noakhali' specialty= 'Bivag'></District>
      <District name='Bramonbaria' specialty='joda akbar'></District>
      <District name='Sumilla' specialty='Moyna and Moti'></District>
    </div>
  );
}

const districtStyle = {
  backgroundColor: 'skyblue',
  margin: '20px',
  borderRadius: '20px',
  padding: '15px'
}

function District(props){
  const [power, setPower] = useState(1);
  const boostPower = () => setPower(power * 2);
  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.specialty}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  )
}

export default App;
