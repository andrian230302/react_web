import React, { Component } from "react";
import Shop from "../Shop/Shop";
import Total from "./Total/Total";
import axios from "axios";
export default class Catalog extends Component {
 

  constructor(props) {
    super(props);
    this.state = {
      mouses: [],
      loading:false,
      setLoading:false,
    };
  }
  componentDidMount = () =>{
    axios.get("/mouses").then(response =>{
      this.setState({
        mouses: response.data,
        setLoading: true
      })
    })
   
  }

  render() {
    return (
      <div>
   
         <Total data={this.state.mouses} />
        <Shop  />
      </div>
    );
  }
}

