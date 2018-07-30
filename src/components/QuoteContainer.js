import React, { Component } from 'react'
import Quote from './Quote'
import api from '../utils/api'
import he from 'he'
import uuidv4 from 'uuid/v4'

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
    this.handleTwitterShare = this.handleTwitterShare.bind(this)
  }

  handleNewQuote = (event) => {
    event.preventDefault()
    this.getQuote()
  }

  handleTwitterShare = (event) => {
    event.preventDefault()
    if (this.state.quote.length > 0) {
      const url = `https://twitter.com/intent/tweet?text=${this.state.quote} —${this.state.author}`
      window.open(url, '_blank')
    }
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
          'filter[posts_per_page]': 1,
          _: uuidv4()
        }
      })
      const post = response.data[0]
      let quote = post.content.replace(/(<([^>]+)>)/ig, "")
      quote = quote.replace(/\s+$/, "")
      quote = he.decode(quote)
      const author = he.decode(post.title)
      this.setState({
        quote,
        author,
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
        handleTwitterShare={this.handleTwitterShare}
      >
      </Quote>
    )
  }
}