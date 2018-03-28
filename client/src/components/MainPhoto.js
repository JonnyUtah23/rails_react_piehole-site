import React from 'react';
import axios from 'axios';
import { Header, Card, Container, GridColumn, GridRow } from 'semantic-ui-react';
import './App.css';
import { Link, withRouter } from 'react-router-dom';
import './CartModal.js';

const MainPhoto = () => (

  <div class="ui inverted vertical masthead center aligned segment">
  
    <div class="ui container">
      <div class="ui large secondary inverted pointing menu main-menu">
       
        <a class="active item ">Home</a>
        <a href="#menu" class="item ">Menu</a>
        <a href="#about-us" class="item ">About Us</a>
        <a href="#map" class="item">Contact Us</a>
        <div class="right item">
          <a class="ui inverted button">
            <Link to='/register'>
            Sign Up
            </Link>
          </a>
          <a class="ui inverted button"> <Link to='/login'>
            Login
            </Link></a>
        </div>
      </div>
    </div>
    <div class="ui text container">
      <p class="spacing"> </p>
      <h1 class="ui inverted header">
      The PIE Hole
      </h1>
      <h2>Pizza By the Slice </h2>
      <p class="spacing"> </p>
      <p class="spacing"> </p>
      <div class="ui huge primary button">YUMMY! <i class="right arrow icon"></i></div>
    </div>
  </div>

  )

export default MainPhoto;

