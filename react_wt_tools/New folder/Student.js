/*Unmounting*/
import React, {Component} from "react";
export default class Student extends Component{
    componentDidMount() {
        console.log("Student Mounted");
    }
    render() {
        console.log("Student Rendered");
     return(
         <div>
             <h1>Hello Student</h1>
         </div>
     )
    }
}

//Mounting
// import React, { Component } from "react";
// import Mark from "./Mark"
// export default class Student extends Component{
//     render() {
//         console.log("Student Rendered")
//         return (
//             <div>
//                 <h1>Hello {this.props.name}</h1>
//                 <Mark />
//             </div>
//         )
//     }
// }

/*Passing arguments to Event handlers*/
// import React, {Component} from "react";
//
// class Student extends Component {
//     //State without constructor or state property
//     state = {
//         id: 1,
//         name: "Harry"
//     };
//     //Event handlers with arrow function
//     handleClick = (id,e) => {
//         console.log(id);
//         // console.log(j);
//         console.log(e);
//     }
    // handleClickArg = e => {
    //     this.handleClick(this.state.id,"Areeb",e)
    // }
//     render() {
//         return (
//             <div>
//                 <h1>Passing arguments to Event Handlers</h1>
//                 <h2>Hello {this.state.name}</h2>
//                 <button onClick={this.handleClick.bind(this, this.state.id)}>Delete</button>
//                 {/*<button onClick={e => {*/}
//                 {/*    this.handleClick(this.state.id, "Areeb", e)*/}
//                 {/*}}>Click Me*/}
//                 {/*</button>*/}
//             </div>
//         )
//     }
// }
//
// export default Student

// import React, {Component} from "react"
// // function Student(props) {
// //     // function handleClick() {
// //     //     console.log("Button Clicked");
// //     // }
// //     function handleClick(e) {
// //         e.preventDefault();
// //         console.log('clicked');
// //     }
// //     return(
// //         <div>
// //             <h1>Hello {props.name}</h1>
// //             <a href="https://wwww.google.com" onClick={handleClick}>Click Me</a>
// //             {/*<button onClick={handleClick}>Click Me</button>*/}
// //         </div>
// //     )
// // }
// // export default Student
//     // handleClick = () => {
//     //     console.log("Button Clicked",this)
//     // };
// // class Student extends Component{
// //     constructor(props){
// //         super(props);
// //         this.state = {
// //          name : "Rahul",
// //          roll : this.state.roll
// //         }}
// //     }
// //     handleClick = () => {
// //         console.log("Button Clicked",this)
// //     }// returns Button clicked,undefined
// class Student extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             name : "Rahul",
//             roll : this.props.roll
//         };
//         // this.handleClick = this.handleClick.bind(this)
//     }
//     // handleClick = () => {
//     //     this.setState({name: "Jai", roll: 105})
//     // }
//     handleClick = () => {
//         this.setState(
//             (state, props) => {
//                 // console.log(state.name)
//                 console.log(props.roll)
//             }
//         )
//     }
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.name} your roll is {this.state.roll}</h1>
//                 <button onClick={this.handleClick}>Click Me</button>
//             </div>
//         )
//     }
// }
// export default Student
// // const Student = () => {
// //     return <h1>Hello Rahul</h1>
// // }
// //Function
// // function show(name) {
// //     return name;
// // }
//
// //Object
// // let User = {
// //     first_name: "Areeb",
// //     last_name: "Shaik"
// // }
// //
// // const Student = () => {
// //     return <h1>Hello {User.first_name} {User.last_name}</h1>
// // };
//
// // class Student extends Component{
// //     render() {
// //         return <h1>Hello {this.props.name}</h1>
// //     }
// // }
//
// // export default Student;