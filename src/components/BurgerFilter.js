import React, { Component } from 'react';

class BurgerFilter extends Component {

  filter = (e) => {
    this.props.filterBurgers(e.target.value)
  }

  render(){
    return (
      <div className="BurgerFilter">
        <select onChange={this.filter}>
          <option value="All">All</option>
          <option value="Relatable">Relatable</option>
          <option value="Bougie">Bougie</option>
        </select>
      </div>
    )

  }
}

export default BurgerFilter
