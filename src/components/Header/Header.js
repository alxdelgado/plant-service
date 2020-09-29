import React, { Suspense, useState } from 'react';
import {
    useTheme,
    makeStyles, 
    AppBar, 
    Toolbar, 
    Typography, 
    IconButton, 
    Menu, 
    Drawer,
    Divider,
    Hidden,
    List,
    ListItem,
    ListItemText,
    CssBaseline,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const drawerWidth = 240;

// styles theme; 
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
      [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
      },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    },
  },
  drawer: {
      [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
      },
  },
  toolbar: theme.mixins.toolbar, 
  drawerPaper: {
      width: drawerWidth,
  },
  content: {
      flexGrow: 1, 
      padding: theme.spacing(3),
  },
}));

export default function Header(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);
    const toggleDrawer = Boolean(false); 

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {['Services', 'Payments', 'Orders'].map((text, index) => (
                    <ListItem button key={index}>
                        <ListItemText primary={text} />
                    </ListItem> 
                ))}
            </List>
        </div>
    ); 

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color='inherit'
                            aria-label='open drawer'
                            edge='start'
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography>
                            Plant Service
                        </Typography>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer} arai-label="sidebar tabs">
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={container}
                            variant='temporary'
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper, 
                            }}
                            ModalProps={{
                                keepMounted: true,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden> 
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer> 
                    </Hidden>
                </nav>
            </div>
        </Suspense>
    )
;}
