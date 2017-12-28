// import {'render'} from ReactDom;
'use strict';

// var app = {
//     first: '',
//     last: '',
//     title: "Indecision",
//     subtitle: "Put your life in the hands of a computer",
//     options: []
// }


// var appRoot = document.getElementById('app');

// const numbers = [23,88, 20, 99];

// const onFormSubmit= (e) => {
//     e.preventDefault();

//     // const inputVal = e.target.elements.option.value;
//     const inputVallast = e.target.elements.last.value;
//     const inputValfirst = e.target.elements.first.value;
    
//     if (inputVallast|| inputValfirst) {
//         // app.title = inputVal;
//         app.last = inputVallast;
//         app.first = inputVallast;
//         // app.options.push(inputVal);
//         e.target.elements.first.value = '';
//         e.target.elements.last.value = '';
//         render();
//     }
// }
// const resetInputs = () => {
//     app.options = [];
//     render();
// }

// const render = () => {
//     const temp2 = (
//     <div id="simple-modal" className="modal">
//         <div className="modal-content">
//             <button id="close-btn">&times;</button>
//             <h1>{app.title}</h1> <span>first: {app.first}</span>
//             <h1>{app.subtitle}</h1><span>last: {app.last}</span>
//             {/* <p>x {app.options.length>0? `${app.options}` : "Please add options"}</p> */}
//             <h2>{app.title}</h2>
//             {/* <p>length: {app.options.length}</p> */}
//            <form onSubmit={onFormSubmit} action="">
//            first<input type="text" name="first"/>
//            last<input type="text" name="last"/>
//            <ol>{numbers.map((number, idx) => <li key={idx}>{number}</li>)}</ol>
           
//            <button>Add option</button>
//            <button onClick={resetInputs}>reset</button>
//            </form>
//         </div>
//     </div>)

// ReactDOM.render(temp2, appRoot);
// };
// render();
// /*********************** doosan exercise ***************/

var app = {
    first: '',
    last: '',
    email: '',
    zip: '',
    state: ''
}

var appRoot = document.getElementById('app');

const onFormSubmit= (e) => {
    e.preventDefault();
    const inputVallast = e.target.elements.last.value;
    const inputValfirst = e.target.elements.first.value;
    const inputValemail = e.target.elements.email.value;
    const inputValzip = e.target.elements.zip.value;
    const inputValstate = e.target.elements.state.value; 
    if (inputVallast|| inputValfirst) {
        app.last = inputVallast;
        app.first = inputValfirst;
        app.email = inputValemail;
        app.zip = inputValzip;
        app.state = inputValstate;
        e.target.elements.first.value = '';
        e.target.elements.last.value = '';
        e.target.elements.email.value = '';
        e.target.elements.zip.value = '';
        e.target.elements.state.value = '';
        render();
    }
}
const resetInputs = () => {
    app = {
        first: '',
        last: ''
    }
    render();
}

const render = () => {
    const temp2 = (
    <div id="simple-modal" className="modal">
        <div className="modal-content">
            <button id="close-btn">&times;</button>
            <h1>First Name: {app.first}</h1>
            <h1>Last Name: {app.last}</h1>
            <h1>email: {app.email}</h1>
            <h1>zip code: {app.zip}</h1>
            <h1>State: {app.state}</h1>
           <form onSubmit={onFormSubmit} action="">
           <em>enter first name: </em><input type="text" name="first"/><br />
           <em>enter last name: </em><input type="text" name="last"/><br />
           <em>enter email: </em><input type="text" name="email"/><br />
           <em>enter zip: </em><input type="text" name="zip"/><br />
           <em>enter State: </em><input type="text" name="state"/><br />
           <button>Add option</button>

           <button onClick={resetInputs}>reset</button>
           </form>
        </div>
    </div>)

ReactDOM.render(temp2, appRoot);
};
render();


// First name – characters only
// Last name – characters, hyphens and apostrophes only
// Email – valid email addresses
// Zip code – US zip validation
// US States – a drop down list of states
