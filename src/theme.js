import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export let mainTheme = (color) => createMuiTheme({
    palette: {
        primary: {
            main: color[0],
        },
        secondary: {
            main: color[1],
        },
    },
});
