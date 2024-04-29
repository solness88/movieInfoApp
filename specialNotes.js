var movieSpecialNotes = '';
var checkSpecialNotesContainer = document.querySelector('#checkSpecialNotesContainer');
var checkSpecialNotes = document.querySelector('#checkSpecialNotes');

function specialNotes() {
  var specialNotes = document.querySelector('.specialNotes');

  specialNotes.addEventListener('change', function () {
    movieSpecialNotes = this.value;
  });

  checkSpecialNotes.addEventListener('click', function () {
    if (checkSpecialNotes.checked) {
      checkSpecialNotesContainer.style.display = "block";
    } else {
      checkSpecialNotesContainer.style.display = "none";
    }
  });

}

export default specialNotes;
export { movieSpecialNotes }
