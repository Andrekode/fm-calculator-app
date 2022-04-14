import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { buttons } from './helper/renderButtonLogic' // renders multiple buttons based on condit. Used to be in App function
import { StyledTitle } from './Components/title/style'
import { StyledInputRange } from './Components/inputRange/style'
import { StyledInputDisplay } from './Components/inputDisplay/style'
import { Container, FlexContainer } from './Components/container/style'
import { ContainerGridButtons } from './Components/gridWrapper/style'
import { GlobalStyles } from './GlobalStyles.styles'
import { themeOne, themeTwo, themeThree } from './Components/themes/themes'

export default function App() {
  const [theme, setTheme] = useState({ value: '1' })

  const handleChange = (e) => {
    const { value } = e.target
    setTheme({ value })
  }

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
          <StyledInputRange value={theme.value} handleChange={handleChange} />
        </FlexContainer>
        <StyledInputDisplay />
        <ContainerGridButtons>{buttons}</ContainerGridButtons>
      </Container>
    </ThemeProvider>
  )
}
