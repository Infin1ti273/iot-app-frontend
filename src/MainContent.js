import React from "react";
import config from "./appConfig";
import WaitingProgress from "./WaitingProgress";

export default class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: "aaa",
            humidity: "bbb",
            time: "ccc",
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.temperature === "aaa"?
                        <WaitingProgress/>:
                        <p>{this.state.temperature}</p>
                }
            </div>
        )
    }

    componentDidMount() {
        fetch(config().host + config().route,
            {

            })
            .then(res => {
                this.setState({
                    temperature: "1122",
                })
            })
    }
}
