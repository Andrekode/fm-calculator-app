import styled from 'styled-components'
import InputDisplay from './index'

export const StyledInputDisplay = styled(InputDisplay)`
  background-color: ${(props) => props.theme.screenBg};
  color: ${(props) => props.theme.titleClr};
  font-size: 32px;
  text-align: right;
  border-radius: 10px;
  width: 100%;
  padding: 1em;
  margin-bottom: 1.125em;
  border: 0;
`
