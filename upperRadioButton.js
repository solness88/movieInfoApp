
var internetAccess = '';

function upperRadioButton() {
  var upperRadioButtonsInternet = document.querySelectorAll('input[type="radio"][name="upperRadioButtonsInternet"]');

  //radio button asking whether internet distribution availability for whole edited movie
  upperRadioButtonsInternet.forEach(function (upperRadioButtonInternet) {
    upperRadioButtonInternet.addEventListener('change', function () {
      internetAccess = this.value;
    })
  });

  return internetAccess;
}
