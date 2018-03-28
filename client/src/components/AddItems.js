import React, { Component } from 'react';
import { Header, Card, Container, GridColumn, GridRow, Grid} from 'semantic-ui-react';
import MainPhoto from './MainPhoto';
import AboutUs from './AboutUs';
import SomeFun from './SomeFun';
import { GoogleMap, Marker } from "react-google-maps";
import MyMapComponent from './MyMapComponent';
import { width } from 'window-size';
import { Link, withRouter } from 'react-router-dom';

import './App.css';
import axios from 'axios';
import MenuItemsEdit from './MenuItemsEdit';
import MenuEdit from './MenuEdit';


class AddItems extends Component {

  state = { menu_items: [], }

  componentDidMount(){
      axios.get("/api/items")
        .then(res => this.setState({menu_items: res.data}))
        // .then(res => {debugger});
  }
  
  render() {
    return (
      <div>   
      <Link to="/"className="button">Logout Go To Main</Link>  
     

      <MenuEdit menuItems={this.state.menu_items} />
     </div>
   );
 }
}

export default AddItems;
