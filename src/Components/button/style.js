import styled from 'styled-components'

import Button from './index'

export const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.keysPrimaryBg};
  color: ${(props) => props.theme.primaryClr};
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;
  border-radius: 10px;
  box-shadow: 0 5px ${(props) => props.theme.keysPrimaryShdw};

  border: 0;
`

export const StyledButtonSecondary = styled(StyledButton)`
  font-size: 1.25rem;
  background-color: ${(props) => props.theme.keysSecondaryBg};
  color: #ffff;
  box-shadow: 0 5px ${(props) => props.theme.keysSecondaryShdw};

  &:nth-last-of-type(2) {
    grid-column: 1 / span 2;
  }
`

export const StyledButtonSingular = styled(StyledButton)`
  font-size: 1.25rem;
  background-color: ${(props) => props.theme.keySingularBgNTglclr};
  color: ${(props) => props.theme.keySingularclr};
  box-shadow: 0 5px ${(props) => props.theme.keySingularShdw};
  grid-column: 3 / span 2;
`
