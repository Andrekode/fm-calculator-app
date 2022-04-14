import { createGlobalStyle } from 'styled-components'
import { themeOne, themeTwo, themeThree } from './Components/themes/themes'

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&display=swap');

    
    body {
        font-family: 'League Spartan', sans-serif;
        font-size: 1rem;
        background-color: ${(props) => props.theme.mainBg};
        margin: 0;
        padding: 0;
        /* color: ${(props) => props.theme.primaryClr}; */
        
    }


`
