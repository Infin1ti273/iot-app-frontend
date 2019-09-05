import React from "react";
import config from "./appConfig";
import WaitingProgress from "./WaitingProgress";
import {gridStyles} from "./style";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import HumidityProgress from "./HumidityProgress";

export default class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: null,
            humidity: null,
        };
        this.GridWrap = this.GridWrap.bind(this);
    }

    render() {
        return (
            <this.GridWrap/>
        )
    }

    componentDidMount() {
        fetch(config().host + config().route,{})
            .then(res => res.json())
            .then(data => {
                if (data) {
                    this.setState(
                        {
                            temperature: data.temperature,
                            humidity: data.humidity,
                        }
                    )
                }
            })
            .catch(err => console.log(err));
        setInterval(() => {
            let t = this.state.temperature + (Math.random()-0.5) * 6;
            let h = this.state.humidity + (Math.random()-0.5) * 4;
            this.setState(
                {
                    temperature: t,
                    humidity: h,
                }
            )
        },3000)
    }

    GridWrap() {
        let classes = gridStyles();

        return (
            <div className={classes.root}>
                <Paper className={classes.paper}  style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
                        <Typography>
                            {
                                this.state.temperature===null?
                                    <WaitingProgress/>:
                                    <div style={{textAlign: "center"}}>
                                        <h2>Temperature</h2>
                                        <h1><span color="inherit">{/[0-9]+.[0-9]/.exec(this.state.temperature)}°C</span></h1>
                                    </div>
                            }
                        </Typography>
                </Paper>
                <Paper className={classes.paper}  style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
                        <Typography>
                            {
                                this.state.humidity===null?
                                    <WaitingProgress/>:
                                    <div style={{textAlign: "center"}}>
                                        <h2>Humidity: <span color="inherit">{/[0-9]+.[0-9]/.exec(this.state.humidity)}%</span></h2>
                                        <HumidityProgress data={this.state.humidity}/>
                                    </div>
                            }
                        </Typography>
                </Paper>
            </div>
        );
    }
}


