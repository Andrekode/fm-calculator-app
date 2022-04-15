import styled from 'styled-components'

export const ContainerGridButtons = styled.div`
  background-color: ${(props) => props.theme.keyPadnTglBg};
  border-radius: 10px;
  padding: 2em;
  display: grid;
  place-content: center;
  gap: 1em;
  grid-template-columns: repeat(4, 60px);
  grid-template-rows: repeat(5, 60px);
  width: 100%;

  @media (min-width: 810px) {
    grid-template-columns: repeat(4, 100px);
    gap: 1.5em;
  }
`
