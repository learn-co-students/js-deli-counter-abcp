var katzDeliLine = [];

function takeANumber (katzDeliLine, personName) {
  katzDeliLine.push(personName);
  return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
  return  "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }

}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  else if (katzDeliLine.length === 1) {
    return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}`;
  }
  else if (katzDeliLine.length === 2) {
    return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}`;
  }
  else if (katzDeliLine.length === 3) {
    return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`;
  }
}