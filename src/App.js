import logo from './logo.svg';
import './App.css';

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
  backgroundColor: 'gray',
  margin: '20px',
  borderRadius: '20px',
  padding: '15px'
}

function District(props){
  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.specialty}</p>
    </div>
  )
}

export default App;
