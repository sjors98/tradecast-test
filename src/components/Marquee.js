import React, {Component} from 'react';
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import data from "../data/data.json"; 

export default class CustomMarquee extends Component {
    render() {
        return (
            <div className="marquee-wrapper">
                <Marquee>
                    {
                    data.ticker.map(ticker => (
                        <div className="marquee-child" key={ticker.id}>
                            {ticker.body}
                        </div>
                    ))
                    }
                </Marquee>
            </div>
        )
    }
}
