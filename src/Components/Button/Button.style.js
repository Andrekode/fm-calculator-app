import styled from 'styled-components'

import Button from '../Button'



export const StyledButton = styled(Button)`
    background-color:  #eae3dc;
    color: 	#444b5a;
    font-size: 2rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 5px #b4a597;
    
    
    border: 0;

    /* invidual button styles DEL RESET and = */

    ${props => (props.value === 'DEL' || props.value === 'RESET') && `background-color: #637097;`}
    ${props => (props.value === 'DEL' || props.value === 'RESET' || props.value === '=') && `color: #ffff;`}
    ${props => (props.value === 'DEL' || props.value === 'RESET') && `box-shadow: 0 5px  #404e72;`}
    ${props => (props.value === 'DEL' || props.value === 'RESET' || props.value === '=') && `font-size: 1rem;`}
    ${props => (props.value === 'DEL' || props.value === 'RESET' || props.value === '=')  && `font-weight: 700;`}

    ${props => props.value === '=' && `background-color: #d03f2f;`}
    ${props => props.value === '=' && `box-shadow: 0 5px #93261a;`}
    
  
    /* Grid spans RESET and = */

    ${props => props.value === "RESET" && `grid-column: 1 / span 2 `}
    ${props => props.value === '=' && `grid-column: 3 / span 2 `}
    

       
    

`

