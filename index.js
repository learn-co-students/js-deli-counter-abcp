function takeANumber(katzDeliLine, name) {
  var welcome;
  katzDeliLine[katzDeliLine.length] = name;
  welcome = `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
  return welcome;
}

function nowServing(katzDeliLine) {
  
  if (katzDeliLine.length > 0) {
    var name = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${name}.`;
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  
  var status = "The line is currently: ";
  for (var i = 0; i < katzDeliLine.length; i++)
  {
      if (i === katzDeliLine.length-1)
        status = status + `${i+1}. ${katzDeliLine[i]}`;
      else
        status = status + `${i+1}. ${katzDeliLine[i]}, `;
  }
  if (katzDeliLine.length === 0)
    status = "The line is currently empty.";
    
  return status;
}