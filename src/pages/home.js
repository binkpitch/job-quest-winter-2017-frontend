import React, { Component } from 'react'
import gpl from 'graphql-tag'
import { graphql } from 'react-apollo'
import shortid from 'shortid'
import NewIssue from '../component/newIssue'
import { MainWrapper, Row, TextInsideBox, Button } from '../component/styledComponent'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillReceiveProps (nextProps) {
    const { todos } = nextProps.data
    if (todos) {
      this.setState({ todos: todos.slice().reverse() })
    }
  }

  render () {
    const { loading, error } = this.props.data
    const { todos } = this.state
    return (
      <MainWrapper>
        <Row>
          <TextInsideBox header>is:issue</TextInsideBox>
        </Row>
        <Row itemsAlign='right'>
          <Button onClick={() => this.setState({ isOpenNewIssueModal: true })} color='green'>New Issue</Button>
        </Row>
        <Row>
          {
            !loading && !error && todos.map(todo => (
              <TextInsideBox key={shortid.generate()} disabled={todo.closed}>
                {todo.closed && '(Closed)'} {todo.title}
              </TextInsideBox>
            ))
          }
        </Row>

        {
          this.state.isOpenNewIssueModal &&
            <NewIssue
              handleAddIssue={(issue) => this.setState({ todos: [issue, ...todos] })}
              handleCloseModal={() => this.setState({ isOpenNewIssueModal: false })}
              />
        }
      </MainWrapper>
    )
  }
}

const getTodos = gpl`
{
  todos {
    _id
    title
    content
    closed
  }
}
`

export default graphql(getTodos)(Home)
