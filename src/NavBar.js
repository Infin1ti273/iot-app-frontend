import React from 'react';
import { navBarStyles } from "./style";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.Bar = this.Bar.bind(this);
    }

    render() {
        return (
            <this.Bar/>
        )
    }

    Bar() {
        const classes = navBarStyles();
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton onClick={this.props.triggerMenu} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            {this.props.navName}
                        </Typography>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <SettingsRoundedIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
