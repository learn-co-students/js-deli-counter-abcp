function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
    if(katzDeliLine.length != 0){
      var name = katzDeliLine[0];
      katzDeliLine.shift();
      return `Currently serving ${name}.`;
    }else{
      return "There is nobody waiting to be served!";
    }
}

function currentLine(katzDeliLine){
  var line = "The line is currently:"
  if(katzDeliLine.length===0){
    line = "The line is currently empty.";
  } else{
  katzDeliLine.forEach(function(element,index){
     if (index != katzDeliLine.length-1){
      line = line + ` ${index+1}. ${element},`;
    }else {
      line = line + ` ${index+1}. ${element}`;
    }
  })
}
return line;
}
