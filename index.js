var katzDeli = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  return 'Welcome, ' + (newPerson) + '. You are number ' +  (katzDeliLine.length) + ' in line.'
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
  return "Currently serving " + (katzDeliLine.shift()) +"."
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  var n = 0
  var inLine = []
   if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
     n++;
     inLine.push(" " + (n) + ". " + katzDeliLine[i])
  }
    return "The line is currently:" + inLine
  }
}