/****************** VISIBILITY TOGGLE ******************/

let visible = false;

const visToggle = () => {
    visible = !visible;
    render();
}

const render = () => {
    const jsx = (
        <div>
            <button id="close-btn">&times;</button>
            <h1>hi</h1>
            <button onClick={visToggle}>{visible ? "Hide": "Show"}</button>
            {visible && 
            <div className="viz-box">
                <p>vizbox</p>
            </div>
            }
        </div>
    )
    ReactDOM.render(jsx, document.getElementById('app'))
}

render();