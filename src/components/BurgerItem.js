import React, { Component } from 'react';

class BurgerItem extends Component {

  showThisBurger = () => {
    this.props.showBurger(this.props.burger)
  }

  hideBurger = () => {
    this.props.hideBurger(this.props.burger)
  }

  render(){
    return (
      <div>
        <div className="BurgerItem">
          {this.props.burger.name}
        </div>
        <div className="BurgerBottomBun">
          <button onClick={this.showThisBurger}>Show</button>
          <button onClick={this.hideBurger}>Hide</button>
        </div>
      </div>
    )
  }

}

export default BurgerItem
