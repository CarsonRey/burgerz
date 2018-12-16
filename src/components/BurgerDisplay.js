import React, { Component } from 'react';

class BurgerDisplay extends Component {

  changeBurger = (e) => {
    // console.log(this.props.burger, e.target.value)
    this.props.changeBurgerCategory(this.props.burger, e.target.value)
  }

  render(){
    return (
      <div className="BurgerDisplay">
        <img src={this.props.burger.imgURL} alt={this.props.burger.name}/>
        <br/>
        <h1>{this.props.burger.name}</h1>
        <br/>
        <select value={this.props.burger.category} onChange={this.changeBurger}>
          <option value="Relatable">Relatable</option>
          <option value="Bougie">Bougie</option>
        </select>
      </div>
    )
  }


}

export default BurgerDisplay
