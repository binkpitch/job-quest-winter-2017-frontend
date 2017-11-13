import React, { Component } from 'react'
import ReactMarkdown from 'react-remarkable'
import { MainWrapper, Row, TextInsideBox, MarkdownBox, Button } from '../component/styledComponent'

class Issue extends Component {
  render () {
    return (
      <MainWrapper white>
        <Row itemsAlign='spread'>
          <Button>Back</Button>
          <Button color='red'>Delete</Button>
        </Row>
        <Row>
          <TextInsideBox>onDrop breaks onSelect event </TextInsideBox>
        </Row>
        <Row>
          <MarkdownBox>
            <ReactMarkdown source={`
**What is the current behavior?**
      
      
**What is the expected behavior?**
          
`
                }
              />
          </MarkdownBox>
        </Row>
        <Row itemsAlign='right'>
          <Button color='red'>Close Issue</Button>
        </Row>
      </MainWrapper>
    )
  }
}

export default Issue
