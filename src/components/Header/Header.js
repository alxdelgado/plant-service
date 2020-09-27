import React, { Suspense, useState } from 'react';
import {
    makeStyles, 
    AppBar, 
    Toolbar, 
    Typography, 
    IconButton, 
    Menu
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


// styles theme; 
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
    const classes = useStyles();
    const [isNavOpen, setNavOpen ] = useState(false);
    const open = Boolean(isNavOpen); 



    // onClick; 
    const handleNavOpen = (event) => {
        console.log("YOO IVE BEEN CLICKED")
        event.preventDefault()
        setNavOpen(event.currentTarget);
    }

    const handleNavClose = (e) => {
        e.preventDefault()
        setNavOpen(null); 
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className={classes.root}>
                <AppBar position="sticky">
                    <Toolbar>
                        <IconButton 
                            onClick={() => handleNavOpen(event)}
                            edge="start" className={classes.menuButton} 
                            color="inherit" 
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            isNavOpen={isNavOpen}
                            open={open}
                            onClose={() => handleNavClose(e)}
                        >
                        </Menu>
                        <Typography variant="h6" className={classes.title}>
                            Plant Service
                        </Typography> 
                    </Toolbar>
                </AppBar>
            </div>
        </Suspense>
    )
}