import styled from '../theme/styled-components'

const ButtonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`

export default ButtonList
