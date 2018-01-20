var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
}

function nowServing(katzDeliLine){
var helperarray = [...katzDeliLine, katzDeliLine[0]];
if (1 > katzDeliLine.length) {
  return "There is nobody waiting to be served!";
}
else {
katzDeliLine.shift();
  return ("Currently serving " + helperarray[0] + ".");
}
}

function currentLine(katzDeliLine) {
if (1 > katzDeliLine.length) {
  return ("The line is currently empty.");
}
else {
  var numberedarray = [];
  while (katzDeliLine.length > 0) {
    numberedarray.unshift(" " + katzDeliLine.length + ". " + (katzDeliLine[katzDeliLine.length - 1]));
    katzDeliLine.pop();
  }
  return "The line is currently:" + numberedarray;
}
}