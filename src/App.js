import React, { Component } from 'react';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {

  state = {
    burgerList: [],
    filteredBurgers: [],
    selectedBurger: {name: "Select A Burger", category: "Relatable"}
  }

  componentDidMount(){
    fetch('http://localhost:3001/burgers')
    .then(response => response.json())
    .then(burgers => {
      this.setState({
        burgerList: burgers,
        filteredBurgers: burgers
      })
    })
  }

  selectedBurger = () => {
    this.state.burgerList.find(burger => burger)
  }

  burgers = () => {
    let burgers = [...this.state.filteredBurgers]
    return burgers
  }

  showBurger = (burger) => {
    this.setState({
      selectedBurger: burger
    })
  }

  filterBurgers = (filter) => {
    if (filter === "All"){
      this.setState({
        filteredBurgers: this.state.burgerList
      })
    } else {
      let newList = [...this.state.burgerList].filter(burger => burger.category === filter)
      this.setState({
        filteredBurgers: newList
      })
    }
  }

  changeBurgerCategory = (burgerObj, newCategory) => {
    fetch(`http://localhost:3001/burgers/${burgerObj.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({category: newCategory})
    }).then(response => response.json()).then(burger => {
      console.log(burger)
      // this.updateBurgerState(burger, newCategory)

    })
  }

  updateBurgerState = (burgerObj, newCategory) => {
    let newList = [...this.state.burgerList]
    let burger = newList.find(burger => burger === burgerObj)
    burger.category = newCategory
    this.setState({
      filteredBurgers: newList
    })
  }

  hideBurger = (burgerObj) => {
    let newList = [...this.state.burgerList].filter(burger => burger !== burgerObj)
    this.setState({
      burgerList: newList,
      filteredBurgers: newList
    })
  }

  render() {
    return (
      <div id="App">
        <BurgerContainer
        filterBurgers={this.filterBurgers}
        showBurger={this.showBurger}
        hideBurger={this.hideBurger}
        burgers={this.burgers()}/>
        <BurgerDisplay
        changeBurgerCategory={this.changeBurgerCategory} burger={this.state.selectedBurger} />
      </div>
    );
  }
}

export default App;
