var registerDateInput = document.querySelector('.registerDate');
var formattedDate = '';

function registerDay() {
  registerDateInput.addEventListener('change', function () {
    var registerDate = registerDateInput.value;
    var parts = registerDate.split("-");
    var year = parts[0];
    var month = parts[1];
    var day = parts[2];
    formattedDate = year + "年" + parseInt(month, 10) + "月" + parseInt(day, 10) + "日";
  });
}

export default registerDay;
export { formattedDate };
