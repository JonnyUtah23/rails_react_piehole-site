import React from 'react';
import axios from 'axios';
import { Header, Card, Container, GridColumn, GridRow, List } from 'semantic-ui-react';


const MenuItem = ({ id, name, description, category, price }) => (
  <Card key={id}>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Content>{price}</Card.Content>
      <Card.Meta>
        {description}
      </Card.Meta>
    </Card.Content>
  </Card>
)

export default MenuItem;
