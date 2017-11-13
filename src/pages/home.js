import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../redux/testApi'
import styled, { css } from 'styled-components'

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: #2B65EC;
  border: 2px solid #2B65EC;
  outline: none;

  ${props => props.primary && css`
    background: #2B65EC;
    color: white;
  `}
`

const home = (props) => {
  return (
    <div>
      <p>React Redux Boilerplate</p>
      <p>{props.error}</p>
      <Button primary onClick={props.requestTestApi}>Test API</Button>
      <Button onClick={props.clearTestApi}>Clear</Button>
      <p>userId = {props.response && props.response.userId}</p>
      <p>id = {props.response && props.response.id}</p>
      <p>title = {props.response && props.response.title}</p>
      <p>body = {props.response && props.response.body}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    response: state.testApi.response,
    error: state.testApi.error
  }
}

export default connect(mapStateToProps, actionCreators)(home)
