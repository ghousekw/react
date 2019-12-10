/*Updating*/
// import React, {Component} from "react";
// export default class Mark extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             mroll:this.props.roll
//         };
//     }
//     static getDerivedStateFromProps(props, state){
//         console.log("Mark get derived state from props");
//         console.log(props,state);
//         if(props.roll !== state.mroll){
//             return {mroll:props.roll};
//         }
//         return null;
// }
//     shouldComponentUpdate(nextProps, nextState) {
//         if(this.state.mroll < 107){
//             console.log("Marks- Should Component Update");
//             console.log(nextProps,nextState);
//             return true;
//         }
//         console.log(nextProps, nextState);
//         return false;
//     }
//     getSnapshotBeforeUpdate(prevProps, prevState) {
//         console.log("Mark - getSnapshotBeforeUpdate - runs before update");
//         console.log(prevProps,prevState);
//         return 45;
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log("Mark - componentDidUpdate - runs after update");
//     }
//
//     render(){
//         console.log("Mark rendered");
//         return(
//             <div>
//                 {this.state.mroll}
//             </div>
//         )
//     }
// }
/*Mounting*/
// import React, {Component} from "react";
// export default class Mark extends Component{
//     render(){
//         console.log("Marks Rendered");
//         return (
//             <div>
//                 <h1>Hello Marks</h1>
//             </div>
//         )
//     }
// }