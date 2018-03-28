import React from 'react';
import axios from 'axios';
import { List, Header, Card, Container, GridColumn, GridRow } from 'semantic-ui-react';
import MenuItem from './MenuItem';

const Menu = ({menuItems}) => (
  <div id="menu">
    <Card.Group>
      { menuItems.map( item => 
          <MenuItem {...item} />
        )
      }
    </Card.Group>
  </div>
)

export default Menu;
