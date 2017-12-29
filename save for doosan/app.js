'use strict';
// NB: This works with a few errors... It runs endlessly. --No Bueno

// /*********************** doosan exercise ***************/
const prompt = {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    zip: "Zip Code",
    state: "State"
};

var appRoot = document.getElementById('app');

// to be placed in succession

const placeholderTextArr = ["First Name","Last Name","Email Address","Zip Code","State"]; 

const userSubmits = []; // to be pushed in order of prompting: (first, last, email, etc)...
var count = 0;
const onFormSubmit= (e) => {
    e.preventDefault();
    const dynamicInput = e.target.elements.dynamicPrompt.value;
    
    if (dynamicInput) { // checks if placholder txt has been changed.
        count++;
        userSubmits.push(dynamicInput);

        e.target.elements.dynamicPrompt.value = '';
        render();
        return count;
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
            {userSubmits.map(item => <li key={item}>{item}</li>)}
           <form onSubmit={onFormSubmit}>
           <input type="text" placeholder={placeholderTextArr[count]} name="dynamicPrompt"/><br />
           <button >Add option</button>

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

 