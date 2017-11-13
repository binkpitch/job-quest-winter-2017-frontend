import React, { Component } from 'react'
import { MainWrapper, Row, Text, Button } from '../component/styledComponent'

class DeleteIssue extends Component {
  render () {
    return (
      <MainWrapper white>
        <Row itemsAlign='center'>
          <Text>Are you sure you want to delete this issue?</Text>
        </Row>
        <Row />
        <Row itemsAlign='spread'>
          <Button>No, keep this issue.</Button>
          <Button color='red'>Yes, delete this issue.</Button>
        </Row>
      </MainWrapper>
    )
  }
}

export default DeleteIssue
