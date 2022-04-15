import styled from 'styled-components'
import InputRange from './index'

const height = '20px'
const thumbHeight = 30
const trackHeight = '16px'

export const StyledInputRange = styled(InputRange)`
  overflow: hidden;
  display: block;
  appearance: none;
  max-width: 60px;
  width: 100%;
  margin: 0;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${height};
    background: green;
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: ${thumbHeight}px;
    width: ${thumbHeight}px;
    background: ${(props) => props.theme.keySingularBgNTglclr};
    border-radius: 100%;
    border: 0;
    top: 50%;
    transform: translateY(-50%);
    /* box-shadow: ; */
    transition: background-color 150ms;
  }

  &::-moz-range-track {
    height: ${height};

    border-radius: 10px;
    background: ${(props) => props.theme.keyPadnTglBg};
  }

  &::-moz-range-thumb {
    appearance: none;
    margin: 0;

    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${(props) => props.theme.keySingularBgNTglclr};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
  }
`
