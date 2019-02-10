import * as he from 'he'
import * as React from 'react'
import { v4 as uuidv4 } from 'uuid'
import api from '../utils/api'
import Quote from './Quote'

export interface IQuoteContainerState {
  readonly quote: string,
  readonly author: string,
  readonly isLoading: boolean,
  readonly error: string
}

export default class QuoteContainer extends React.PureComponent<{}, IQuoteContainerState> {
  constructor (props: {}) {
    super(props)
    this.state = {
      author: '',
      error: '',
      isLoading: false,
      quote: ''
    }
    this.handleNewQuote = this.handleNewQuote.bind(this)
    this.handleTwitterShare = this.handleTwitterShare.bind(this)
  }

  public handleNewQuote = async (event: React.MouseEvent) => {
    event.preventDefault()
    await this.getQuote()
  }

  public handleTwitterShare = (event: React.MouseEvent) => {
    event.preventDefault()
    if (this.state.quote.length > 0) {
      const url = `https://twitter.com/intent/tweet?text=${this.state.quote} —${this.state.author}`
      window.open(url, '_blank')
    }
  }

  public async componentDidMount () {
    await this.getQuote()
  }

  public async getQuote () {
    this.setState({
      isLoading: true
    })
    try {
      const response = await api.get('posts', {
        params: {
          '_': uuidv4(),
          'filter[orderby]': 'rand',
          'filter[posts_per_page]': 1
        }
      })
      const post = response.data[0]
      let quote = post.content.replace(/(<([^>]+)>)/ig, '')
      quote = quote.replace(/\s+$/, '')
      quote = he.decode(quote)
      const author = he.decode(post.title)
      this.setState({
        author,
        error: '',
        isLoading: false,
        quote
      })
    } catch (error) {
      this.setState({
        error: 'Hmmm, there was an error getting your quote. 🤔 Try again?',
        isLoading: false
      })
    }
  }

  public render () {
    return (
      <Quote
        {...this.state}
        handleNewQuote={this.handleNewQuote}
        handleTwitterShare={this.handleTwitterShare}
      />
    )
  }
}
