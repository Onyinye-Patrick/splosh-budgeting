 var incvar, debtvar, expvar, calc, amtvar, result;

 function calculate() {
     // Income
     incvar = document.getElementById("income").value;
     calc = parseInt(incvar) * 52.1439;
     document.getElementById("incyr").value = calc;
     // Debt
     debtvar = document.getElementById("debt").value;
     calc = parseInt(debtvar) * 52.1439;
     document.getElementById("debtyr").value = calc;
     // Expenses
     expvar = document.getElementById("expense").value;
     calc = parseInt(expvar) * 52.1439;
     document.getElementById("expyr").value = calc;
 }

 function savings() {
     debtvar = parseInt(debtvar)
     expvar = parseInt(expvar)
     result = (debtvar + expvar) - incvar;
     document.getElementById("amount").value = result;
     amtvar = document.getElementById("amount").value;
     calc = parseInt(amtvar) * 52.1439;
     document.getElementById("amtyr").value = calc;
 }

 function subbtn() {
     var timeid = document.getElementById("timeid").value;
     alert("On " + timeid + " " + result + " will be saved.")
 }