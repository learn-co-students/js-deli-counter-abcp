var katzDeli = [];

function takeANumber(array, name){
  array.push(name);
  return 'Welcome, '+ name + '. You are number ' + array.length + ' in line.'
}

function nowServing(line){
  if (line.length === 0){
    return 'There is nobody waiting to be served!'
  } else {
    var message = 'Currently serving ' + line[0] + '.'
    line.shift();
    return message;
  }
}

function currentLine(line){
  if (line.length === 0){
  return 'The line is currently empty.'
  } else {
    return 'The line is currently: 1. ' + line[0] +', 2. ' + line[1] + ', 3. ' + line[2]
  }
}