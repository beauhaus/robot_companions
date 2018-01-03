import React from 'react';
class SliderVid extends React.Component {
    render() {
        return (
            <div className="slider-inner-container">
                {this.props.sliderVids.filter((item, idx) => idx <= 3)
                    .map(item => <section className="vid-container" key={item}>
                        <img src={`./img/slider-${item}.png`} alt={`slider-${item}`} />
                    </section>)}
            </div>
        )
    }
}
export default SliderVid;