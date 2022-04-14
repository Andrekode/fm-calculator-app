import {
  StyledButton,
  StyledButtonSecondary,
  StyledButtonSingular,
} from '../../Components/button/style'

const buttonValues = [
  7,
  8,
  9,
  'DEL',
  4,
  5,
  6,
  '+',
  1,
  2,
  3,
  '-',
  '.',
  0,
  '/',
  'x',
  'RESET',
  '=',
]

const handleClick = (e) => {
  console.log('clicked')
}

export const buttons = buttonValues.map((btn, i) => {
  if (btn === 'RESET' || btn === 'DEL') {
    return (
      <StyledButtonSecondary
        value={btn}
        key={i}
        handleClick={handleClick}
      ></StyledButtonSecondary>
    )
  } else if (btn === '=') {
    return (
      <StyledButtonSingular
        value={btn}
        key={i}
        handleClick={handleClick}
      ></StyledButtonSingular>
    )
  } else {
    return (
      <StyledButton
        value={btn}
        key={i}
        handleClick={handleClick}
      ></StyledButton>
    )
  }
})
