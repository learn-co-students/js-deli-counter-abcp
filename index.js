function takeANumber(line, name){
  line.push(name)
  var num = line.indexOf(name) + 1
  return "Welcome, " + name + ". You are number " + num + " in line."
}
function nowServing(line){
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var newline = line[0]
    line.shift()
    return "Currently serving " + newline + ".";
  }
}

function currentLine(line){
  var greetings = "The line is currently: 1. " + line[0]
  if (line.length === 0) {return "The line is currently empty."}
  else {for (let i = 2; i < line.length + 1; i++) {greetings = greetings + ", " + i + ". " + line[i-1]}
  return greetings}
}