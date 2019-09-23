import { Backdrop, AppBar,Button , Grid, Typography } from '@material-ui/core';
import React, { Component } from 'react';

export default class MainPanel extends Component {
    render() {
        return(
            <Grid xs='8'>
                {/* <Backdrop> */}
                     {/* <img src="./images/background2.jpg"/> */}
                <Typography> Hello</Typography>
                {/* </Backdrop> */}
            </Grid>
                
            // <p>Somethings up</p>
            // <AppBar>
            // <Button></Button>
            // </AppBar>
    
        )
    }
}
