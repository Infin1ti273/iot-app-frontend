import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from "./NavBar";
import MainContent from "./MainContent";
import {mainTheme} from "./theme";
import { ThemeProvider } from '@material-ui/styles';

ReactDOM.render(<Index/>, document.getElementById('root'));

function Index () {
    return (
        <ThemeProvider theme={mainTheme}>
            <NavBar />
            <MainContent/>
        </ThemeProvider>
    )
}
