import React, { Component } from 'react'
import Quote from './Quote'
import api from '../utils/api'
import he from 'he'

export default class QuoteContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: '',
      author: '',
      isLoading: false,
      error: ''
    }
    this.handleNewQuote = this.handleNewQuote.bind(this)
  }

  handleNewQuote = (event) => {
    event.preventDefault()
    this.getQuote()
  }

  componentDidMount() {
    this.getQuote()
  }

  async getQuote() {
    this.setState({
      isLoading: true
    })
    try {
      const response = await api.get('posts', {
        params: {
          'filter[orderby]': 'rand',
          'filter[posts_per_page]': 1
        }
      })
      const post = response.data[0]
      let message = post.content.replace(/(<([^>]+)>)/ig, "")
      message = message.replace(/\s+$/, "")
      message = he.decode(message)
      this.setState({
        quote: message,
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

  render() {
    return (
      <Quote
        {...this.state}
        handleNewQuote={this.handleNewQuote}
      >
      </Quote>
    )
  }
}