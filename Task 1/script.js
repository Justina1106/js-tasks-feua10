/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Gauname svorį kilogramais iš įvesties lauko
    const weightInKg = parseFloat(document.getElementById('search').value);

    // Atliekamas konvertavimas
    const weightInLb = weightInKg * 2.2046;
    const weightInG = weightInKg / 0.0010000;
    const weightInOz = weightInKg * 35.274;

    // Rezultatas div output
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <p>Weight in Pounds (lb): ${weightInLb.toFixed(2)}</p>
        <p>Weight in Grams (g): ${weightInG.toFixed(2)}</p>
        <p>Weight in Ounces (oz): ${weightInOz.toFixed(2)}</p>
    `;
});