// function takeANumber(katzDeli, name){
//   var kat=(katzDeli.length)+1;
//   return "Welcome, "+name+". You are number "+kat +" in line.";
// }

function takeANumber(katzDeli, name){
     katzDeli.push(name);
 
  return katzDeli;
}
function takeANumber(katzDeli, name){
     katzDeli.push
     (name);
  return "Welcome, "+name+". You are number "+katzDeli.length +" in line.";
}

function nowServing(katzDeli){
  if(katzDeli.length ===0){
    return "There is nobody waiting to be served!";
  }
  else{
    return"Currently serving "+katzDeli.shift()+".";
  }
}
var see=[];
function currentLine(katzDeli){


  var k=0;
  if(katzDeli.length ===0){
    return "The line is currently empty.";
  }
  else{
    see.push("The line is currently: ");
    try{
      for(var i=0;i<katzDeli.length;i++){
             k++;
       see.push(k +". "+ katzDeli[i]);
    }
    
    }
    finally{
      return see[0]+see[1]+", "+see[2]+", "+see[3];
    }
     
    
   
  }
}