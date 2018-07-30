import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import ButtonList from './ButtonList'
import Twitter from 'react-feather/dist/icons/twitter'

export default props => {
  const { handleNewQuote, handleTwitterShare, isLoading } = props
  return (
    <QuoteBody>
      <React.Fragment>
        {renderQuote(props)}
      </React.Fragment>
      <ButtonList>
        <Button type="button" onClick={handleNewQuote} disabled={isLoading} large primary>
          New
        </Button>
        <Button type="button" onClick={handleTwitterShare} disabled={isLoading}>
          <Twitter />
        </Button>
      </ButtonList>
    </QuoteBody>
  )
}

const renderQuote = props => {
  if (!props.isLoading && props.quote !== '') {
    return (
      <QuoteContent>
        “{props.quote}”
        <QuoteAuthor>
          — {props.author}
        </QuoteAuthor>
      </QuoteContent>
    )
  } else if (props.error !== '' && props.error.length > 0) {
    return (
      <QuoteError>
        {props.error}
      </QuoteError>
    )
  }
  return (
    <QuoteContent>
      Loading quote...
    </QuoteContent>
  )
}

const QuoteBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  flex-grow: 1;
`

const QuoteError = styled.p`
  text-align: center;
`

const QuoteContent = styled.p`
  flex-direction: column;
  justify-content: stretch;
  flex: 1 1 auto;
  display: flex;
`

export const QuoteAuthor = styled.span`
  text-align: right;
  font-size: .75rem;
  padding-top: 5px;
  padding-bottom: 5px;
  color: #868e96;
`