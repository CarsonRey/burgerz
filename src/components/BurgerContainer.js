import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {

  render(){

    return (
      <div className="BurgerContainer">
        <BurgerFilter filterBurgers={this.props.filterBurgers}/>
        <BurgerList hideBurger={this.props.hideBurger} showBurger={this.props.showBurger} burgers={this.props.burgers}/>
      </div>
    )
  }
}
