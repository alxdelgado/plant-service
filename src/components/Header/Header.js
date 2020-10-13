import React, { useCallback } from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ScheduleIcon from '@material-ui/icons/Schedule';
import CancelScheduleSendIcon from '@material-ui/icons/CancelScheduleSend';


const drawerWidth = 240;

// styles theme; 
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: '#709987',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  loginButton: {
    marginLeft: '25em'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Header() {
    const history = useHistory();
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const routeToLogin = useCallback(() => history.push('/login'), [history]);
    const routeToHome = useCallback(() => history.push('/'), [history]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    }

  return (

    <div className={classes.root}>
        <CssBaseline />
        <AppBar
            position="sticky"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap onClick={routeToHome}>
                    Sato   
                </Typography>
                <IconButton
                  color="inherit"
                  aria-label="login"
                  onClick={routeToLogin}
                  edge="end"
                  className={classes.loginButton}
                >
                  <AccountBoxIcon />
                </IconButton> 
            </Toolbar>
        </AppBar>
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
        <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
            </IconButton>
        </div>
        <Divider />
        <List>
            {['Home'].map((text, index) => (
              <ListItem button key={text} onClick={routeToHome}>
                  <ListItemIcon>{index === 0 ? <HomeIcon /> : null }</ListItemIcon>
                  <ListItemText style={{textDecoration: 'none'}} primary={text} />
              </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {['Inbox', 'Starred'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {['Schedule', 'Cancel'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <ScheduleIcon /> : <CancelScheduleSendIcon /> }</ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
            ))}
        </List>
        </Drawer>
    </div>
  )
};



