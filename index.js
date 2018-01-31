var katzDeliLineLine = [];

// "Welcome, Grace. You are number 4 in line."
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
}

// "Currently serving Steven."
// "There is nobody waiting to be served!"
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var customer = katzDeliLine[0];
    katzDeliLine.shift();
    return ("Currently serving " + customer + ".");
} else { 
    return ("There is nobody waiting to be served!");
}
}

// "The line is currently: 1. Bill, 2. Jane, 3. Ann"
// "The line is currently empty."
function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var waitingList = "The line is currently: ";
    var commaSpace = ", ";
    var i = 0;
    for (i = 0; i < katzDeliLine.length; i++) { 
      if (katzDeliLine[i] === katzDeliLine[katzDeliLine.length-1]) {
      commaSpace = "";
      }
    waitingList = waitingList + (i+1) + ". " + katzDeliLine[i] + commaSpace;
    }
	return (waitingList);
  } 
  else { 
    return ("The line is currently empty.");
  }
}

