var internetAccess = '';

function upperRadioButton() {
  var upperRadioButtonsInternet = document.querySelectorAll('input[type="radio"][name="upperRadioButtonsInternet"]');

  //radio button asking whether internet distribution availability for whole edited movie
  for (var i = 0; i < upperRadioButtonsInternet.length; i++) {
    upperRadioButtonsInternet[i].addEventListener('change', function () {
      internetAccess = this.value; // internetAccessの値を更新
    });
  }

  return internetAccess;
}
