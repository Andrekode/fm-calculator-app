import styled from 'styled-components'
import InputDisplay from './index'

export const StyledInputDisplay = styled(InputDisplay)`
  background-color: ${(props) => props.theme.screenBg};
  color: ${(props) => props.theme.titleClr};
  font-size: 36px;
  text-align: right;
  border-radius: 10px;
  width: 100%;
  padding: 0.5em;
  margin-bottom: 1.125em;
  border: 0;

  @media (min-width: 810px) {
    padding: 0.7em;
    font-size: 50px;
  }
`
