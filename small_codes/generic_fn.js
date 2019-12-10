import React, {useState} from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Button(props) {
  
  const onHandleClick = () => props.handleClick(props.increment)
  return (<button onClick={onHandleClick}>+{props.increment}</button>);
}

function Display(props){
  return (
  <div>{props.message}</div>
  );
}

function App(){
  const [counter,setCounter]= useState(5);
  const onClickFunction=(incrementValue)=>setCounter(counter+incrementValue)
  return(
    <div>
      <Button handleClick={onClickFunction} increment={1}/>
      <Button handleClick={onClickFunction} increment={5}/>
      <Button handleClick={onClickFunction} increment={10}/>
      <Button handleClick={onClickFunction} increment={100}/>
      <Display message={counter}/>
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
