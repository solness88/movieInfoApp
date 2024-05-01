

function submitButton2() {

  submitButton.addEventListener('click', function () {
    eachSozaiArea.innerHTML = `
    <br>
    <p style="margin:0; display:block;font-family: sans-serif; font-size:1em;" >◾️${movieDescriptionText}</p>
    <p style="display:inline; margin:0;font-family: sans-serif; font-size:1em;">${formattedDate}</p>

    <p style="display:inline; margin:0;font-family: sans-serif; font-size:1em;">${submissionDestinationValue}</p>
    <p style="display:inline; margin:0;font-family: sans-serif; font-size:1em;">${submissionNumValue}</p>

    ${movieNumber ? `<p style="margin:0;font-family: sans-serif; font-size:1em;">素材番号:${movieNumber}</p>` : ''}

    <div>
        <p style="display:inline; margin:0;font-family: sans-serif; font-size:1em;">${copyRight}</p>
        ${thirdPartyValue ? `<p style="display:inline; margin:0;font-family: sans-serif; font-size:1em;">(${thirdPartyValue})</p>` : ''}
    </div>

    <div>
        ${credit ? `<p style="display:inline; margin:0;font-family: sans-serif; font-size:1em;">${credit}</p>` : ''}

        ${creditText ? `<p style="display:inline; margin:0;font-family: sans-serif; font-size:1em;">(${creditText})</p>` : ''}
    </div>

    ${arrivalDateValue ? `<p style="margin:0;font-family: sans-serif; font-size:1em;">配信日:${arrivalDateValue}</p>` : ''}

    ${expireDate ? `<p style="margin:0;font-family: sans-serif; font-size:1em;">使用期限:${expireDate}</p>` : ''}


    ${internetAvailability ? `<p style="display:inline; margin:0;font-family: sans-serif; font-size:1em;">${internetAvailability}</p>` : ''}

    ${eachMovieCautionVariable ? `<p style="margin:0;font-family: sans-serif; font-size:1em;">${eachMovieCautionVariable}</p>` : ''}
    
`;

  });
}

export default submitButton2;
export { movieSpecialNotes }
