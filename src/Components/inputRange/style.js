import styled from 'styled-components'
import InputRange from './index'

const height = '20px'
const thumbHeight = 15

export const StyledInputRange = styled(InputRange)`
  overflow: hidden;
  display: block;
  appearance: none;
  max-width: 75px;
  width: 100%;
  grid-area: inputrange;

  background-color: transparent;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${height};
    background: ${(props) => props.theme.keyPadnTglBg};
    padding-left: 0.4em;
    padding-right: 0.4em;
    border-radius: 10px;
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

  &::-moz-range-track,
  ::-moz-range-progress {
    height: ${height};
    border-radius: 10px;
    background: ${(props) => props.theme.keyPadnTglBg};
  }

  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    height: ${thumbHeight}px;
    width: ${thumbHeight}px;
    background: ${(props) => props.theme.keySingularBgNTglclr};
    border-radius: 100%;
    border: 0;

    transition: background-color 150ms;
  }

  &::-ms-track {
    width: 100%;
    height: ${height};
    border-radius: 10px;
    border: 0;
    /* color needed to hide track marks */
    color: transparent;
    background: transparent;
  }

  &::-ms-fill-lower {
    background: ${(props) => props.theme.keyPadnTglBg};
  }

  &::-ms-fill-upper {
    background: ${(props) => props.theme.keyPadnTglBg};
  }

  &::-ms-thumb {
    appearance: none;
    height: ${thumbHeight}px;
    width: ${thumbHeight}px;
    background: ${(props) => props.theme.keySingularBgNTglclr};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
    /* IE Edge thinks it can support -webkit prefixes */
    top: 0;
    margin: 0;
    box-shadow: none;
  }
`

export const WrapperGridInputRange = styled.div`
  display: grid;

  grid-template-areas:
    '.     text       text2       text3'
    'lable inputrange inputrange inputrange';
`

export const StyledLabel = styled.label`
  color: ${(props) => props.theme.titleClr};
  margin-right: 1em;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 700;
  grid-area: lable;
`

export const RangeTextOne = styled.p`
  font-weight: 700;
  color: ${(props) => props.theme.titleClr};
  justify-self: center;
  grid-area: text;
`

export const RangeTextTwo = styled(RangeTextOne)`
  justify-self: center;
  grid-area: text2;
`

export const RangeTextThree = styled(RangeTextOne)`
  justify-self: center;
  grid-area: text3;
`
