import React from 'react'

import { StyledButton } from './Components/Button/Button.style'
import { Container } from './Container.style'
import Button from './Components/Button'

export default function App() {

    const buttonValues = [
        7,8,9,'DEL',
        4,5,6,"+",
        1,2,3,"-",
        ".",0,"/","x",
        "RESET","="
    ]

    const buttonValuesob = {
        buttonText: [1,2,3,"-",".",0,"/","x","RESET","="],

        
    }

   

    const buttons = buttonValues.map((btn, i) => {
        return (
            <StyledButton value={btn} key={i}  backgroundColor='red'> </StyledButton>
        )
    })

    
    return (
        <Container>
           {buttons}
        </Container>
            
        
    )
}