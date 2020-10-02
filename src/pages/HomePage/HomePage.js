import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import './HomePage.css';


export const SectionIntro = styled.div`
    display: flex;  
    width: 100%; 
    height: 30vh;
    background-color: #709987;
    padding-top: 20px;
    opacity: 87%;
`;

export const Heading = styled.h1`
    position: absolute;
    margin-top: 60px;
    color: #f5f5f5;

`; 

export const Span = styled.span`
    postion: absolute;
    margin-top 100px;
    color: #f5f5f5;
`; 

export default function HomePage() {

    return (
        <React.Fragment>
                <Paper elevation={3}>
                    <SectionIntro>
                        <Heading>All-In-One Plant Services App</Heading>
                        <Span>Request plant keeping services while your away or unable to care for your plants</Span> 
                    </SectionIntro>
                </Paper>
        </React.Fragment>
    ) 
}