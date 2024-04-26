// //radio button asking whether internet distribution availability for whole edited movie

var internetAccess = '';

function upperRadioButtonsInternetAccess() {

  var upperRadioButtonsInternet = document.querySelectorAll('input[type="radio"][name="upperRadioButtonsInternet"]');

  upperRadioButtonsInternet.forEach(function (upperRadioButtonInternet) {
    upperRadioButtonInternet.addEventListener('change', function () {
      internetAccess = this.value;
    });
  });
}

export default upperRadioButtonsInternetAccess;
export { internetAccess }
