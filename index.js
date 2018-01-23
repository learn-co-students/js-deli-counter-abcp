var katzDeli = [];

function takeANumber(katzDeliLine, newPersonName){
  katzDeliLine.push(newPersonName)
  return "Welcome, " + newPersonName + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  var currPerson = katzDeliLine.pop();
  return currPerson;
}