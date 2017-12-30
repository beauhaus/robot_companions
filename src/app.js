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
const video_ended = () => {

}
class Hero extends React.Component {
    render() {
        return (
            <div className="hero-section">
                <div className="hero-overlay-text">OUR ROBOT COMPANIONS</div>
                <button id="watch-vid-btn">WATCH VIDEO</button>
                <video id="hero-bg-vid" autoPlay="" loop="" muted="" src="https://dl.dropbox.com/s/ln84nmt3ty2zy2v/lipstickrobot.mp4?dl=0"
                    type="video/mp4" onEnded={video_ended}>
                </video>
            </div>
        )
    }
}
class CarouselInner extends React.Component {
    render() {
        return (
            <div className="carousel-inner-container">
                <section id="video-1" className="vid-container desk-vid-1">vid1</section>
                <section id="video-2" className="vid-container desk-vid-2">vid2</section>
                <section id="video-3" className="vid-container desk-vid-3">vid3</section>
                <section id="video-4" className="vid-container desk-vid-4">vid4</section>
                { /*<section id="video-5" className="vid-container"></section>
            <section id="video-6" className="vid-container"></section>
            <section id="video-7" className="vid-container"></section>
            <section id="video-8" className="vid-container"></section>
            <section id="video-9" className="vid-container"></section>
            <section id="video-10" className="vid-container"></section>
            <section id="video-11" className="vid-container"></section>
            <section id="video-12" className="vid-container"></section>
            <section id="video-13" className="vid-container"></section>
            <section id="video-14" className="vid-container"></section>
            <section id="video-15" className="vid-container"></section>
            <section id="video-16" className="vid-container"></section>
            <section id="video-17" className="vid-container"></section>
            <section id="video-18" className="vid-container"></section>
            <section id="video-19" className="vid-container"></section>
            <section id="video-20" className="vid-container"></section>
            <section id="video-21" className="vid-container"></section>
            <section id="video-22" className="vid-container"></section>
            <section id="video-23" className="vid-container"></section>
        <section id="video-24" className="vid-container"></section>   */}
            </div>

        )
    }
}
class Carousel extends React.Component {
    render() {
        return (
            <div className="carousel">
                <span id="fwd-arrow">{">"}</span>
                <CarouselInner />
                <span id="rwd-arrow"> {"<"} </span>
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
                    <button id="close-btn">&times;</button>
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


