/* 1. Create a variable for atm pin
   2. Get User input for atm using prompt
   3. convert it to interger.
   4. Compare it with the default pin
   
   5. Validate the pin
   6. Display choices
   7. 1. withdraw
      2. Display the Account Balance
      3. Exit
   8. Put switch case for three options
*/
var pinNo;
pinNo = window.prompt('Enter Your Pin');
pinNo = parseInt(pinNo);

if(pinNo == 2244){
   var choice = window.prompt(parseInt("Welcome to SBI Banking services. Please press 1 to withdraw, 2 to display the account balance, 3 Exit"));

switch (choice) {
    case 1:
         var WD = window.prompt(parseInt('Enter The amount'));
         alert(WD)       
        break;
    case 2:
        var AccountBalance = alert('50,000');
        break
    case 3:
        alert('Thank You For Coming')
    default:
        alert('Please Refresh The Page To Re-Enter Choices');
        break;
}




}

else{
    alert("Enter proper Pin Number!");
}