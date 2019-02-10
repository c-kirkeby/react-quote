import * as React from 'react'
import posed, { PoseGroup } from 'react-pose'
import { RefreshCcw as Refresh, Twitter } from 'styled-icons/feather'
import styled from '../styled-components'
import Button from './Button'
import ButtonList from './ButtonList'
import { IQuoteContainerState } from './QuoteContainer'

export interface IQuoteProps extends IQuoteContainerState {
  handleNewQuote: (event: React.MouseEvent<Element, MouseEvent>) => void,
  handleTwitterShare: (event: React.MouseEvent<Element, MouseEvent>) => void
}

const RefreshIcon = styled(Refresh)`
  stroke-width: 2;
`

const TwitterIcon = styled(Twitter)`
  stroke-width: 2;
`

export default (props: IQuoteProps): JSX.Element => {
  const { handleNewQuote, handleTwitterShare, isLoading } = props
  return (
    <QuoteBody>
      <React.Fragment>
        <PoseGroup>
        {renderQuote(props)}
        </PoseGroup>
      </React.Fragment>
      <ButtonList>
        <Button type="button" onClick={handleNewQuote} disabled={isLoading} large primary>
          <RefreshIcon size="24" />
        </Button>
        <Button type="button" onClick={handleTwitterShare} disabled={isLoading}>
          <TwitterIcon size="24" />
        </Button>
      </ButtonList>
    </QuoteBody>
  )
}

const renderQuote = (props: IQuoteProps) => {
  if (props.quote !== '' && props.error === '' && !props.isLoading) {
    return (
      <QuoteContent key="quote-content">
        “{props.quote}”
        <QuoteAuthor>
          — {props.author}
        </QuoteAuthor>
      </QuoteContent>
    )
  } else if (props.error !== '' && props.error.length > 0) {
    return (
      <QuoteWarning key="quote-warning">
        {props.error}
      </QuoteWarning>
    )
  }
  return (
    <QuoteWarning key="quote-loading">
      Loading...
    </QuoteWarning>
  )
}

const transition = {
  enter: {
    ease: 'easeInOut',
    opacity: 1
  },
  exit: {
    ease: 'easeInOut',
    opacity: 0
  }
}

const QuoteBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  flex-grow: 1;
  align-content: space-between;
  min-height: 150px;
`

const StyledQuoteContent = styled.p`
  flex-direction: column;
  justify-content: stretch;
  flex: 1 1 auto;
  display: flex;
`

const QuoteContent = posed(StyledQuoteContent)(transition)

const StyledQuoteWarning = styled(StyledQuoteContent)`
  text-align: center;
  font-size: 1.25rem;
`

const QuoteWarning = posed(StyledQuoteWarning)(transition)

export const QuoteAuthor = styled.span`
  text-align: right;
  font-size: .75rem;
  padding-top: 5px;
  padding-bottom: 5px;
  color: #868e96;
`
