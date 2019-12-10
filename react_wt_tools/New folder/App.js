/*External CSS*/
import React, {Component} from "react";
import Styles from "./App.module.css";
// import "./App.css";
import User from "./User";
export default class App extends Component {
    render(){
        // let style = false;
        return (
            <React.Fragment>
                <h1 className={Styles.txt}>Hello App</h1>
                <User/>
            </React.Fragment>
        )
    }
}
// {/*<h1 className="txta txtb">Hello App</h1>*/}
// {/*<User clr={style ? "txta": "txtb"}/>*/}
/*Inline CSS*/
// import React, {Component} from "react";
// export default class App extends Component {
//     state = {
//         change : false
//     };
//     clickChange =() =>{
//         this.setState({change:true})
//     }
//     render(){
//         const btnStyle = {
//             color: '#fff',
//             backgroundColor: '#000',
//             fontSize: "50px",
//             borderRadius: "10px"
//         };
//         if (this.state.change){
//             btnStyle.backgroundColor = "lime";
//         }
//         return <button onClick={this.clickChange} style={btnStyle}>Button</button>
//     }
// }
// import React, {Component} from "react";
// export default class App extends Component {
//     render() {
//         const btnStyle = {
//             color: 'blue',
//             backgroundColor: 'orange'
//         };
//         // const txtStyle = {
//         //     fontSize : '80px',
//         //     borderRadius: "5px"
//         // };
//         return(
//             <div>
//                 <button style={{...btnStyle,...{fontSize:"100px"}}}>Button</button>
//             </div>
//         )
//     }
// }
// import React, {Component} from "react";
// export default class App extends Component {
//     render() {
//         const btnStyle = {
//             color: 'blue',
//             backgroundColor: 'orange'
//         };
//         return(
//             <div>
//                 <button style={btnStyle}>Button</button>
//             </div>
//         )
//     }
// }

/*Keys*/
// import React, {Component} from "react";
// import User from "./User"
// export default class App extends Component {
//     render() {
//         const arr = this.props.numbers;
//         const newArr = arr.map((num)=>{
//             return <User key={num} value={num}/>
//         })
//         return(
//             <div>
//                 <ul>{newArr}</ul>
//             </div>
//         )
//     }
// }
// import React, {Component} from "react";
// export default class App extends Component {
//     state = {
//         users : [
//             {id:101,name:"Rahul",password:"36s45fg"},
//             {id:102,name:"Zain",password:"56s45fg"},
//             {id:103,name:"Kamal",password:"45s45fg"}
//         ],
//         isLoggedIn : false
//     }
//     render() {
//         const newUsers = this.state.users.map((users)=>{
//             return <h1 key={users.id}>ID:{users.id} Name:{users.name} Password:{users.password}</h1>
//         })
//         return (
//             <div>
//                 {newUsers}
//             </div>
//         )
//     }
// }
/*Lists*/
// import React, {Component} from "react";
// export default class App extends Component {
//     state = {
//         users : [
//             {id:101,name:"Rahul",password:"36s45fg"},
//             {id:102,name:"Zain",password:"56s45fg"},
//             {id:103,name:"Kamal",password:"45s45fg"}
//         ],
//         isLoggedIn : false
//     }
//     render() {
//         const newUsers = this.state.users.map((users)=>{
//             return <h1>ID:{users.id} Name:{users.name} Password:{users.password}</h1>
//         })
//         return (
//             <div>
//                 {newUsers}
//             </div>
//         )
//     }
// }
        // const arr = [10, 20, 30, 40];
    //     const arr = this.props.numbers;
    //     return (
    //         <ul>
    //             {arr.map((num) => {return <li>{num}</li>})}
    //         </ul>
    //     )
    // }
    // }
    //     const newArr = arr.map( (num) => {
    //         console.log("num = ",num);
    //         return <li>{num * 2}</li>
    //     })
    //     console.log("Old Arr", arr);
    //     console.log("New Arr", newArr);
    //     return (
    //         <ul>
    //             {newArr}
    //         </ul>
    //     )
    // }

/*Conditional Rendering*/
/*if else*/
// import React, {Component} from "react";
// import User from "./User";
// import Guest from "./Guest";
// export default class App extends Component{
//     state = {
//             isLoggedIn: false
//         };
//     clickLogin = () => {
//         this.setState({isLoggedIn: true})
//     }
//     clickLogOut = () => {
//         this.setState({isLoggedIn: false})
//     }
//     render(){
//         const isLoggedIn = this.state.isLoggedIn;
//         return (
//             <div>
//                 {(()=>{
//                 if(isLoggedIn){
//                     return <User clickData={this.clickLogOut}/>
//                 }else{
//                     return <Guest clickData={this.clickLogin}/>
//                 }
//                 })()
//                 }
//             </div>
//         );
        // return (
        //     <div>{isLoggedIn ? <User clickData={this.clickLogOut}/> : <Guest clickData={this.clickLogin}/>}</div>
        // )
        // let consumer;
        // if(isLoggedIn){
        //     consumer =  <User clickData = {this.clickLogOut}/>
        // }else {
        //     consumer = <Guest clickData={this.clickLogin}/>
        // }
        // return <div>{ consumer }</div>;
//     }
// }

/*Inline if*/
// import React, {Component} from "react";
// import User from "./User";
// import Guest from "./Guest";
// export default class App extends Component{
//     render(){
//         const primeMember = this.props.primeMember;
//         return (
//             <React.Fragment>
//                 <h1>Welcome User</h1>
//                 {primeMember && <User/>}
//             </React.Fragment>
//         )
//     }
// }

