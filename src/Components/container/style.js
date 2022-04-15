import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 375px;
  padding: 1em;

  @media (min-width: 810px) {
    max-width: 600px;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.875em;
`
