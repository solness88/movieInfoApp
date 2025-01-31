document.addEventListener('DOMContentLoaded', function () {

  //1. input prompt text
  var inputPromptText = document.querySelector('#inputPromptText');

  //2. internet distribution of the whole movie
  var sozai = document.querySelector('.sozaiArea');
  var expireDateArea = document.querySelector('.expireDateArea');

  var expirationDateInput = document.querySelector('.expirationDate');
  var expireDateFormatted = '';
  
  var generalExpireDate = '';
  var generalExpireDateNotice = document.getElementById('generalExpireDate');

  //3. movie special notes text
  var checkSpecialNotesContainer = document.querySelector('#checkSpecialNotesContainer');
  var movieSpecialNotes = '';
  var specialNotes = document.querySelector('.specialNotes');
  var checkSpecialNotes = document.querySelector('#checkSpecialNotes');

  //4. pink submit button of the whole movie info, located upperside
  var upperSubmitButton = document.querySelector('.upperSubmitButton');

  //. movie title
  var movieDescriptionText = '';
  var movieDescription = document.querySelector('.movieDescription');

  //5. register date, formatted date
  var registerDateInput = document.querySelector('.registerDate');
  var formattedDate = '';

  //6. submission destination
  var submissionDestinationValue = '国際';
  var submissionDestination = document.querySelector('.submissionDestination');

  //movie number variables
  var movieNumber = '';
  var movieNum = document.querySelector('.movieNum');

  //7. submit button
  var submitButton = document.querySelector('.submitButton');

  //8. copyright variables
  var copyRight = '';
  var copyRightInput = document.querySelector("#copyrightInput");

  //usagePerioinCopyRight
  var usagePeriod = '';
  var usagePeriodNotice = document.getElementById('usePeriodNotice');

  //third party valuables
  var thirdPartyValue = '';
  var thirdParty = document.querySelector(".thirdPartySelection");
  var thirdPartySelection = document.querySelector('.thirdPartyAlt');
  var thirdPartyInput = document.querySelector('#thirdPartyInput');

  var counter = 1;

  var arrivalDateValue = '';
  var arrivalDateToProcess = '';

  var expirationDate = '';

  // create new div element
  var newDiv = document.createElement("div");
  newDiv.className = "eachSozai" + counter;

  var eachMovieInfo = document.querySelector(".eachMovieInfo");
  eachMovieInfo.appendChild(newDiv);

  // variables for selectAllButton
  var selectAllButton = document.querySelector('.selectAllButton');
  var displayArea = document.querySelector('#movieInfo');

  // variables for expireDate, default value is "none"
  var expireDate = '';
  var upperRadioButtonsInternet = document.querySelectorAll('input[type="radio"][name="upperRadioButtonsInternet"]');
  var internetAccess = '全編インターネットＯＫ';

  // //radio button asking whether internet distribution availability for whole edited movie
  upperRadioButtonsInternet.forEach(function (upperRadioButtonInternet) {
    upperRadioButtonInternet.addEventListener('change', function () {
      internetAccess = this.value;
    });
  });

  //expiration date
  // expirationDateInput.addEventListener('change', function () {
  //   var expirationDate = expirationDateInput.value;
  //   var expireParts = expirationDate.split("-");
  //   var expireYear = expireParts[0];
  //   var expireMonth = expireParts[1];
  //   var expireDay = expireParts[2];
  //   expireDateFormatted = expireYear + "年" + parseInt(expireMonth, 10) + "月" + parseInt(expireDay, 10) + "日";
  // });

  function nearestExpireDate(){
    
    // if(arrivalDateToProcess){
      if(expirationDate == '' || expirationDate > arrivalDateToProcess){
        expirationDate = arrivalDateToProcess;

        if(expirationDate){
        // get input data of arrival date, assign to the variable
        var year = expirationDate.getFullYear();

        //Add 1 because "month" starts with 0
        var month = expirationDate.getMonth() + 1;
        var day = expirationDate.getDate();
        generalExpireDate = year + "年" + parseInt(month, 10) + "月" + parseInt(day, 10) + "日";
        }
      }
    // }else{
    //   generalExpireDate = '';
    // }
  };

  specialNotes.addEventListener('change', function () {
    movieSpecialNotes = this.value;
  });

  checkSpecialNotes.addEventListener('click', function () {
    if (checkSpecialNotes.checked) {
      checkSpecialNotesContainer.style.display = "block";
    } else {
      checkSpecialNotesContainer.style.display = "none";
      movieSpecialNotes = '';
      specialNotes.value = '';
    }
  });

  // var upperSubmitButton = document.querySelector('.upperSubmitButton');
  upperSubmitButton.addEventListener('click', function () {
    sozai.innerHTML = `
      ${expireDateFormatted ? `<span style="display:inline; margin:0;font-family: sans-serif; font-size:1em;">${expireDateFormatted}以降使用禁止</span>` : ''}
      <span style="display:block;margin:0;">${internetAccess}</span>


      <span style="display:block;margin:0;">${movieSpecialNotes}</span>
     `;
  });

  //assign movie title text to variable
  movieDescription.addEventListener('change', function () {
    movieDescriptionText = this.value;

    // hide inputPromptText when the text is entered
    // inputPromptText.style.display = 'none'; // 非表示

  });

  submissionDestination.addEventListener('change', function () {
    submissionDestinationValue = this.value;
  });

  //movie register date
  registerDateInput.addEventListener('change', function () {
    var registerDate = registerDateInput.value;
    var parts = registerDate.split("-");
    var year = parts[0];
    var month = parts[1];
    var day = parts[2];
    formattedDate = year + "年" + parseInt(month, 10) + "月" + parseInt(day, 10) + "日";
  });

  //////////////////////////
  //create register number//
  //////////////////////////

  movieNum.addEventListener('change', function () {
    movieNumber = this.value;
  });

  var submissionNumValue = '';
  var inputElement = document.querySelector('#submissionNumInput');
  var selectElement = document.querySelector('#submissionNum');
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

  // 
  inputElement.addEventListener('click', function () {
    inputElement.value = '';
    submissionNumValue = '';
  });

  inputElement.addEventListener('mousedown', function () {
    inputElement.value = '';
    submissionNumValue = '';
  });

  /////////////////////////////////////////////////////////////////
  //display 3rd party's alternatives when "3rd party" is selected//
  /////////////////////////////////////////////////////////////////
  var arrivalDateContainer = document.querySelector(".arrivalDateContainer");

  function handleCopyRightInput() {
    if (this.value == "RTV第三者素材" ||
      this.value == "AP第三者素材" ||
      copyRight == "RTV第三者素材" ||
      copyRight == "AP第三者素材") {
      thirdParty.style.display = "flex";
      arrivalDateContainer.style.display = "block";
    } else if (this.value == "RTV" ||
      this.value == "AP" ||
      this.value == "CCTV" ||
      copyRight == "RTV" ||
      copyRight == "AP" ||
      copyRight == "CCTV") {
      arrivalDateContainer.style.display = "block";

      thirdParty.style.display = "none";
      thirdPartyInput.value = '';
      thirdPartyValue = '';

    } else {
      thirdParty.style.display = "none";
      arrivalDateContainer.style.display = "none";

      //clear third party variable and input text
      thirdPartyInput.value = '';
      thirdPartyValue = '';

      //clear format date and selected day
      expireDate = '';
      arrivalDateContainer.value = '';
      arrivalDate.value = '';
      arrivalDateValue = '';
      //arrivalDateToProcess = '';
    }

    if (this.value == undefined) {
      return copyRight;
    } else {
      copyRight = this.value;
      return copyRight;
    }
    manipulateArrivalDate();


  }

  copyRightInput.addEventListener("input", handleCopyRightInput);
  copyRightInput.addEventListener("change", manipulateArrivalDate);

//   copyRightInput.addEventListener('change', function() {
//     const selectedValue = this.value;
//     document.getElementById('usePeriodNotice').textContent = selectedValue;
// });

function useagePeriodNotice(){
  if (this.value == "RTV"){
    usagePeriod = "RTV:配信から366日";
    usagePeriodNotice.style.color = 'darkblue';
  }else if(this.value == "AP"){
    usagePeriod = "AP:配信から45日";
    usagePeriodNotice.style.color = 'brown';
  }else if(this.value == "RTV第三者素材"){
    usagePeriod = "RTV第三者:配信から30日";
    usagePeriodNotice.style.color = 'DarkMagenta';
  }else if(this.value == "AP第三者素材"){
    usagePeriod = "AP第三者:配信から30日"
    usagePeriodNotice.style.color = 'green';
  }else{
    usagePeriod = ""
  }
  // const selectedValue = this.value;
  // document.getElementById('usePeriodNotice').textContent = usagePeriod;
  usagePeriodNotice.textContent = usagePeriod;
}

copyRightInput.addEventListener("input", useagePeriodNotice);
copyRightInput.addEventListener("change", useagePeriodNotice);

  thirdPartyInput.addEventListener('input', function () {
    thirdPartyValue = this.value;
  });

  // clear data when copyrignt input is clicked
  copyRightInput.addEventListener('click', function () {
    copyRightInput.value = '';
    copyRight = '';
  });

  // clear data when copyrignt input is clicked
  copyRightInput.addEventListener('mousedown', function () {
    copyRightInput.value = '';
    copyRight = '';
  });

  // clear data when 3rd party input is clicked
  thirdPartyInput.addEventListener('click', function () {
    thirdPartyInput.value = '';
    thirdPartyValue = '';
  });

  // clear data when 3rd party input is clicked
  thirdPartyInput.addEventListener('mousedown', function () {
    thirdPartyInput.value = '';
    thirdPartyValue = '';
  });

  ////////////////////////
  //format arrival date//
  ////////////////////////

  // add event listener when the button is clicked
  function manipulateArrivalDate() {
    copyRight = handleCopyRightInput();

    // var arrivalDateToProcess = '';

    //
    if (document.querySelector('.arrivalDate').value) {
      arrivalDateToProcess = new Date(document.querySelector('.arrivalDate').value);

      var arrivalYear = arrivalDateToProcess.getFullYear();

      //Add 1 because "month" starts with 0
      var arrivalMonth = arrivalDateToProcess.getMonth() + 1;
      var arrivalDay = arrivalDateToProcess.getDate();

      // format variable
      if (copyRight == "RTV第三者素材" || copyRight == "AP第三者素材" || copyRight == "RTV" || copyRight == "AP") {
        arrivalDateValue = arrivalYear + "年" + parseInt(arrivalMonth, 10) + "月" + parseInt(arrivalDay, 10) + "日";
      } else {
        arrivalDateValue = "";
      }

      if (copyRight == "RTV第三者素材" || copyRight == "AP第三者素材") {
        arrivalDateToProcess.setDate(arrivalDateToProcess.getDate() + 29);
      } else if (copyRight == "RTV") {
        arrivalDateToProcess.setDate(arrivalDateToProcess.getDate() + 364);
      } else if (copyRight == "AP") {
        arrivalDateToProcess.setDate(arrivalDateToProcess.getDate() + 44);
      }

      // get input data of arrival date, assign to the variable
      var year = arrivalDateToProcess.getFullYear();

      //Add 1 because "month" starts with 0
      var month = arrivalDateToProcess.getMonth() + 1;
      var day = arrivalDateToProcess.getDate();

      // format into desiable date
      if (copyRight == "RTV第三者素材" || copyRight == "AP第三者素材" || copyRight == "RTV" || copyRight == "AP") {
        expireDate = year + "年" + parseInt(month, 10) + "月" + parseInt(day, 10) + "日";
      } else {
        expireDate = "";
      }
    }
  }

  arrivalDateContainer.addEventListener('change', manipulateArrivalDate);
  // arrivalDateContainer.addEventListener('change', nearestExpireDate);arrivalDateToProcess

  ///////////////////////////////////////////////////////
  //Check whether "must courtesy" or not for each movie//
  ///////////////////////////////////////////////////////
  var credit = '';
  var eachRadioButtons = document.querySelectorAll('input[type="radio"][name="askCourtesy"]');
  eachRadioButtons.forEach(function (radioButton) {
    radioButton.addEventListener('change', function () {
      credit = this.value;
    });
  });

  ///////////////
  //credit text//
  ///////////////
  var creditInputContainer = document.querySelector('.creditTextContainer');
  var radioButtons = document.querySelectorAll('input[type="radio"][name="askCourtesy"]');
  var creditText;

  // check for changes of radio button field and display/hide credit text input field
  radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener('change', function () {
      // Show the courtesy input field if "must courtesy" is selected
      if (this.value === "※要クレジット") {
        creditInputContainer.style.display = "flex";
      } else {
        // hide otherwise
        creditInputContainer.style.display = "none";
        document.querySelector('#creditText').value = '';
        creditText = '';
      }
    });
  });

  // get creditText field
  var creditInputElement = document.querySelector('#creditText');
  creditInputElement.addEventListener('change', function () {
    creditText = this.value;
  });

  var radioButtonsInternet = document.querySelectorAll('input[type="radio"][name="eachMovieInternet"]');
  var internetAvailability = '';

  radioButtonsInternet.forEach(function (radioButtonInternet) {
    radioButtonInternet.addEventListener('change', function () {
      internetAvailability = this.value;
    });
  });

  ///////////////////////////////////////////////////////////////
  //Special notes for each movie//
  ///////////////////////////////////////////////////////////////
  //assign each movie's special notes text to variable
  var checkEachMovieCaution = document.querySelector('#checkEachMovieCaution');
  var eachMovieCautionVariable = '';
  var eachMovieCaution = document.querySelector('.eachMovieCaution');
  var eachMovieCautionContainer = document.querySelector('#eachMovieCautionContainer');

  eachMovieCaution.addEventListener('change', function () {
    eachMovieCautionVariable = this.value;
  });

  checkEachMovieCaution.addEventListener('click', function () {
    if (checkEachMovieCaution.checked) {
      eachMovieCautionContainer.style.display = "block";
    } else {
      eachMovieCautionContainer.style.display = "none";
      eachMovieCautionVariable = '';
      eachMovieCaution.value = '';
    }
  });

  /////////////////////
  //Clear input field//
  /////////////////////
  var eachSozaiArea = document.querySelector('.eachSozai1');
  var arrivalDate = document.querySelector('.arrivalDate');

  var confirmClearButton = document.querySelector(".confirmClearButton");
  confirmClearButton.addEventListener('click', function () {


    //clear movie description text
    movieDescriptionText = '';
    movieDescription.value = '';

    //clear usage period text
    usagePeriod = '';
    usagePeriodNotice.textContent = '';

    //clear submission date
    formattedDate = '';
    registerDateInput.value = '';

    //clear submission destination value to "国際"
    submissionDestinationValue = '国際';
    submissionDestination.value = '国際';

    //clear movie number
    movieNumber = '';
    movieNum.value = '';

    //clear submission number
    submissionNumValue = '';
    submissionNumInput.value = '';

    //clear copy right field
    copyRight = '';
    copyRightInput.value = '';

    //clear 3rd party field
    thirdPartyValue = '';
    thirdPartyInput.value = '';
    thirdParty.style.display = "none";

    //clear "must courtesy" radio button field
    credit = '';
    document.querySelector('#noCredit').checked = true;
    creditText = '';
    creditInputContainer.style.display = "none";
    creditInputElement.value = '';

    //clear "internet availability for each movie" radio button field
    document.querySelector('#internetOK').checked = true;
    internetAvailability = '';

    //clear arrivel date value
    arrivalDateValue = '';
    arrivalDate.value = '';

    //clear expire date value
    expireDate = '';

    //clear arrival date value
    arrivalDateContainer.value = '';
    arrivalDateContainer.style.display = 'none';

    // display inputPromptText on the left side when the text is entered
    inputPromptText.style.display = 'inline';

    checkEachMovieCaution.checked = false;
    eachMovieCautionContainer.style.display = 'none';
    eachMovieCaution.value = '';
    eachMovieCautionVariable = '';

    counter++;

    // get element with "eachSozai+ counter" class
    var eachSozaiElement = document.querySelector('.eachSozai' + (counter - 1));

    var paragraphs = eachSozaiElement.querySelectorAll('span');

    // change the color of existing text to red
    paragraphs.forEach(function (paragraph) {
      paragraph.style.color = 'red';
    });

    // Create element using JS and set new class for it
    var newDiv = document.createElement('div');
    newDiv.classList.add('eachSozai' + counter);

    // append new div element
    document.querySelector('#movieInfo').appendChild(newDiv);

    newDiv.scrollIntoView({ behavior: 'smooth' });

    //set the new div element to the variable "eachSozaiArea" 
    eachSozaiArea = document.querySelector('.eachSozai' + counter);
    nearestExpireDate();


    expireDateArea.innerHTML = `
      ${generalExpireDate ? `<span style="display:inline; margin:0;font-family: sans-serif; font-size:1em;">${generalExpireDate}以降使用禁止</span>` : '使用期限なし'}
    `
  });

  //////////////////////////////////////////////////////////////////
  //Gather variables of each section and display on the right side//
  //////////////////////////////////////////////////////////////////

  submitButton.addEventListener('click', function () {
    
    eachSozaiArea.innerHTML = `
      <br>
      <span style="margin:0; display:block;font-family: sans-serif; font-size:1em;" >■${movieDescriptionText}</span>



      <div>
        <span style="display:inline; margin:0;font-family: sans-serif; font-size:1em;">${formattedDate}</span><span style="display:inline; margin:0;font-family: sans-serif; font-size:1em;">${submissionDestinationValue}</span><span style="display:inline; margin:0;font-family: sans-serif; font-size:1em;">${submissionNumValue}</span>
      </div>
      ${movieNumber ? `<span style="display:block; margin:0;font-family: sans-serif; font-size:1em;">素材番号:${movieNumber}</span>` : ''}

      <span style="display:inline; margin:0;font-family: sans-serif; font-size:1em;">${copyRight}</span>
      ${thirdPartyValue ? `<span style="margin:0;font-family: sans-serif; font-size:1em;">(${thirdPartyValue})</span>` : ''}

      ${arrivalDateValue ? `<span style="display:block;margin:0;font-family: sans-serif; font-size:1em;">配信日:${arrivalDateValue}</span>` : ''}
      <span style="display:inline;margin:0;font-family: sans-serif; font-size:1em;">${expireDate ? `使用期限:${expireDate}` : ''}</span>

      <span style="display:block;">${credit ? `<span style="display:inline; margin:0;font-family: sans-serif; font-size:1em;">${credit}</span>` : ''}${creditText ? `<span style="display:inline; margin:0;font-family: sans-serif; font-size:1em;">「${creditText}」</span>` : ''}</span>
      ${internetAvailability ? `<span style="display:block; margin:0;font-family: sans-serif; font-size:1em;">※${internetAvailability}</span>` : ''}

      ${eachMovieCautionVariable ? `<span style="display:block;margin:0;font-family: sans-serif; font-size:1em;">※${eachMovieCautionVariable}</span>` : ''}
      
  `;
  
  eachSozaiArea.scrollIntoView({ 
    behavior: 'smooth',
    block: 'end'
  });


  });

  //function for select all button
  selectAllButton.addEventListener('click', function () {
    var range = document.createRange();
    range.selectNodeContents(displayArea);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    // copy texts on the right side
    document.execCommand('copy');

    //show alert window after 0.3 seconds
    setTimeout(function () {

      // show alert window
      alert('テキストがコピーされました！');
    }, 300);
  });
});