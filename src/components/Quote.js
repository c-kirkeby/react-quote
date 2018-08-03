import React from 'react'
import styled, { keyframes } from 'styled-components'
import Twitter from 'react-feather/dist/icons/twitter'
import Refresh from 'react-feather/dist/icons/refresh-ccw'
import { fadeIn } from 'react-animations'
import Button from './Button'
import ButtonList from './ButtonList'

export default props => {
  const { handleNewQuote, handleTwitterShare, isLoading } = props
  return (
    <QuoteBody>
      <React.Fragment>
        {renderQuote(props)}
      </React.Fragment>
      <ButtonList>
        <Button type="button" onClick={handleNewQuote} disabled={isLoading} large primary>
          <Refresh />
        </Button>
        <Button type="button" onClick={handleTwitterShare} disabled={isLoading}>
          <Twitter />
        </Button>
      </ButtonList>
    </QuoteBody>
  )
}

const renderQuote = props => {
  if (props.quote !== '' && props.error === '' && !props.isLoading) {
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
      <QuoteWarning>
        {props.error}
      </QuoteWarning>
    )
  }
  return (
    <QuoteWarning>
      Loading...
    </QuoteWarning>
  )
}

const loadingAnimation = keyframes`
  ${fadeIn}
`

const QuoteBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  flex-grow: 1;
`

const QuoteWarning = styled.p`
  text-align: center;
  font-size: 1.25rem;
  animation: 1s ${loadingAnimation};
`

const QuoteContent = styled.p`
  animation: 1s ${loadingAnimation};
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