// //radio button asking whether internet distribution availability for whole edited movie

var internetAccess = '';

function internetStreaming() {

  var upperRadioButtonsInternet = document.querySelectorAll('input[type="radio"][name="internetStreaming"]');

  upperRadioButtonsInternet.forEach(function (upperRadioButtonInternet) {
    upperRadioButtonInternet.addEventListener('change', function () {
      internetAccess = this.value;
    });
  });
}

export default internetStreaming;
export { internetAccess }
