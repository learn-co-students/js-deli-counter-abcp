var katzDeli = [];
function takeANumber(katzDeliLine,name){
  var linePosition = katzDeliLine.length + 1
  katzDeliLine.push(name)
  return (`Welcome, ${name}. You are number ${linePosition} in line.`)
  }

function nowServing(katzDeliLine){
  var curry = katzDeliLine.shift()
  if (katzDeliLine.length === 0){
  return "There is nobody waiting to be served!"
} else {
  return (`Currently serving ${curry}.`)
  }
}

/*function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty."
  }
  var myString = `The line is currently: 1. ${katzDeliLine[0]}`

   for(let i = 1; i<katzDeliLine.length;i++){
   myString += `, ${i+1}. ${katzDeliLine[i]}`
 }
 return myString
 }
*/
 function currentLine(line) {
   var lineNum = [];
  if (line.length == 0) {
     return "The line is currently empty.";
   }
   for (var i = 0; i < line.length; i++) {
     lineNum.push(` ${i+1}. ${line[i]}`);
 	}
   return "The line is currently:" + lineNum;

 }
