import React, { Component,useState } from 'react'
import Header from './Header/Header'
import Navigation from './Navigation/Navigation'
import Footer from './Footer/Footer'
import "./MyApp.css";
import { Provider } from "react-redux";
import store from "../redux/store";

export default class App extends Component {
  render() {
    return (
      <div className ="wrapper">
      <Provider store={store}>
        <Header/>
        <Navigation/>
        <Footer/>
        </Provider>
      </div>
    )
  }
}

