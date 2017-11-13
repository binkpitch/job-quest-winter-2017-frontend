import React, { Component } from 'react'
import { MainWrapper, Row, TextInput, TextArea, Text, Button } from '../component/styledComponent'

class NewIssue extends Component {
  render () {
    return (
      <MainWrapper white>
        <Row>
          <Text size='large'>New Issue</Text>
        </Row>
        <Row>
          <TextInput placeholder='Title...' />
        </Row>
        <Row>
          <TextArea
            defaultValue={
`**What is the current behavior?**


**What is the expected behavior?**

`
            }
          />
        </Row>
        <Row itemsAlign='right'>
          <Button>Cancel</Button>
          <Button marginLeft='30px' color='green'>Submit</Button>
        </Row>
      </MainWrapper>
    )
  }
}

export default NewIssue
