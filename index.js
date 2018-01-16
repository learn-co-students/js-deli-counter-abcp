var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length > 0) {
    var serve = line[0];
    line.shift();
    return `Currently serving ${serve}.`;
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var lineStr = "The line is currently: ";
    for (let i = 0; i < line.length; ++i) {
      if (i === line.length-1) {
        lineStr += (i+1) + ". " + line[i];
      } else {
        lineStr += (i+1) + ". " + line[i] + ", ";
      }
    }
    return lineStr;
  } else {
    return 'The line is currently empty.';
  }
}