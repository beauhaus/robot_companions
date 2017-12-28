!(function() {
    var modal = document.getElementById('simple-modal');
    var modalBtn = document.getElementById('modal-btn');
    var closeBtn = document.getElementById('close-btn');
      
      
    function openModal() {
      modal.style.display = "block";
    }
      function closeModal() {
      console.log("close clicked");
      modal.style.display = "none";
    }
    modalBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    
    // listen for outside click
      window.addEventListener('click', outsideClick);
      function outsideClick(evt) {
        if(evt.target === modal) {
          modal.style.display = "none";
        }
      }
    })()