var submissionDestinationValue = '国際';
var submissionDestination = document.querySelector('.submissionDestination');

function registerLocation() {
  submissionDestination.addEventListener('change', function () {
    submissionDestinationValue = this.value;
  });
}

export default registerLocation;
export { submissionDestinationValue }
