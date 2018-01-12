/* Build a function that a new customer will use when entering the deli. The function, `takeANumber`,
should accept the current line of people, `katzDeliLine`,
along with the new person's name as parameters. The function should return their position in line.*/
var katzDeliLine = [];

function takeANumber(katzDeliLine,name){

katzDeliLine.push(name);
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;

}

/*Build a function nowServing. This function should return the first person in line and then remove that
 individual from the line.
If there is nobody in line, it should return "There is nobody waiting to be served!"*/

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    let x = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    return  x;
 //katzDeliLine.shift(); won't reach this because after return..?
  }

  else {
    return "There is nobody waiting to be served!";
  }
}


/*Build a function currentLine that returns the current line. For example, if katzDeliLine is currently
 ["Ada", "Grace"], currentLine(katzDeliLine) would return "The line is currently: 1. Ada, 2. Grace". If
  there is nobody in line, it should return "The line is currently empty."*/
function currentLine(katzDeliLine){
  if(katzDeliLine.length === 2){
    return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}` ;

  }else if(katzDeliLine.length === 3){
    return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}` ;

  }

  else {
    return "The line is currently empty.";
  }
}
