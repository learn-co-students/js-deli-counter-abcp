var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    var serving = katzDeliLine.shift();
  
    return `Currently serving ${serving}.`;
  }
  else{
    return `There is nobody waiting to be served!`;
  }
}

function currentLine(katzDeliLine){
  var lineString = `The line is currently`;
  var lineLength = katzDeliLine.length;
  
  if (lineLength > 0){
    // Add colon for output
    lineString += `: `;
    
    for (var i = 0; i < lineLength; i++){
      if (i > 0){
        lineString += `, `;
      }
      
      lineString += `${i + 1}. ${katzDeliLine[i]}`;
    }
  }
  else{
    lineString += ` empty.`;
  }
  
  return lineString;
}