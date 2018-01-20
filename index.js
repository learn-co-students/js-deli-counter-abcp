
function takeANumber(katzDeli, name){
katzDeli.push(name)
 
 var place = katzDeli.length;
 
  return "Welcome, " + name + ". You are number " + place + " in line." ;
 
}

function nowServing(katzDeli){
  
  if (katzDeli.length >= 1) {
    var serving = katzDeli[0];
    katzDeli.shift()
    return "Currently serving " + serving + ".";
    
  } else {
    
    return "There is nobody waiting to be served!" ;
  }
  
}


function currentLine(katzDeli) {
var queue1 = katzDeli[0]
var queue2 = katzDeli[1]
var queue3 = katzDeli[2]

if (katzDeli.length >= 1) {
  return  "The line is currently: 1. " + queue1 + ", 2. " + queue2 + ', 3. ' + queue3
}
else {
  return "The line is currently empty."
  
} 
}
  
