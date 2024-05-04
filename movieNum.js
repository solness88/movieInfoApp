var movieNumber = '';

function movieNum() {
  var movieNum = document.querySelector('.movieNum');

  movieNum.addEventListener('change', function () {
    movieNumber = this.value;
  });
}

export default movieNum;
export { movieNumber };
