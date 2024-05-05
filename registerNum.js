var submissionNumValue = '';
var inputElement = document.querySelector('#submissionNumInput');
var selectElement = document.querySelector('#submissionNum');

function registerNumber() {
  for (var i = 1; i <= 300; i++) {
    var optionElement = document.createElement('option');
    optionElement.value = i.toString();
    optionElement.textContent = i.toString();
    selectElement.appendChild(optionElement);
  }

  inputElement.addEventListener('input', function () {

    // get the selected number and assign it to submissionNumValue
    submissionNumValue = this.value;
  });

  inputElement.addEventListener('click', function () {
    inputElement.value = '';
    submissionNumValue = '';
  });

  inputElement.addEventListener('mousedown', function () {
    inputElement.value = '';
    submissionNumValue = '';
  });




};

export default registerNumber;
export { submissionNumValue };
