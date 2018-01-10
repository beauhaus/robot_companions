// Not sure if I'll use this

const SignUpModal = () => (
    <div id="simple-modal" className="modal">
        <div className="modal-content">
            <button className="unicodeBtn" id="close-btn">&times;</button>
            <p>Hello...I'm a modal</p>
        </div>
    </div>
)

const css for modal = styled.div`


/*********************** Onboarding Modal ***********************/
 
.true {
  background-color: rgb(50, 76, 97);
  color: greenyellow;
  /* border: 1px solid greenyellow; */
}
.false {
  background-color: #420505;
  color: #b8b8b8;
  border: 1px solid red;
}


.modal {
  /* display: none; */
  position: fixed;
  z-index: 30;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh; 
  overflow: auto; /*enables scrollbar if needed*/
  background-color: rgba(0,0,0, 0.3);
}
.modal-content {
  background-color: #6f6f6f;
  margin: 10% auto;
  padding: 20px;
  width: 80vw;
  height: 80vh;
  box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 5px 20px 0 rgba(0,0,0,0.2);
  animation: modalAppear 1s;
}
#close-btn {
  color: #ccc;
  float: right;
  margin: -2vh;
  font-size: 2em;
  background: transparent;
  border: 0;
}

button:hover, button:focus {
 /* cursor: pointer;
 transform: scale(1.6);
 transition: transform .2s; */
 /* box-shadow: 0 0 3px rgba(0,0,0,.75); */
}

#close-btn:hover, #close-btn:focus {
  color: brown;
}
  .button {
  background: coral;
  color: white;
  padding: 1em 2em;
  border: 0;
}
/* .button:hover {
  background: slateblue;
} */
.modal {
  display: none;
  position: fixed;
  z-index: 30;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh; /*100%*/
  overflow: auto; /*enables scrollbar if needed*/
  background-color: rgba(0,0,0, 0.3);
}
.modal-content {
  background-color: #6f6f6f;
  margin: 20% auto;
  padding: 20px;
  width: 80vw;
  height: 50vh;
  box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 5px 20px 0 rgba(0,0,0,0.2);
  animation: modalAppear 1s;
}
#close-btn {
  color: #ccc;
  float: right;
  margin: -2vh;
  font-size: 2em;
  background: transparent;
  border: 0;
}
/* button:hover, button:focus {
 cursor: pointer; 
} */
#close-btn:hover, #close-btn:focus {
  color: brown;
}

@keyframes modalAppear {
  0%{opacity: 0}
  100%{opacity: 1}
}
*/`