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

  const handleClick = (e) => {}

  const handleReset = () => {
    setInpdspValue((prevInpdsValue) => {
      return { ...prevInpdsValue, number: 0, operator: '', result: 0 }
    })
  }

  const handleDelete = () => {
    console.log('Im delete')
  }

  const handleEqual = () => {
    console.log('Im Equal')
  }

  const handlePlus = () => {
    console.log('Im plus')
  }

  const handleMinus = () => {
    console.log('Im minus')
  }

  const buttons = buttonValues.map((btn, i) => {
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
            btn === '+' ? handlePlus : btn === '-' ? handleMinus : handleClick
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
