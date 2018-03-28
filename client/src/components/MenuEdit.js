import React from 'react';
import axios from 'axios';
import { List, Header, Card, Container, GridColumn, GridRow } from 'semantic-ui-react';
import MenuItemsEdit from './MenuItemsEdit';


const MenuEdit = ({menuItems}) => (
  <Card.Group>
    { menuItems.map( item => 
        <MenuItemsEdit {...item} />
      )
    }
  </Card.Group>)

export default MenuEdit;
  