import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
// import Star from "./Star";
import StarRating from "./StarRating"
 export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      features:[
        { id:0, title:"JSX",rating:1},
        { id:1, title:"React",rating:2},
        { id:2, title:"React-DOM",rating:3},
        { id:3, title:"Stateless function components",rating:4},
        { id:4, title:"Props",rating:5}
      ]
    }
    this.rateFeatures=this.rateFeatures.bind(this);
    }
   rateFeatures(id,rating){
     const {features} = this.state
     this.setState({
       features:features.map(f=>
        (f.id!==id)?f:({
          ...f,
          rating
        })
        )
     })
   } 
  render(){
  return (
    <div className="features">
      {this.state.features.map(f=>
        <div key={f.id}>
          <h3>{f.title}</h3>
          <StarRating starSelected={f.rating}
            onChange={rating=>this.rateFeatures(f.id,rating)} />
        </div>
        )}
    </div>
  );
  }
}
