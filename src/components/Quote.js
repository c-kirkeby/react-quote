import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import ButtonList from './ButtonList'
import Twitter from 'react-feather/dist/icons/twitter'

export default props => {
  const { handleNewQuote, handleTwitterShare } = props
  return (
    <QuoteBody>
      <QuoteContent>
        {renderQuote(props)}
      </QuoteContent>
      <ButtonList>
        <Button type="button" onClick={handleNewQuote} large primary>
          New
        </Button>
        <Button type="button" onClick={handleTwitterShare}>
          <Twitter />
        </Button>
      </ButtonList>
    </QuoteBody>
  )
}

const renderQuote = props => {
  if (!props.isLoading && props.quote !== '') {
    return (
      <React.Fragment>
        “{props.quote}”
        <QuoteAuthor>
          — {props.author}
        </QuoteAuthor>
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      Loading quote...
    </React.Fragment>
  )
}

const QuoteBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  flex-grow: 1;
`

const QuoteContent = styled.p`
  flex-direction: column;
  flex-basis: auto;
  justify-content: stretch;
  flex: 1 1 auto;
  flex-grow: 1;
  display: flex;
`

export const QuoteAuthor = styled.span`
  text-align: right;
  font-size: .75rem;
  padding-top: 5px;
  padding-bottom: 5px;
  color: #868e96;
`