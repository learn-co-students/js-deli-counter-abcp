function takeANumber (katzDeliLine,person) {
  katzDeliLine.push(person);
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  
  if (katzDeliLine.length>0) {
    let person=katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${person}.`;
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length>0) {
    let text="The line is currently:"
    for (let i=0;i<katzDeliLine.length;i++) {
      text+=` ${i+1}. ${katzDeliLine[i]}`+ (i===(katzDeliLine.length-1) ? "" : ",");
    }
    return text;
  } else {
    return "The line is currently empty."
  }
}