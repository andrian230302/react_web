import React from "react";
import ImageModel1 from "../../Icons/idk_shrug_only_1024x.png";
import CardItem from "../../containers/CardItem/CardItem";
import axios from "axios"
import "./Body.css"

class Body extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      mouses: [],
      numberOfItem: 3 
    };
  }

  componentDidMount = () =>{
    axios.get("/mouses").then(response =>{
      this.setState({
        mouses: response.data
      })
    })
  }

  clickHandler =()=> {
    this.setState({
      numberOfItem: this.state.mouses.length
    })
  }
  render()
  {
    
    return (
    <div className="container">
    <ul className="items">
     {this.state.mouses.slice(0,this.state.numberOfItem).map(({ productionYear, producerName, priceInUaH, color,numberOfButton ,cableForPower,weightInKilograms, id}) => (
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
        ))}
    </ul>

<div>
  <button onClick={this.clickHandler} className="mybutton">View more</button>
</div>
    </div>
  
  );
     }
}

export default Body;