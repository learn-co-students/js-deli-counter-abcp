let customers = [];

function takeANumber(customers, name) {
  customers.push(name);
  return `Welcome, ${name}. You are number ${customers.length} in line.`
}

function nowServing(customers) {
  if (customers.length == 0){
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${customers.shift()}.`
  }
}

function currentLine(customers) {
  if(customers == 0) {
    return "The line is currently empty."
  }
  let numbersAndNames = []
    for(let i = 0, x = customers.length; i < x; i++) {
      numbersAndNames.push(`${i + 1}. ${customers[i]}`)
    }
    return `The line is currently: ${numbersAndNames.join(', ')}`
  }
