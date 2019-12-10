import React from 'react'
// import image_1 from '../assets/img/image_1.jpeg'
import './cards.css'

const Card = props =>{
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="image_1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A assumenda reiciendis quidem illum, cumque earum placeat culpa recusandae. Totam, ipsum.</p>
                <a href="/" className="btn btn-outline-success">Go Anywhere</a>
            </div>
        </div>
    )
}
export default Card