import React, { Component } from 'react'
import styled from 'styled-components'
import api from '../utils/api'

export default class Quote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: '',
      author: '',
      isLoading: false,
      error: ''
    }
  }

  renderQuote() {
    if (!this.state.isLoading && this.state.quote !== '') {
      return (
        <QuoteStyle>
          {this.state.quote}
          <Author>
            — {this.state.author}
          </Author>
        </QuoteStyle>
      )
    }
    return (
      <QuoteStyle>
        Loading...
      </QuoteStyle>
    )
  }

  async getQuote() {
    this.setState({
      isLoading: true
    })
    try {
      const response = await api.get('posts', {
        params: {
          'filter[orderBy]': 'rand',
          'filter[posts_per_page]': 1
        }
      })
      const post = response.data[0]
      this.setState({
        quote: post.content.replace(/(<([^>]+)>)/ig, ""),
        author: post.title,
        isLoading: false
      })
    } catch (error) {
      this.setState({
        error,
        isLoading: false
      })
    }
  }

  async componentDidMount() {
    this.getQuote()
  }

  render() {
    return (
      <React.Fragment>
        {this.renderQuote()}
      </React.Fragment>
    )
  }
}

const QuoteStyle = styled.div`
  flex-direction: column;
  display: flex;
`

export const Author = styled.span`
  text-align: right;
  font-size: .75rem;
  padding-top: 5px;
  padding-bottom: 5px;
  color: #868e96;
`