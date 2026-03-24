
// let signal = prompt();
// try {
//     if (signal !== "yellow"&& signal !== "green" && signal !== "red") {
//         console.log("invalid signal");
        
//     }
//     if (signal == "green") {
//         console.log("you can go");
        
//     }
    
//     else if (signal == "yellow") {
//         console.log(" ready to go");
        
//     }
    
//    else if (signal == "red") {
//         console.log("stop ");
        
//     }
    
// } catch (error) {
//     let err = error.message()
    
//     console.log("error");
    
    
// }finally{
//     console.log("ready");
    
// }
function checkEvenOdd(num) {

    
}
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}
console.log( divide(20 , 0));


function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  if (age < 13) return "Child";
  if (age < 20) return "Teenager";
  if (age < 60) return "Adult";
  return "Senior";
}
// console.log(new Date());
calculateAge(13);
console.log(calculateAge());

 function name(a , b) {
  return(a + b)
  
}