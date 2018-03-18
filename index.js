function takeANumber(katzDeliLine, newName){
  katzDeliLine.push(newName);
  return('Welcome, ' + newName + '. You are number ' + katzDeliLine.length + ' in line.');
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length===0){
    return ('There is nobody waiting to be served!')
  }else{
    var firstPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return('Currently serving ' + firstPerson + '.');
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length===0){
    return ('The line is currently empty.')
  }else{
    var numbered = [...katzDeliLine]
    for (let i=0; i<katzDeliLine.length; i++){
      var j = i+1;
      numbered[i] = ' ' + j + '. ' + katzDeliLine[i];
    }
    return('The line is currently:' + numbered);
  }
}