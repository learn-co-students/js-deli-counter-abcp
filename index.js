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
  var i;
  var currLine = {};

  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for (i = 0; i < katzDeliLine.length; i++) {
      currLine[i+1].katzDeliLine[i];
    }
  }    
  
  return "The line is currently:" + currLine ;
}