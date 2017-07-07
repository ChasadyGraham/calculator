var calculationTotal = 0,
    currentNumber = "",
    currentOperation = "";

$("#calculator .number").on("click", function(){
  let value = $(this).val();  
  currentNumber = currentNumber.concat(value);
  $("#calculator #display").val(parseInt(currentNumber));
});

$("#calculator #clear").on("click", function() {
  currentNumber = "0";
  $("#calculator #display").val(parseInt(currentNumber));
});