var movieSpecialNotes = '';

function specialNotes() {
  var specialNotes = document.querySelector('.specialNotes');

  specialNotes.addEventListener('change', function () {
    movieSpecialNotes = this.value;
  });
}

export default specialNotes;
export { movieSpecialNotes }
