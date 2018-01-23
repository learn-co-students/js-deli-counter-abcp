var katzDeli = [];

function takeANumber(katzDeliLine, newPersonName){
  katzDeliLine.push(newPersonName)
  return "Welcome, " + newPersonName + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"; 
  } else {
    var currPerson = katzDeliLine.shift();
  return "Currently serving " + currPerson + ".";
  }
}

function currentLine(katzDeliLine) {
  var i = 0;
  var currLine = ["The line is currently:"];

  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    while (i < katzDeliLine.length) {
      currLine = currLine + " " + (i+1);
      currLine = currLine + (". ");
      currLine = currLine + katzDeliLine[i];
      i++
    }
  }    
  
  return currLine ;
}