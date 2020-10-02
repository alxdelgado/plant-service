import React from 'react';
import Paper from '@material-ui/core/Paper';

// import styles;
import {
    SectionIntro,
    Heading, 
    Span
} from './HomePage.styles.js';
 
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
};