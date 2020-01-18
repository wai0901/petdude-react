import React, { Component } from 'react';
import BottomSession from "./components/BottomSession";
import CenterSession from "./components/CenterSession";
import ShoppingCart from "./components/ShoppingCart";
import ItemsState from "./components/ItemsState";
import uuid from 'uuid';

import './App.css';

let totalCost = 0;

class App extends Component {

  state = {
    menus: [{
        home: true,
        brands: false,
        services: false,
        help: false 
    }],
    items: [{
        id: uuid.v4(),
        name: undefined,
        imgUrl: undefined,
        price: 0,
        description: undefined,
        rating: 0,
      }],
    cartItems: [],
    stars: [1, 2, 3, 4, 5],
    totalCost: 0
  };

  getHome = () => {
    this.setState ({
      menus: [{
        home: true,
        brands: false,
        services: false,
        help: false 
      }]
    })
  }

  getBrands = (event) => {
    event.preventDefault();
    this.setState(ItemsState);
  }

  getServices = () => {
    this.setState ({
      menus: [{
        home: false,
        brands: false,
        services: !this.state.menus[0].services,
        help: false 
      }]
    })
  }

  getHelp = () => {
    this.setState ({
      menus: [{
        home: false,
        brands: false,
        services: false,
        help: !this.state.menus[0].help
      }]
    })
  }
  
  addEvent = (id) => {
    let cartItems = [...this.state.cartItems];
    this.state.items.map(item => {
      if (item.id === id){
        cartItems.push(item);
        this.setState (
          { cartItems: cartItems }
        )
      };
      if (item.id === id){
        totalCost += item.price
      }
      return this.setState (
        { totalCost: totalCost }
      )
    })
  }

  delEvent = (delItem) => {
    let cartItems = [...this.state.cartItems].filter(item => {
      return item !== delItem;
    })
    let totalCost = cartItems.map(item => {
      return totalCost += item.price;
    })
    this.setState (
      {cartItems: cartItems,
       totalCost: totalCost }
    )
  }

  // delEvent = (id) => {
  //   let index = this.state.cartItems.map(item => {
  //     if (item.id === id){
  //       let index = this.state.cartItems.indexOf(item)
  //       console.log(item)
  //       return index;
  //     }
  //   })
  //   let cartItems = [...this.state.cartItems].splice(index, 1);
  //   this.setState (
  //     {cartItems: cartItems}
  //   )
  // }

  // delEvent = (index) => {
  //   let cartItems = [...this.state.cartItems].splice(index, 1);
  //   totalCost = 0;
  //   let total = cartItems.map(item => {
  //     return totalCost += item.price;
  //   })
  //   this.setState (
  //     { cartItems: cartItems,
  //       totalCost: total }
  //   )
  // }

  render() {

    return (
      <div className="App">
        <div className="container" style={container}>
            <div className="navbarSession" style={navbarSession}>
              <ul style={navbar}>
                <li style={menus} onClick={this.getHome}>Home</li>
                <li style={menus} onClick={(event) => this.getBrands(event)} >Products</li>
                <li style={menus} onClick={this.getServices}>Services</li>
                <li style={menus} onClick={this.getHelp}>Help</li>
              </ul>
              <div style={cart}>
                <ShoppingCart 
                key={this.state.items.name}
                cartNum={this.state.cartItems.length}
                cartItems={this.state.cartItems}
                delEvent={this.delEvent}
                totalCost={this.state.totalCost}
                />
              </div>
            </div>
            <div className="centerSession">
              <CenterSession 
              key={this.state.items.name}
              addEvent={this.addEvent}
              getStatus={this.state.menus}
              getBrandList={this.state.items}
              getStars={this.state.stars}
              handleToggle={this.handleToggle}
              />
            </div>
            <div className="bottomSession">
              <BottomSession />
            </div>
        </div>
      </div>
    );
  }
}

const container = {
  backgroundColor: "#E4EBEC",
  overflow: "hidden"
}

const navbarSession = {
  height: "10vh",
}

const navbar = {
  display: "flex",
  float: "left",
  margin: "3vh 20px",
  textDecoration: "none"
}

const menus = {
  fontSize: "1.2rem",
  listStyleType: "none",
  margin: "0 20px",
  cursor: "pointer"
}

const cart = {
  float: "right",
  margin: "3vh 20px"
}

export default App;
 