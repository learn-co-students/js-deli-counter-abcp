var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return 'Welcome, '+name+'. You are number '+katzDeli.length+' in line.';
}

function nowServing(katzDeli) {
  
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var firstInLine = katzDeli[0];
    katzDeli.shift();
    return 'Currently serving '+firstInLine+'.';
  }
}

function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
    return 'The line is currently empty.';
  } else {
    var currentLine = 'The line is currently:';
    
    for( let i = 0; i < katzDeli.length; i++) {
      currentLine = currentLine+' '+(i+1)+'. '+katzDeli[i]+',';
    }
    currentLine = currentLine.slice(0,-1);
    return currentLine;
  }
}