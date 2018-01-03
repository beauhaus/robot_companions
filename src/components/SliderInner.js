import React from 'react';
import SliderVid from './SliderVid';

class SliderInner extends React.Component {
    constructor(props) {
        super(props);
        this.incrementVid = this.incrementVid.bind(this);
        this.decrementVid = this.decrementVid.bind(this);
        this.state = {
            count: 0
        };
    }
    incrementVid() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    decrementVid() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    render() {
        const sliderVids = ["vid1", "vid2", "vid3", "vid4", "vid5", "vid6", "vid7", "vid8", "vid9", "vid10", "vid11", "vid12", "vid13", "vid14", "vid15"];
        return (
            <div>
                <button onClick={this.incrementVid} className="unicodeBtn" id="fwd-arrow">&gt;</button>
                <span className="range">Range: </span>
                <SliderVid sliderVids={sliderVids} />
                <button onClick={this.decrementVid} className="unicodeBtn" id="rwd-arrow">&lt;</button>
            </div>

        )
    }
}


export default SliderInner;