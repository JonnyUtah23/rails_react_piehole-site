import React from 'react';
import axios from 'axios';
import { Header, Card, Container, GridColumn, GridRow } from 'semantic-ui-react';
import './App.css';
import { Timeline } from 'react-twitter-widgets';


const AboutUs = () => (




<div id="about-us" class="ui vertical stripe quote segment">
    <div class="ui equal width stackable internally celled grid">
      <div class="center aligned row">
        <div class="column">
          <h3>"About Us"</h3>
          <p>We love pizza and love to share our pizze</p>
          <h3>Started in 2007</h3>
          <p>
            Founded by a bunch of pizza eaters.
          </p>
        </div>
        <div class="column">
         <Timeline
                  dataSource={{sourceType:"profile", screenName:"PieHoleUtah"}}
                  options={{username:"PieHoleUtah", height:"150%", width:"70%"}}
         />
        </div>
        
      </div>
    </div>
  </div>

  )

export default AboutUs;





