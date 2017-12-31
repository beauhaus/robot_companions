/*



*/

class RightLinks extends React.Component {
    render() {
        return (
            <ul className="header-right-links">
                <li>
                    <a href="#">OUR PARTNERSHIP</a>
                </li>
                <li>
                    <a href="#">OUR PROFILE</a>
                </li>
            </ul>
        )
    }
}

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <div className="inner-nav-grid-container">
                    <img id="header-left-icon" src="img/top-left-header-icon.svg" alt="brand-icon" />
                    <RightLinks />
                </div>
            </nav>
        )
    }
}

class HeroVid extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://dl.dropbox.com/s/ln84nmt3ty2zy2v/lipstickrobot.mp4?dl=0'
        }
    }

    render () {
        return (
            <video id="hero-bg-vid" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        )
    }
}

class Hero extends React.Component {
    render() {
        return (
            <div className="hero-section">
                <div className="hero-overlay-text">OUR ROBOT COMPANIONS</div>
                <button id="watch-vid-btn">WATCH VIDEO</button>
                <HeroVid/>
            </div>
        )
    }
}
class CarVid extends React.Component {
    render() {
        return (
            <div className="carousel-inner-container">
                {this.props.carvids.filter((item, idx) => idx <= 3).map(item => <section className="vid-container" key={item}>{item}</section>)}
            </div>
        )
    }
}

class CarouselInner extends React.Component {
    render() {
        const carvids = ["vid1", "vid2", "vid3", "vid4", "vid5", "vid6", "vid7", "vid8", "vid9", "vid10", "vid11", "vid12", "vid13", "vid14", "vid15"];
        return (
            <div>
                <button className="unicodeBtn" id="fwd-arrow">&gt;</button>
                     <CarVid carvids={carvids} />
                <button className="unicodeBtn" id="rwd-arrow">&lt;</button>
            </div>

        )
    }
}
class Carousel extends React.Component {
    render() {
        return (
            <div className="carousel">
                <CarouselInner />
            </div>
        )
    }
}

class Partnership extends React.Component {
    render() {
        return (
            <div className="partnership">
                <article className="partnership-inner-grid">
                    <section>
                        <h1>HEADLINE</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus tempora, officiis a sit nulla
                    harum reprehenderit ipsa assumenda ratione nobis laborum, consectetur temporibus quos, sint rerum dolore
                    neque error.</p>
                    </section>
                </article>
            </div>
        )
    }
}

class Groups extends React.Component {
    render() {
        return (
            <div className="groups">
                <p>groups</p>
            </div>
        )
    }
}
class Profile extends React.Component {
    render() {
        return (
            <div className="profile">
                <p>profile</p>
            </div>
        )
    }
}

class SignUpModal extends React.Component {
    render() {
        return (
            <div id="simple-modal" className="modal">
                <div className="modal-content">
                    <button className="unicodeBtn" id="close-btn">&times;</button>
                    <p>Hello...I'm a modal</p>
                </div>
            </div>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer>


                    {/***************** ONBOARDING MODAL **************** */}
                    <button id="modal-btn" className="button">click here</button>

                    <SignUpModal />

                </footer>
            </div>

        )
    }
}


class JSX extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Hero />
                <Carousel />
                <Partnership />
                <Groups />
                <Profile />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<JSX />, document.getElementById('app'))


