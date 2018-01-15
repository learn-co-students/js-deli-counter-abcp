//Function for a new customer.
//Takes current line of people & name of customer
//Returns the postion in line of new customer.
function takeANumber(katzDeliLine,custName){
  //put customer to the end of the line
  katzDeliLine.push(custName);
  //return customer position in line
  return `Welcome, ${custName}. You are number `+katzDeliLine.length+" in line.";
}

//Function for now serving
//Return the first person in line. 
//Removes that person from the line. 
//If no one is in line then return statement.
function nowServing(katzDeliLine){
  //Check if line is empty
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }else{
   //return the first person on line & remove from line
   return "Currently serving " + katzDeliLine.shift() +".";
  }
}

//Function returns the current line.
//If there is nobody on line then return statment.
function currentLine(katzDeliLine){
  //Check if the line is empty
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  }else {
    //String to add list to.
    var listLine = 'The line is currently: ';
    
    //Go through the persons in line
    for(let i=0; i<katzDeliLine.length; i++){
      //add to string for final statement
      listLine = listLine + (i+1) +'. ' + katzDeliLine[i] + ', ';
    }
    //return list of Persons on line w/o last comma
    return listLine.slice(0,-2);
  }
}