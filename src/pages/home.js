import React, { Component } from 'react'
import gpl from 'graphql-tag'
import { graphql } from 'react-apollo'
import shortid from 'shortid'
import qs from 'qs'
import { Link } from 'react-router-dom'
import NewIssue from '../component/newIssue'
import { MainWrapper, Row, TextInsideBox, Button } from '../component/styledComponent'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: props.data.todos || []
    }
  }

  componentDidMount () {
    const { location, data } = this.props
    const { refetch } = qs.parse(location.search, { ignoreQueryPrefix: true })
    if (refetch) {
      data.refetch()
    }
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
            !loading && !error && todos.map(({_id, title, closed}) => (
              <Link to={`/issue/${_id}`} key={shortid.generate()}>
                <TextInsideBox disabled={closed}>
                  {closed && '(Closed)'} {title}
                </TextInsideBox>
              </Link>
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
