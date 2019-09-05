import React from "react";
import {mainTheme} from "./theme";
import {ThemeProvider} from "@material-ui/styles";
import NavBar from "./NavBar";
import MainContent from "./MainContent";
import appConfig from "./appConfig";
import SideMenu from "./SideMenu";
import HistoryList from "./HistoryList";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = (
            {
                theme: mainTheme(appConfig().color0),
                menu: false,
                navName: "仓库小助手",
                isMain: "true",
            }
        );
        this.Main = this.Main.bind(this);
        this.triggerMenu = this.triggerMenu.bind(this);
        this.switchContent = this.switchContent.bind(this);
    }

    render() {
        return (
            <this.Main/>
        )
    }

    Main() {
        return (
            <ThemeProvider theme={this.state.theme}>
                <NavBar triggerMenu={this.triggerMenu} navName={this.state.navName}/>
                <SideMenu menu={this.state.menu} triggerMenu={this.triggerMenu} switchContent={this.switchContent}/>
                {
                    this.state.isMain?
                        <MainContent/>:
                        <HistoryList/>
                }
            </ThemeProvider>
        )
    }

    triggerMenu(e) {
        if (e && e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
            return;
        }
        this.setState(
            {
                menu: !this.state.menu,
            }
        )
    }

    switchContent(type) {
        this.setState(
            {
                navName: type?"仓库小助手":"历史记录",
                isMain: type,
            }
        )
    }

    changeThemeColor(color) {
        let newTheme = mainTheme(color);
        this.setState(
            {
                theme: newTheme,
            }
        )
    }
}
