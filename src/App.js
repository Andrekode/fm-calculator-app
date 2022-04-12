import React from 'react'
import { nanoid } from 'nanoid'

import { StyledButton } from './Components/Button/Button.style'
import { Container } from './Container.style'
import { GlobalStyles } from './GlobalStyles.styles'
import Button from './Components/Button'

export default function App() {
    

    const buttonValues = [
        7,8,9,'DEL',
        4,5,6,"+",
        1,2,3,"-",
        ".",0,"/","x",
        "RESET","="
    ]

    function handleClick(e) {
        console.log(e.target)
    }

    

   

    const buttons = buttonValues.map((btn, i) => {
        return (
            <StyledButton value={btn} key={i} handleClick={handleClick} backgroundColor='red'> </StyledButton>
        )
    })

    
    return (
        <Container>
            <GlobalStyles />
           {buttons}
        </Container>
            
        
    )
}