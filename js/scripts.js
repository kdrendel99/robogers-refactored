let outputString = ""

function beepBoop(input) {
  outputString = ""
  for (i = 0; i <= input; i++) {
    if ((i + '').indexOf('3') > -1) {
      outputString += "Won't you be my neighbor?"
    } else if ((i + '').indexOf('2') > -1) {
      outputString += "boop"
    } else if ((i + '').indexOf('1') > -1) {
      outputString += "beep"
    } else {
      outputString += i
      outputString += ""
    }
    if (i < input) {
      outputString += ", "
    }
  } console.log("penis!")
}

$(document).ready(function() {
  $("#robotRogers").submit(function(event) {
    event.preventDefault();
    $("#result").show();
    const userinput = parseInt($("input#number").val((function(){
      $('#result').append(outputString + "<br>");
      console.log("FUCK")
    })));
  })
})