var katzDeli = [];

function takeANumber(katzDeli,name){
   katzDeli.push(name)
   return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli){
  if(katzDeli.length > 0){
    katzDeli.reverse()
     var x =  `Currently serving ` + katzDeli.pop() +`.`
     katzDeli.reverse()
     return x
   }
     else {
       return `There is nobody waiting to be served!`
     }

}

function currentLine(katzDeli){
  if(katzDeli.length > 0){
     var x = `The line is currently:`
     for(var i = 0 ; i < katzDeli.length - 1; i++)
        x += ` `+ (i+1) + `. ` + katzDeli[i] + `,`
      x += ` `+ (i+1) + `. ` + katzDeli[i]
    return x
  }
  else {
    return `The line is currently empty.`}

}
