import React, { Component } from 'react'
import gpl from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Modal, Row, TextInput, TextArea, Text, Button } from '../component/styledComponent'

class NewIssue extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }

    this.onSubmitNewIssue = this.onSubmitNewIssue.bind(this)
  }

  onSubmitNewIssue () {
    const { mutate, handleAddIssue, handleCloseModal } = this.props
    const { title, content } = this.state

    if (!title || !content) {
      console.log('@NewIssue Missing title and description')
      this.setState({ error: 'Please write the title and fill in the desciption.' })
      return
    }

    mutate({
      variables: { title, content }
    })
    .then(({ data }) => {
      handleAddIssue({ title, content, closed: false })
      handleCloseModal()
    })
    .catch((err) => this.setState({ error: err }))
  }

  render () {
    return (
      <Modal>
        <Row>
          <Text size='large'>New Issue</Text>
        </Row>
        <Row>
          <TextInput onChange={(event) => this.setState({ title: event.target.value })} placeholder='Title...' />
        </Row>
        <Row>
          <TextArea
            onChange={(event) => this.setState({ content: event.target.value })}
            defaultValue={
`**What is the current behavior?**


**What is the expected behavior?**

`
            }
          />
        </Row>

        {
          this.state.error && <Text color='red'>{this.state.error}</Text>
        }

        <Row itemsAlign='right'>
          <Button onClick={this.props.handleCloseModal}>Cancel</Button>
          <Button onClick={this.onSubmitNewIssue} marginLeft='30px' color='green'>Submit</Button>
        </Row>
      </Modal>
    )
  }
}

const addTodo = gpl`
mutation addTodo($title: String!, $content: String!) {
  addTodo(title: $title, content: $content) {
    title
    content
    closed
  }
}
`

export default graphql(addTodo)(NewIssue)
