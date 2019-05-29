function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`
}

function nowServing(line) {
  if (line[0] === undefined) {
    return "There is nobody waiting to be served!";
  } else { 
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line){
  if (line[0] === undefined) {
    return "The line is currently empty.";
  } else {
    let deliLine = line.map(x => ` ${line.indexOf(x) + 1}. ${x}`);
    return `The line is currently:${deliLine}`;
  }
}