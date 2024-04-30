import internetStreaming, { internetAccess } from "./internetAvailability.js";
import specialNotes, { movieSpecialNotes } from "./specialNotes.js";

var sozai = document.querySelector('.sozaiArea');
var submitButton = document.querySelector('.upperSubmitButton');

function submitButton1() {

  internetStreaming();
  specialNotes();

  // var upperSubmitButton = document.querySelector('.upperSubmitButton');
  submitButton.addEventListener('click', function () {
    sozai.innerHTML = `
      <p style="margin:0;">${internetAccess}</p>
      <p style="margin:0;">${movieSpecialNotes}</p>
     `;
  });
}

export default submitButton1;
