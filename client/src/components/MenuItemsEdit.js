import React from 'react';
import axios from 'axios';
import {Button, Header, Card, Container, GridColumn, GridRow, List } from 'semantic-ui-react';

const MenuItemsEdit = ({ id, name, description, category, price }) => (
  <Card key={id}>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Content>{price}</Card.Content>
      <Card.Meta>
        {description}
      </Card.Meta>
      <Card.Meta>
       <Button>Edit</Button>
       <Button>Delete</Button>
      </Card.Meta>
    </Card.Content>
  </Card>
)

export default MenuItemsEdit;
