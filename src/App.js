import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { StyledTitle } from './Components/title/style'
import {
  StyledInputRange,
  StyledLabel,
  WrapperGridInputRange,
  RangeTextOne,
  RangeTextTwo,
  RangeTextThree,
} from './Components/inputRange/style'

import {
  StyledButton,
  StyledButtonSecondary,
  StyledButtonSingular,
} from './Components/button/style'
import { buttonValues } from './helper/renderButtonLogic'
import { StyledInputDisplay } from './Components/inputDisplay/style'
import { Container, FlexContainer } from './Components/container/style'
import { ContainerGridButtons } from './Components/gridWrapper/style'
import { GlobalStyles } from './GlobalStyles.styles'
import { themeOne, themeTwo, themeThree } from './Components/themes/themes'

export default function App() {
  const [theme, setTheme] = useState({ value: '1' })

  const [inpdspValue, setInpdspValue] = useState({
    number: 0,
    operator: '',
    result: 0,
  })

  const handleChange = (e) => {
    const { value } = e.target
    setTheme((prevTheme) => {
      return { ...prevTheme, value }
    })
  }

  // regex by Emissary Stack overflow

  const toLocaleString = (num) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ')

  const removeSpaces = (num) => num.toString().replace(/\s/g, '')

  const numHandler = (e) => {
    e.preventDefault()
    const value = e.target.innerHTML

    if (removeSpaces(inpdspValue.number).length < 15) {
      setInpdspValue({
        ...inpdspValue,
        number:
          inpdspValue.number === 0 && value === '0'
            ? '0'
            : removeSpaces(inpdspValue.number) % 1 === 0
            ? toLocaleString(Number(removeSpaces(inpdspValue.number + value)))
            : toLocaleString(inpdspValue.number + value),
        result: !inpdspValue.operator ? 0 : inpdspValue.result,
      })
    }
  }

  const handleReset = () => {
    setInpdspValue((prevInpdsValue) => {
      return { ...prevInpdsValue, number: 0, operator: '', result: 0 }
    })
  }

  const handleDelete = () => {
    console.log('Im delete')
  }

  const handleEqual = () => {
    if (inpdspValue.operator && inpdspValue.number) {
      const math = (a, b, sign) =>
        sign === '+'
          ? a + b
          : sign === '-'
          ? a - b
          : sign === 'x'
          ? a * b
          : a / b

      setInpdspValue({
        ...inpdspValue,
        result:
          inpdspValue.number === '0' && inpdspValue.operator === '/'
            ? "Can't divide with 0"
            : toLocaleString(
                math(
                  Number(removeSpaces(inpdspValue.result)),
                  Number(removeSpaces(inpdspValue.number)),
                  inpdspValue.operator
                )
              ),
        operator: '',
        number: 0,
      })
    }
  }

  const operatorHandler = (e) => {
    e.preventDefault()
    const value = e.target.innerHTML

    setInpdspValue({
      ...inpdspValue,
      operator: value,
      result:
        !inpdspValue.result && inpdspValue.number
          ? inpdspValue.number
          : inpdspValue.result,
      number: 0,
    })
  }

  const commaHandler = (e) => {
    e.preventDefault()
    const value = e.target.innerHTML

    setInpdspValue({
      ...inpdspValue,
      number: !inpdspValue.number.toString().includes('.')
        ? inpdspValue.number + value
        : inpdspValue.number,
    })
  }

  const buttons = buttonValues.flat().map((btn, i) => {
    if (btn === 'RESET' || btn === 'DEL') {
      return (
        <StyledButtonSecondary
          value={btn}
          key={i}
          handleClick={btn === 'RESET' ? handleReset : handleDelete}
        ></StyledButtonSecondary>
      )
    } else if (btn === '=') {
      return (
        <StyledButtonSingular
          value={btn}
          key={i}
          handleClick={handleEqual}
        ></StyledButtonSingular>
      )
    } else {
      return (
        <StyledButton
          value={btn}
          key={i}
          handleClick={
            btn === '/' || btn === '+' || btn === '-' || btn === 'x'
              ? operatorHandler
              : btn === '.'
              ? commaHandler
              : numHandler
          }
        ></StyledButton>
      )
    }
  })

  return (
    <ThemeProvider
      theme={
        theme.value === '1'
          ? themeOne
          : theme.value === '2'
          ? themeTwo
          : themeThree
      }
    >
      <Container>
        <GlobalStyles />
        <FlexContainer>
          <StyledTitle />
          <WrapperGridInputRange>
            <RangeTextOne>1</RangeTextOne>
            <RangeTextTwo>2</RangeTextTwo>
            <RangeTextThree>3</RangeTextThree>
            <StyledLabel htmlFor="theme">Theme</StyledLabel>
            <StyledInputRange value={theme.value} handleChange={handleChange} />
          </WrapperGridInputRange>
        </FlexContainer>
        <StyledInputDisplay value={inpdspValue} />
        <ContainerGridButtons>{buttons}</ContainerGridButtons>
      </Container>
    </ThemeProvider>
  )
}
