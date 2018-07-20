import React, { Component } from 'react'
import axios from 'axios'

const endpoint = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'

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
        <React.Fragment>
          {this.state.quote} - {this.state.author}
        </React.Fragment>
      )
    }
    return (
      <React.Fragment>
        Loading...
      </React.Fragment>
    )
  }

  async getQuote() {
    this.setState({
      isLoading: true
    })
    try {
      const response = await axios(endpoint)
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
