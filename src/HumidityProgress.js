import React from "react";
import {CircularProgress} from "@material-ui/core";

export default class HumidityProgress extends React.Component {
    constructor(props) {
        super(props);
        this.HumidityComponent = this.HumidityComponent.bind(this);
    }

    render() {
        return (
            <this.HumidityComponent/>
        );
    }

    HumidityComponent() {
        return (
            <div >
                <CircularProgress variant="static" size={125} thickness={7} value={100} style={{color: '#b0b0b0',position: 'absolute'}}/>
                <CircularProgress variant="static" size={125} thickness={7} value={this.props.data}/>
            </div>
        )
    }
}
