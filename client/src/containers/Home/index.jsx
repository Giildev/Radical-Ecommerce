// Dependencies
import React, { Component } from "react";
import axios from "axios";

// Components & Containers
import "./style.css";
import Slider from "../../components/Slider/";
import ItemCard from "../../components/ItemCard/";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      object: ""
    };
  }

  componentWillMount() {
    axios.get(`http://localhost:4000/api/hello`).then(res => {
      console.log(res.data);
      this.setState({
        object: res.data.object
      });
    });
  }

  render() {
    return (
      <div>
        <Slider />
        <div className="gallery">
          <ItemCard model= "Modelo 1" gender="Caballero" price ="4.999.999" />
          <ItemCard model= "Modelo 2" gender="Dama" price ="6.999.999" />
          <ItemCard model= "Modelo 3" gender="Caballero" price ="12.999.999" />
          <ItemCard model= "Modelo 4" gender="Dama" price ="15.999.999" />
          <ItemCard model= "Modelo 5" gender="Caballero" price ="2.999.999" />
          <ItemCard model= "Modelo 6" gender="Caballero" price ="6.999.999" />
          <ItemCard model= "Modelo 7" gender="Niño" price ="8.999.999" />
          <ItemCard model= "Modelo 8" gender="Niño" price ="7.999.999" />
          <ItemCard model= "Modelo 9" gender="Caballero" price ="5.999.999" />
          <ItemCard model= "Modelo 10" gender="Dama" price ="900.999" />
          <ItemCard model= "Modelo 11" gender="Caballero" price ="2.999.999" />
          <ItemCard model= "Modelo 12" gender="Dama" price ="9.999.999" />
        </div>
      </div>
    );
  }
}

export default Home;
