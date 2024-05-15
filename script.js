document.getElementById('simpleInterestBtn').addEventListener('click', calculateSimpleInterest);
document.getElementById('compoundInterestBtn').addEventListener('click', calculateCompoundInterest);

function calculateSimpleInterest() {
  var capital = parseFloat(document.getElementById('capital').value);
  var interestRate = parseFloat(document.getElementById('interestRate').value);
  var months = parseInt(document.getElementById('months').value);

  // Convertir meses a años
  var years = months / 12;

  var simpleInterest = (capital * interestRate * years) / 100;
  var totalAmount = capital + simpleInterest;

  document.getElementById('result').innerHTML = "Interés Simple: " + simpleInterest.toFixed(2) + "<br>Monto Total a Pagar: " + totalAmount.toFixed(2);
}

function calculateCompoundInterest() {
  var capital = parseFloat(document.getElementById('capital').value);
  var interestRate = parseFloat(document.getElementById('interestRate').value);
  var months = parseInt(document.getElementById('months').value);

  // Convertir meses a años
  var years = months / 12;

  var compoundInterest = capital * (Math.pow((1 + interestRate / 100), years)) - capital;
  var totalAmount = capital + compoundInterest;

  document.getElementById('result').innerHTML = "Interés Compuesto: " + compoundInterest.toFixed(2) + "<br>Monto Total a Pagar: " + totalAmount.toFixed(2);
}
