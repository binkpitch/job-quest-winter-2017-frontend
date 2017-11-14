import React, { Component } from 'react'
import { Modal, Row, Text, Button } from '../component/styledComponent'

class DeleteIssue extends Component {
  render () {
    return (
      <Modal>
        <Row itemsAlign='center'>
          <Text>Are you sure you want to delete this issue?</Text>
        </Row>
        <Row />
        <Row itemsAlign='spread'>
          <Button onClick={this.props.handleCloseModal}>No, keep this issue.</Button>
          <Button onClick={this.props.handleDeleteIssue} color='red'>Yes, delete this issue.</Button>
        </Row>
      </Modal>
    )
  }
}

export default DeleteIssue
