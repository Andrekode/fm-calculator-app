import styled from 'styled-components'

export const ContainerGridButtons = styled.div`
  background-color: ${(props) => props.theme.keyPadnTglBg};
  border-radius: 10px;
  padding: 1.5em;
  display: grid;
  place-content: center;
  gap: 1em;
  grid-template-columns: repeat(4, 60px);
  grid-template-rows: repeat(5, 60px);
`
