var katzDeli = [];

function takeANumber(line, name){
  line.push(name);
  line;
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }else {
    var x = line[0];
    line.shift();
    return `Currently serving ${x}.`
  }
}

function currentLine(line){
  if (!line.length) {
    return "The line is currently empty.";
  }else if (line.length===1) {
    return `The line is currently: 1. ${line[0]}.`;
  }else {
    let s = "The line is currently: "
    for (var i = 0; i < line.length - 1; i++) {
      s  += `${i+1}. ${line[i]}, `;
    }
    s += `${line.length}. ${line[line.length - 1]}`;
    return s;
  }
};
