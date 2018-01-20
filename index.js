var katzDeli = [];

function takeANumber(name){
   this.katzDeli.push(name)
   return `Welcome, ` + name +`. You are number ${katzDeli.indexOf(name)+1} in line.`
}

function nowServing(){
  if(katzDeli.length > 0){
     return katzDeli.shift()
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
