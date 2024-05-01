var movieDescriptionText = '';
var movieDescription = document.querySelector('.movieDescription');
var inputPromptText = document.querySelector('#inputPromptText');

function setMovieTitle() {
  //assign movie title text to variable
  movieDescription.addEventListener('change', function () {
    movieDescriptionText = this.value;

    // hide inputPromptText when the text is entered
    inputPromptText.style.display = 'none'; // 非表示

  });
}

export default setMovieTitle;
export { movieDescriptionText }
