var katzDeli = [];

function takeANumber(name){
      katzDeli.push(name)
   return `Welcome, ${name}. You are number ${katzDeli.lenght} in line.`
}

function nowServing(){
  if(katzDeli.length > 0){
     return katzDeli.shift()}
     else {
       return "nobody to be served"
     }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length > 0){
     x = `The line is currently: `
     for(var i = 0 ; i < katzDeliLine.length; i++)
        x += '${i}.${katzDeliLine[i]} '
    return x }
  else {
    return "The line is currently empty."}

}
