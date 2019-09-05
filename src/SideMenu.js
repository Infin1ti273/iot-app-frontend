import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import HomeIcon from '@material-ui/icons/Home';
import HistoryIcon from '@material-ui/icons/History';
import Divider from "@material-ui/core/Divider";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const useStyles = makeStyles({
    list: {
        width: 175,
    },
});

export default class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.MenuComponent = this.MenuComponent.bind(this);
    }

    render() {
        return (
            <SwipeableDrawer
                open={this.props.menu}
                onClose={this.props.triggerMenu}
                onOpen={this.props.triggerMenu}
            >
                <this.MenuComponent/>
            </SwipeableDrawer>
        )
    }

    MenuComponent() {
        const classes = useStyles();
        return (
            <div
                className={classes.list}
                onClick={this.props.triggerMenu}
                onKeyDown={this.props.triggerMenu}
            >
                <List>
                    <ListItem onClick={() => this.props.switchContent(true)} button key='Home'>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItem>
                    <ListItem onClick={() => this.props.switchContent(false)} button key='History'>
                        <ListItemIcon>
                            <HistoryIcon />
                        </ListItemIcon>
                        <ListItemText primary='History' />
                    </ListItem>
                </List>
                <Divider />
                <List>
                        <ListItem button key="More">
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="More" />
                        </ListItem>
                </List>
            </div>
        )
    }
}
