import React, { Component } from 'react'
import { MainWrapper, Row, TextInsideBox, Button } from '../component/styledComponent'

class Home extends Component {
  render () {
    return (
      <MainWrapper>
        <Row>
          <TextInsideBox header>is:issue</TextInsideBox>
        </Row>
        <Row itemsAlign='right'>
          <Button color='green'>New Issue</Button>
        </Row>
        <Row>
          <TextInsideBox disabled>(Closed) onDrop breaks onSelect</TextInsideBox>
          <TextInsideBox>In-Browser Google Translate</TextInsideBox>
          <TextInsideBox>Treat value={null} as empty string</TextInsideBox>
          <TextInsideBox>inline style with decimal numbers</TextInsideBox>
        </Row>
      </MainWrapper>
    )
  }
}

export default Home
