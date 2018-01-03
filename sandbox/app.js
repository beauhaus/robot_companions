
const RightLinks = () => (<ul className="header-right-links">
    <li>
        <a href="#">OUR PARTNERSHIP</a>
    </li>
    <li>
        <a href="#">OUR PROFILE</a>
    </li>
</ul>
)

const Nav = () => (
    <nav>
        <div className="inner-nav-grid-container">
            <img id="header-left-icon" src="img/top-left-header-icon.svg" alt="brand-icon" />
            <RightLinks />
        </div>
    </nav>
)

class HeroVid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoURL: 'https://dl.dropbox.com/s/ln84nmt3ty2zy2v/lipstickrobot.mp4?dl=0'
        }
    }

    render() {
        return (
            <video id="hero-bg-vid" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        )
    }
}

const Hero = () => (
    <div className="hero-section">
        <div className="hero-overlay-text">OUR ROBOT COMPANIONS</div>
        <button id="watch-vid-btn">WATCH VIDEO</button>
        <HeroVid />
    </div>
)

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

class Slider extends React.Component {
    render() {
        return (
            <div className="slider">
                <SliderInner />
            </div>
        )
    }
}

const Partnership = () => (
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

const Groups = () => (
    <div className="groups">
        <p>groups</p>
    </div>
)

const Profile = () => (
    <div className="profile">
        <p>profile</p>
    </div>
)

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
// {/***************** ONBOARDING MODAL DEPRECATE **************** */}
// <button id="modal-btn" className="button">click here</button>
// <SignUpModal />


const Footer = () => (
    <div>
        <footer>
        <p>A Fine space for a footer</p>
        </footer>
    </div>

)


class RobotCompanions extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Hero />
                <Slider />
                <Partnership />
                <Groups />
                <Profile />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<RobotCompanions />, document.getElementById('app'))


<script>
!(function () {
//   var modal = document.getElementById('simple-modal');
//   var modalBtn = document.getElementById('modal-btn');
//   var closeBtn = document.getElementById('close-btn');


//   function openModal() {
//     modal.style.display = "block";
//   }
//   function closeModal() {
//     console.log("close clicked");
//     modal.style.display = "none";
//   }

//   modalBtn.addEventListener('click', openModal);
//   // closeBtn.addEventListener('click', closeModal);

// //   // listen for outside click
//   window.addEventListener('click', outsideClick);
//   function outsideClick(evt) {
//     if (evt.target === modal) {
//       modal.style.display = "none";
//     }
//   }
})()
</script>