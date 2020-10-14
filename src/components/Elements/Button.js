import React from 'react'; 
import styled from 'styled-components'; 

export const StyledButton = styled.button`
    margin-top: 24px; 
    padding-top: 16px;
    padding-bottom: 16px; 
    width: 100%; 
    border-radius: 4px; 
    background: ${props => props.background || "#000"}; 
    color: ${props => props.color || "#fff"};
    font-size: 16px; 
    font-weight: bold; 
    line-height: 14px; 
    cursor: pointer; 
`;

export default function Button(props) {

    return (
        <StyledButton>Sign up</StyledButton>
    )
}

