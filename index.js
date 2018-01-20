var katzDeliLine = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return "Welcome, "+name+". You are number "+katzDeliLine.length+" in line."
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length>0){
    let currentCustomer=katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving "+currentCustomer+".";
  }else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length>0){
    var line = "The line is currently: "
    for (var i=1; i<katzDeliLine.length+1; i++){
      line+= i+". "+katzDeliLine[i-1]
      if (i<katzDeliLine.length){
        line+=", "
      }
    }
    return line
  }else{
    return "The line is currently empty."
  }
}