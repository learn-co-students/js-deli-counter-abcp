var katzDeliLine = [];

function takeANumber(katzDeliLine, newCustomer) {
  var i = 0;
  katzDeliLine.push(newCustomer);
  return "Welcome, " + newCustomer + ". You are number " + (katzDeliLine.indexOf(newCustomer) + 1) + " in line."
  
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var removed = katzDeliLine.shift();
    return "Currently serving " + removed +".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
  return "The line is currently: 1. " + `${katzDeliLine[0]}` + ", 2. " + `${katzDeliLine[1]}` + ", 3. " + `${katzDeliLine[2]}`;
  } else {
    return "The line is currently empty.";
  }
}
