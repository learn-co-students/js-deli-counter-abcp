function takeANumber(katzDeli , newPerson){
  
  katzDeli.push(`${newPerson}`);
  
  return(`Welcome, ${newPerson}. You are number ${katzDeli.length} in line.`);
    
}


function nowServing(katzDeliLine){
  
  for(var i =0; i<=katzDeliLine.length; i++){
    
    if(katzDeliLine.length>0){
  
      var x = katzDeliLine[0];
      katzDeliLine.shift();
    
      return('Currently serving ' + x +'.');
      
      
    } else {
       return('There is nobody waiting to be served!');
    }
  }
  
}


function currentLine(katzDeliLine){
  
 var counter =[];
 
  for(var i =0; i<katzDeliLine.length; i++){
  
    counter.push(` ${i+1}. ${katzDeliLine[i]}`);
  
    } if(katzDeliLine.length>0){
  
    return(`The line is currently:`+ counter);
      
    } else {
       return(`The line is currently empty.`);
    }
  }
  


