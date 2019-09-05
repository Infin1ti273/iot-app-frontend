import { makeStyles } from "@material-ui/core/styles";

let navBarStyles = makeStyles(theme => ({
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

let gridStyles = makeStyles(theme => ({
    root: {
        flexGrow: 2,
        overflow: 'visible',
        padding: theme.spacing(1),
        height: "75%",
    },
    paper: {
        height: "50%",
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
}));

export { navBarStyles,gridStyles }
