import React from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = (props) => {

  let list = props.burgers.map(burger => {
    return <BurgerItem
    showBurger={props.showBurger}
    hideBurger={props.hideBurger}
    key={burger.id}  
    burger={burger}
    />})
  return (
    <div className="BurgerList">
    {list}
    </div>
  )
}

export default BurgerList
