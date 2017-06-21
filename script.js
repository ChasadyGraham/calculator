 
var calculationTotal = 0,
          currentNumber ="",// just string of number being punched in 
          currentOperation = "";
       //this is shosing the var the adding a listener for a click bthat is function //               
    $("#calculator .number").on("click", function() {
      //this caputure the number the value of what ever the number that is clcked  this stands for the number that is clicked (the number that is being pressed on the calculator one digit at a time ) //
			let value = $(this).value();      
     //it build a number  concat does not create a perminent change must add the value = value to to store perminent #
			//the first part sets the sequence of numbers(concat adds multiple digits) then stores it in the current number
			currentnumeber = currentNumber.concat(value);
      
			$("#calculator #display").value(parseInt(currentNumber));
    });

    $("#calculator .operation").on("click", function() {
//this caputure the number the value of what ever the number that is clcked  this stands for the number that is clicked //
      let operation = $(this).value();
      
      // Special behaviors for clear and equals
      if (operations === "C") {
      
        caculationTotal = 0;
        currentNumber = "";
        currentOperation = "";
        $("#display").value("0");        
      
      }else if(operations === "=") {
        
        // Check to see what currentOperation is and
        // apply that to parseInt(currentNumber) and the calculationTotal
                
      }else{
      
        currentOperation = operation;              
      
      }      
    });