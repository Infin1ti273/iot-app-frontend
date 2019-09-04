import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export const mainTheme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#ff4400',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            // light: will be calculated from palette.primary.main,
            main: '#0044ff',
            // dark: will be calculated from palette.secondary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        // error: will use the default color
    },
});
