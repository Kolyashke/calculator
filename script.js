let firstNumber=0;
let secondNubmer=0;
let operCode = null;






function addDigit(digitToAdd){
	if (parseInt(document.getElementById('result').value) <10e+10)
	{

		if (document.getElementById('result').value ==0){
			document.getElementById('result').value =digitToAdd;
		}
		else {
			document.getElementById('result').value +=digitToAdd;
		}
	}
	
}

function operation(operationCode){
	firstNumber = document.getElementById('result').value;
	secondNubmer = 0;
	operCode = operationCode;
	clearTheInput();
}

function clearTheInput(){
	document.getElementById('result').value=0;
}

function signChange() { //смена знака
    currentValue=document.getElementById('result').value;
    if (currentValue == "0") //для 0 знак не меняется
        return;
	else
   	document.getElementById('result').value=0-currentValue;
 
}

function calculate(){
	if (operCode!=null)
	{
		secondNubmer = document.getElementById('result').value;
		switch (operCode)
		{
		  case 0:
		    firstNumber = parseInt(firstNumber)/parseInt(secondNubmer);
		    break;
		  case 1:
		   firstNumber = parseInt(firstNumber)*parseInt(secondNubmer); 
		    break;
		   case 2:
		   firstNumber = parseInt(firstNumber)-parseInt(secondNubmer);
		   break;
		   case 3:
		   firstNumber = parseInt(firstNumber)+parseInt(secondNubmer);
		   break;
		  default: break;
		}
		document.getElementById('result').value = firstNumber;
		operCode=null;
	}
}


function resetAll(){
	firstNumber=0;
	secondNubmer=0;
	operCode=null;
	clearTheInput();
}
