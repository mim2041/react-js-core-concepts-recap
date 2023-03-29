import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPost></LoadPost>
      <District name='Noakhali' specialty= 'Bivag'></District>
      <District name='Bramonbaria' specialty='joda akbar'></District>
      <District name='Sumilla' specialty='Moyna and Moti'></District>
    </div>
  );
}

function LoadPost(){
  const [posts, setPosts] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  } , [])
  return (
    <div>
      <h1>Posts: {posts.length}</h1>
      {
        posts.map(post => <Post
        post={post}
        key={post.id}
        ></Post>)
      }
    </div>
  )
}

function Post(props){
  return (
    <div style={{backgroundColor: 'lightgray', margin:'20px',padding:'20px'}}>
      <h2>Title: {props.post.title}</h2>
      <p>Body: {props.post.body}</p>
    </div>
  )
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
