let outputString = "String test!"
function beepBoop(input) {
  outputString = ""
  for (i = 0; i <= input; i++) {
    if ((i+'').indexOf('3') > -1){
      outputString += "neighbor"
      outputString += "<br>"
    }
    else if ((i+'').indexOf('2') > -1){
      outputString += "boop"
      outputString += "<br>"
    }
      else if ((i+'').indexOf('1') > -1){
        outputString += "beep"
      outputString += "<br>"
      }
    else {outputString += i
      outputString += "<br>"};
    }console.log(outputString);
}

function printBeepBoop(){
  console.log("Test!");
  console.log(outputString);
    return outputString; 
  }

  $(document).ready(function() {
    $("#robotRogers").submit(function(event) {
      const input = parseInt($("input#number").val());
      // console.log(year);
      console.log(beepBoop(input));
      event.preventDefault();
    })
  })