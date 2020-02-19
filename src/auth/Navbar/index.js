import React from 'react';
import Router from 'next/router'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles(theme => ({
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

export default function AppBarAuth() {
  const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar color="#eceff1" elevation={1}>
                <Toolbar>
                    <IconButton onClick={() => Router.push('/')} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <ArrowBackIosIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}