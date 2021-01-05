import React from "react";
import ImageModel1 from "../../Icons/idk_shrug_only_1024x.png";
import CardItem from "../../containers/CardItem/CardItem";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";

class Shop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mouses: [],
      loading: true,
      search: ""
    };
  }

  componentDidMount = () =>{
    axios.get("/mouses").then(response =>{
      this.setState({
        mouses: response.data,
        loading: false
      })
    })
   
  }


  clickHandler =()=> {
    this.setState({
      mouses: this.state.mouses.sort((a, b) => {
        return a.priceInUaH - b.priceInUaH;
    })
    })
  }

  searchHeadler = () =>{
    axios.get(`/mouses/${this.state.search}`).then(response =>{
      this.setState({
        mouses: response.data,
        loading: false,
      
      })
    })
  }
  render()
  {
    
    return (
    <div className="container">
       <div>
  <button onClick={this.clickHandler} className="mybutton">sort by priceInUaH</button>
</div>
<div>
  <div className="field">
    <label htmlFor="search">Search for a mouses</label>
  </div>
  <div className="field">
    <input
      onChange={event => this.setState({search: event.target.value})}
      id="search"
    />
  </div>
  <button onClick={this.searchHeadler}>search</button>
</div>
    <ul className="items">
    
 

{ this.state.loading ? <ReactBootStrap.Spinner animation="border"/> : this.state.mouses.map(({ productionYear, producerName, priceInUaH, color,numberOfButton ,cableForPower,weightInKilograms, id}) => (
          <CardItem
          key={id}
            productionYear={productionYear}
            producerName={producerName}
            priceInUaH={priceInUaH}
            color={color}
            numberOfButton = {numberOfButton}
            cableForPower = {cableForPower}
            weightInKilograms = {weightInKilograms}
            id={id}
            imageSrc = {ImageModel1}
          />
        )) }
        </ul>
    </div>
  
  );
  
     }

}

export default Shop;
