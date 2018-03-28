import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const CartModal = () => (
  <Modal trigger={<Button>Your Cart</Button>}>
    <Modal.Header>Select an Item</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header>Your Shopping Cart</Header>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default CartModal;