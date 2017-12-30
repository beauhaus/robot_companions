'use strict';

/*********************** doosan Modal exercise ***************/
const prompt = {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    zip: "Zip Code",
    state: "State"
};


var appRoot = document.getElementById('app');

// Placed in succession
const placeholderTextArr = ["First Name", "Last Name", "Email Address", "Zip Code", "State"];

const userSubmits = []; // to be pushed in order of prompting: (first, last, email, etc)...
var count = 0;
const onFormSubmit = (e) => {
    e.preventDefault();
    const dynamicInput = e.target.elements.dynamicPrompt.value;
    console.log("b4if count: ", count);
    if (dynamicInput && count < placeholderTextArr.length - 1) { // checks if placholder txt has been changed (entered).
        count++;


        userSubmits.push(dynamicInput);
        e.target.elements.dynamicPrompt.value = '';
        render();
    }
}

const resetInputs = () => {
    // userSubmits = [];
    render();
}

const render = () => {
    const temp2 = (

        <div>
            <div id="simple-modal" className="modal">
                <div className="modal-content">
                    {/* <button id="close-btn">&times;</button> */}
                    <button type="button" id="close-btn" aria-label="close">X</button>
                    {userSubmits.map(item =>
                        <li key={item}>{item}</li>)
                    }
                    <form onSubmit={onFormSubmit}>
                        {/* count: {count} placetxt: {placeholderTextArr.length} */}
                        {count < placeholderTextArr.length - 1 ? <input type="text" placeholder={placeholderTextArr[count]} name="dynamicPrompt" /> :
                            <section className="viz-box">
                                <p>PickAState!</p>
                            </section>
                        }<br />
                        {/* <button onClick={resetInputs}>reset</button> */}
                    </form>
                </div>
            </div>
        </div>
    )

    ReactDOM.render(temp2, appRoot);
};
render();


// First name – characters only
// Last name – characters, hyphens and apostrophes only
// Email – valid email addresses
// Zip code – US zip validation
// US States – a drop down list of states




/****************** VISIBILITY TOGGLE ******************/

// let visible = false;

// const visToggle = () => {
//     visible = !visible;
//     render();
// }

// const render = () => {
//     const jsx = (
//         <div>
//             <button id="close-btn">&times;</button>
//             <h1>hi</h1>
//             <button onClick={visToggle}>{visible ? "Hide": "Show"}</button>
//             {visible && 
//             <div className="viz-box">
//                 <p>vizbox</p>
//             </div>
//             }
//         </div>
//     )
//     ReactDOM.render(jsx, document.getElementById('app'))
// }

// render();


/****************** VISIBILITY TOGGLE ******************/

// let visible = false;

// const visToggle = () => {
//     visible = !visible;
//     render();
// }

// const render = () => {
//     const jsx = (
//         <div>
//             <button id="close-btn">&times;</button>
//             <h1>hi</h1>
//             <button onClick={visToggle}>{visible ? "Hide": "Show"}</button>
//             {visible && 
//             <div className="viz-box">
//                 <p>vizbox</p>
//             </div>
//             }
//         </div>
//     )
//     ReactDOM.render(jsx, document.getElementById('app'))
// }

// render();


// or... 
