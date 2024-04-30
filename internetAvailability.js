//radio button asking whether internet distribution availability for whole edited movie

var internetAccess = '';

function internetStreaming() {

  var internetAvailability = document.querySelectorAll('input[type="radio"][name="internetStreaming"]');

  internetAvailability.forEach(function (e) {
    e.addEventListener('change', function () {
      internetAccess = this.value;
    });
  });
}

export default internetStreaming;
export { internetAccess }
