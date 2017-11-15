import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import gpl from 'graphql-tag'
import { Link } from 'react-router-dom'
import { graphql, compose } from 'react-apollo'
import { connect } from 'react-redux'
import { actionCreators } from '../redux/deleteIssue'
import { MainWrapper, Row, TextInsideBox, MarkdownBox, Button } from '../component/styledComponent'
import DeleteIssueConfirm from '../component//deleteIssueConfirm'

class Issue extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillReceiveProps (nextProps) {
    const { loading, todo } = nextProps.getIssue
    if (!loading && !todo) {
      this.props.history.push('/?refetch=true')
    }
  }

  componentDidUpdate (prevProps) {
    const { isFetching, done } = this.props.deleteIssue
    if (prevProps.deleteIssue.isFetching && !isFetching && done) {
      this.props.history.push('/?refetch=true')
    }
  }

  render () {
    const { toggleIssue, requestDeleteIssue } = this.props
    const { todo } = this.props.getIssue
    return (
      <MainWrapper white>
        <Row itemsAlign='spread'>
          <Link to='/?refetch=true'>
            <Button>Back</Button>
          </Link>
          <Button color='red' onClick={() => this.setState({ isOpenDeleteIssueModal: true })}>Delete</Button>
        </Row>
        <Row>
          <TextInsideBox disabled={todo && todo.closed}>
            {todo && todo.closed && '(Closed)'} {todo && todo.title}
          </TextInsideBox>
        </Row>
        <Row>
          <MarkdownBox>
            <ReactMarkdown source={todo && todo.content} />
          </MarkdownBox>
        </Row>
        <Row itemsAlign='right'>
          {
            todo && todo.closed ? (
              <Button color='green' onClick={toggleIssue}>Open Issue</Button>
            ) : (
              <Button color='red' onClick={toggleIssue}>Close Issue</Button>
            )
          }
        </Row>
        {
          this.state.isOpenDeleteIssueModal &&
            <DeleteIssueConfirm
              handleDeleteIssue={() => requestDeleteIssue(todo && todo._id)}
              handleCloseModal={() => this.setState({ isOpenDeleteIssueModal: false })}
             />
        }
      </MainWrapper>
    )
  }
}

const getIssue = gpl`
query getIssue($_id: String!) {
  todo (_id: $_id) {
    _id
    title
    content
    closed
  }
}
`

const toggleIssue = gpl`
mutation toggleIssue($_id: String!) {
  toggleTodo(_id: $_id) {
    _id
    closed
  }
}
`

const mapStateToProps = (state) => {
  return {
    deleteIssue: state.deleteIssue
  }
}

const ConnectedIssue = connect(mapStateToProps, actionCreators)(Issue)

export default compose(
  graphql(getIssue, { name: 'getIssue', options: props => ({ variables: { _id: props.match.params.id } }) }),
  graphql(toggleIssue, { name: 'toggleIssue', options: props => ({ variables: { _id: props.match.params.id } }) })
)(ConnectedIssue)
