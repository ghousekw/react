/*Conditional Rendering*/
import React, {Component} from "react";

export default class Guest extends Component{
    render(){
        return(
            <div>
                <h1>Welcome Guest</h1>
                <button onClick={this.props.clickData}>Login</button>
                <button>SignUp</button>
            </div>
        )
    }
}