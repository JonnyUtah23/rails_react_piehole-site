import React, { Component } from 'react';
import { Header, Card, Container, GridColumn, GridRow, Grid} from 'semantic-ui-react';
import MainPhoto from './MainPhoto';
import AboutUs from './AboutUs';
import SomeFun from './SomeFun';
import { GoogleMap, Marker } from "react-google-maps";
import MyMapComponent from './MyMapComponent';
import { width } from 'window-size';
import Menu from './Menu';
import './App.css';
import axios from 'axios';



class Home extends Component {

  state = {cart:{}, menu_items: [], orders: []}

  componentDidMount(){
      axios.get("/api/items")
        .then(res => this.setState({menu_items: res.data}))
  }

  render() {
    return (
      <div>      
      <MainPhoto 
      />
      <SomeFun
      />
        <Menu
        />
      <AboutUs
      />
      <Menu menuItems={this.state.menu_items} />
     <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            <MyMapComponent
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `250px` ,width: `100%`}} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </Grid.Column>
          <Grid.Column>
              <div class="mapstyles" id="map">
              <div>
                  344 South State Street
                <p>
                  Salt Lake City, UT 84111
                </p>
                  Phone801.359.HOLE! (4653)
              </div>
              <div>
                <p></p>
                <p>
                  We have great reviews!<a href="https://www.yelp.com/biz/pie-hole-salt-lake-city">ThePieHole/Yelp</a>
                </p>
                <p>
                  Like us on FaceBook!<a href="https://www.facebook.com/pieholeutah/">@pieheoleutah</a>
                </p>
              </div>
              </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>

     </div>
   );
 }
}

export default Home;
