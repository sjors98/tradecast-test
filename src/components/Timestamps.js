import React from 'react';
import data from "../data/data.json"; 

export default class Timestamps extends React.Component {
  render() {
    return (
        <div className="App-sidebar">
            <h1>Timestamps</h1>
            <ul className="App-timestamps">
                {
                    data.events.map((events, i) => { 
                        switch(events.type) {
                            case "goal":
                                return (
                                    <li key={i}>
                                        <div>
                                            <p>Time: {events.time}</p>
                                            <p>Player: {events.player}</p>
                                            <p>Distance: {events.distanceOfShot}</p>
                                            <p>Score: {events.newScore.home} - {events.newScore.away}</p>
                                        </div>
                                    </li>
                                );
                            case "card":
                                return (
                                    <li key={i}>
                                        <div>
                                            <p>Time: {events.time}</p>
                                            <p>Player: {events.player}</p>
                                            <p>Card: {events.cardType}</p>
                                        </div>
                                    </li>
                                );
                            case "endHalf":
                                return (
                                    <li key={i}>
                                        <div>
                                            <p>Time: {events.time}</p>
                                        </div>
                                    </li>
                                );
                            default:
                                return (
                                    <li key={i}>
                                        Nothing is happening
                                    </li>
                                );
                        }
                    })
                }
            </ul>
        </div>
    );
  }
}
