import logo from './logo.svg';
import './App.css';
import Car from './car';
import { useState } from 'react'; //react hooks

const App = () => { //Main component

  const [username, setUsername] = useState(null); //should be define as the array, <null> is a initial value 
  //<username> is a current state, <setUsername> is a setting up state.

  const [counter, setCounter] = useState(0);

  const handleClick = () =>{ //handleClick function
    setUsername('Vidushan')
  }

  const increaseCounter = () => {
    setCounter(counter+1)
  }

  const decreaseCounter = () => {
    setCounter(counter-1)
  }

  return ( //JSX output
    <div className="App">

      <h1>My Username is {username}</h1> 

      <SampleComponent title="Sample Prop Title" value="25" />
      <PersonalInfo name="Udara Dhanushka" age="29" designation="CEO" />
      
      <Car model="Toyota Corolla" description="A home use vehicle" />
      <Car model="BMW" />

      <button onClick={handleClick}>Set Username</button> 

      <p>Counter: {counter}</p>

      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decreasee</button>

    </div>
  );
}

const SampleComponent = (props) => {
  return(
    <div>
      <h3>{props.title} Value: {props.value}</h3>
      <h1>{props.name}</h1>
      <h3>{props.age}</h3>
      <h3>{props.designation}</h3>
    </div>
  )
}

const PersonalInfo = (props) => { //(props = Properties)
  return(
    <div>
      <h1>Name: {props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Designation: {props.designation}</p>
    </div>
  )
}

export default App;
