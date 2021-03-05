var no1;
var no2;
var choices;
no1 = window.prompt('Enter One Number');
no2 = window.prompt('Enter Another Number');
choices = window.prompt('Enter 1 To Add, 2 To Subtract, 3 To Multiply, 4 To Divide')
console.log(no1, no2)
no1 = parseInt(no1);
no2 = parseInt(no2);
// alert(no1 + no2);
choices = parseInt(choices)
// if (choices = 1){
//     alert(no1 + no2)
// }


switch (choices) {
    case 1:
        alert(no1 + no2);
        break;
    case 2:
        alert(no1 - no2);
        break;
    case 3:
        alert(no1 * no2);
        break;
    case 4:
        alert(no1 / no2);
        break    
    default:
        alert('Please Refresh The Page To Re-Enter Choices')
        break;
}

/* 1. getting inputs from user
2. Display the choices using prompt ( " 1. Add, 2. Subtract, 3.Multiply, 4. Divide")

3. If choice is equal to 1, add the two numbers,
else if 
*/