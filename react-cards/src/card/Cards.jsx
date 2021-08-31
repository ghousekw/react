import React, { Component } from 'react'
import Card from "./CardUI"
import image_1 from "../assets/img/image_1.jpeg"
import image_2 from "../assets/img/image_2.jpeg"
import image_3 from "../assets/img/image_3.jpeg"

export default class Cards extends Component {
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4"><Card imgsrc={image_1} title="Sunset"/>></div>
                    <div className="col-md-4"><Card imgsrc={image_2} title="Design"/></div>
                    <div className="col-md-4"><Card imgsrc={image_3} title="Sunrise"/></div>
                </div>
            </div>
        )
    }
}