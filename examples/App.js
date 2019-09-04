import React from 'react';
import './App.css';
import SHA1 from "./SHA1";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.appId = "A6012947548984";
        let now = Date.now();
        this.appKey = SHA1(this.appId + "UZ" + "4998011E-3BA9-585A-7806-64AB9B272A10" + "UZ" + now) + "." + now;
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p id="text">
                        This is content
                    </p>
                    <button onClick={this.showTx.bind(this)}>
                        Name
                    </button>
                    <button onClick={this.showLike.bind(this)}>
                        LikeNumber
                    </button>
                </header>
            </div>
        );
    }

    showTx() {
        api.ajax({
            url: "http://10.128.230.16:5000/api/item/GetCanteens",
            method:"get",
        },
            function (ret, err) {
                if (ret) {
                    let i = document.getElementById("text");
                    i.innerHTML = ret[0].name;
                }
                else {
                    api.alert({ msg: JSON.stringify(err)})
                }
            }
        )
    }

    showName() {
        api.ajax(
            {
                url: "https://d.apicloud.com/mcm/api/dish/5d6e131c3251c71a49554eeb",
                method: "get",
                headers: {
                    "X-APICloud-AppId": this.appId,
                    "X-APICloud-AppKey": this.appKey,
                }
            },
            function (ret, err) {
                if (ret) {
                    let i = document.getElementById("text");
                    i.innerHTML = ret.name;
                }
                else {
                    api.alert({ msg: JSON.stringify(err)})
                }
            })
    }

    showLike() {
        api.ajax(
            {
                url: "https://d.apicloud.com/mcm/api/dish/5d6e131c3251c71a49554eeb",
                method: "get",
                headers: {
                    "X-APICloud-AppId": this.appId,
                    "X-APICloud-AppKey": this.appKey,
                }
            },
            function (ret, err) {
                if (ret) {
                    let i = document.getElementById("text");
                    i.innerHTML = ret.likeNumber;
                }
                else {
                    api.alert({ msg: JSON.stringify(err)})
                }
            })
    }
}

