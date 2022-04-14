import styled from 'styled-components'

export const ContainerGridButtons = styled.div`
  background-color: ${(props) => props.theme.keyPadnTglBg};
  border-radius: 10px;
  padding: 1.5em;
  margin-left: auto;
  margin-right: auto;
  /* min-width: 285px; */
  max-width: 375px;

  display: grid;
  place-content: center;
  gap: 1em;
  grid-template-columns: repeat(4, 1fr);
`
