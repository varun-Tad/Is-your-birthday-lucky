const dateOfBirth = document.querySelector("#date");
const luckyNumber = document.querySelector("#number");
const checkNumberButton = document.querySelector("#check-number");
const output = document.querySelector("#output-box");


function compareValues(sum,luckyNumber)
{
     if(sum%luckyNumber === 0)
     {
         outputBox.value = "Your birthday is lucky";
     }
     else{
         outputBox.value= "Your birthday is not lucky";
     }
}




function compareValues(sum,luckyNumber)
{
  if(sum%luckyNumber === 0)
  {
    output.value = "Your Birthday is lucky 😁 ";
  }
  else
  {
    output.value = "Your Birthday is not lucky 😔";
  }
}


function checkBirthDayIsLucky()
{
  
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  console.log(sum);
  if(sum && dob)
  {
    compareValues(sum,luckyNumber.value);
  }
  else
   {
     output.value="Please enter values in both the fields";
   }
  

}


function calculateSum(dob)
{
  dob = dob.replaceAll("-","");
  let sum =0;
  for(let i=0;i< dob.length;i++)
  {
   sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

checkNumberButton.addEventListener("click",checkBirthDayIsLucky);