/*if else*/
// import React, {Component} from "react";
// import User from "./User";
// import Guest from "./Guest";
// export default class App extends Component{
//     render(){
//         const isRegistered = this.props.consumer;
//         if(isRegistered){
//             return <User/>;
//         }
//         return <Guest/>;
//     }
// }

//*Custom Hooks*/
// import React from "react";
// import useCustomCounter from "./Custom";
//
// export default function App() {
//     const data = useCustomCounter();
//     const data1 = useCustomCounter();
//     return(
//         <React.Fragment>
//             <h1>Count: {data.count}</h1>
//             <button onClick={data.handleClick}>Increment</button>
//             <h1>Count: {data1.count}</h1>
//             <button onClick={data1.handleClick}>Increment</button>
//         </React.Fragment>
//     )
// }

/*useEffect*/
// import React, {useState, useEffect} from "react";
// export default function App() {
//     const [countUp, setCountUp] = useState(0);
//     const [countDown, setCountDown] = useState(50);
//     const handleClickUp = () => {
//         setCountUp(countUp+1);
//     }
//     const handleClickDown = () => {
//         setCountDown(countDown - 1);
//     }
//     useEffect(()=>{
//         console.log("useEffect called after every render");
//     },[countDown])
//     return(
//         <React.Fragment>
//             <h1>CountUp: {countUp} CountDown: {countDown}</h1>
//             <button onClick={handleClickUp}>Increment</button>
//             <button onClick={handleClickDown}>Decrement</button>
//         </React.Fragment>
//     )
// }

/*useState Hook*/
// import React, {useState} from "react";
// export default function App() {
//     // const nameStateVariable = useState('Rahul');
//     // const name = nameStateVariable[0];
//     // const setName = nameStateVariable[1];
//     const [name, setName] = useState("Rahul");
//     const [roll, setRoll] = useState(101);
//     const handleClick = () => {
//         setName("GeekyShows");
//         setRoll(105);
//     }
//     return(
//         <div>
//             <h1>{name}</h1>
//             <h1>{roll}</h1>
//             <button onClick={handleClick}>Change Values</button>
//         </div>
//     )
// }
/*Unmounting*/
// import React, {Component} from "react";
// export default class App extends Component{
//     componentDidMount() {
//         console.log("App mounted");
//     }
//     componentWillUnmount() {
//         console.log("App unmounted");
//     }
//
//     render() {
//         console.log("App Rendered");
//         return(
//             <div>
//                 <h1>Hello App Component</h1>
//             </div>
//         )
//     }
// }
/*Updating*/
// import React, {Component} from "react";
// import Mark from "./Mark";
// export default class App extends Component{
//     constructor(){
//         super();
//         this.state = {
//             roll : 101
//         };
//     }
//     handleClick = () => {
//         console.log("Button Clicked");
//         // this.setState({roll:102}) ;
//         this.setState({roll: this.state.roll + 2 });
// }
//     render() {
//         console.log("App rendered");
//         return(
//             <div>
//                 <Mark roll={this.state.roll}/>
//                 <button onClick={this.handleClick}>Change</button>
//             </div>
//         )
//     }
// }
/*Mounting*/
// import React, {Component} from "react"
// import Student from "./Student";
// export default class App extends Component{
//     constructor(props){
//         super(props);
//         console.log("App - Constructor called");
//         console.log(props);
//         this.state = {
//             roll : "101"
//         };
//     }
//     static getDerivedStateFromProps(props, state){
//         console.log("App - Get Derived state from props");
//         console.log(props,state);
//         return null
//     }
//     componentDidMount() {
//         //Get data from server and set data to state
//         console.log("App Mounted")
//     }
//
//     render() {
//         console.log("App- rendered");
//         return (
//             <div>
//                 <Student name="Rahul"/>
//             </div>
//         )
//     }
// }

// //With Constructor
// class Student extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             name: "Rahul",
//             roll: this.props.roll
//         };
//     }
//
//     render(){
//         return <h1>Hello, My name is {this.state.name} and roll number is {this.state.roll}</h1>;
//     }
// }
// export default Student;

//Without Constructor
// class Student extends Component{
//     state = {
//         name: "Rahul",
//         roll: this.props.roll
//     };
//     render(){
//         return <h1>Hello, My name is {this.state.name} and roll number is {this.state.roll}</h1>;
//     }
// }
// export default Student;

// import ReactDom from "react-dom"
// import PropTypes from "prop-types";
//Using Class Components
// class Student extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hello, {this.props.children}</h1>
//             </div>
//         );
//     }
// }
// export default Student
// Student.propTypes = {
//     name: PropTypes.string.isRequired
// }

//Using Functional Components
// const Student = props => {
//     return (
//         <div>
//             <h1>Hello {props.name}</h1>
//             <h2>Your roll: {props.roll}</h2>
//         </div>
//     );
// }






// import "./App.css"

// const el = <h1 className="bg">Hello World!</h1>
//
// export default el
// import Student from "./Student";
//
// const App = () => {
//     return (
//         <div>
//             <Student name="Rahul"/>
//             <Student name="Rohit"/>
//             <Student name="Rajesh"/>
//             <Student name="Rakul"/>
//         </div>
//     );
// };
// export default App;

// return React.createElement("h1",null, "Hello World!");
// return <h1>Welcome to React!</h1>
// return(
//     <Fragment>
//         <h1>Hello!Areeb</h1>
//         <h2>Welcome to React</h2>
//     </Fragment>
// );