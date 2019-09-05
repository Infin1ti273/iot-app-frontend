import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import config from "./appConfig";
import WaitingProgress from "./WaitingProgress";

export default class HistoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
        this.ListComponent = this.ListComponent.bind(this);
    }
    render() {
        return (
                this.state.data === null?
                    <div style= {{textAlign: "center"}}>
                        <WaitingProgress/>
                    </div> :
                    <this.ListComponent/>
        )
    }

    ListComponent() {
        return (
            <List component="nav" aria-label="secondary mailbox folders">
                {
                    this.state.data.map((d) => (
                        <ListItem button>
                            <ListItemText primary={d.time} secondary={`Temperature: ${d.temperature}°C Humidity: ${d.humidity}%`} />
                        </ListItem>
                    ))
                }
            </List>
        )
    }

    componentDidMount() {
        fetch(config().host + config().route + "/all")
            .then(res => res.json())
            .then(data => {
                if(data) {
                    this.setState(
                        {
                            data: data,
                        }
                    )
                }
            })
            .catch(err => console.log(err));
    }
}
