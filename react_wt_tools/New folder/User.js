/*External CSS*/
import React, {Component} from "react";
import Styles from "./User.module.css"
export default class User extends Component{
    render() {
        return <h1 className={Styles.txt}>Hello User</h1>
        // return <h1 className={this.props.clr}>Hello User</h1>
    }
}
/*Keys*/
// import React, {Component} from "react";
// export default class User extends Component{
//     render() {
//         return <li>{this.props.value}</li>
//     }
// }
/*Conditional Rendering*/
// import React, {Component} from "react";
//
// export default class User extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>Welcome Rahul</h1>
//                 <button onClick={this.props.clickData}>Logout</button>
//             </div>
//         )
//     }
// }