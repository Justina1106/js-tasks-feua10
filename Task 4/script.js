/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą. Vartotojui atėjus į tinklapį, kreipsis į cars.json failą
ir atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
async function fetchAndDisplayCars() {
    try {
        const response = await fetch('cars.json');
        const data = await response.json();

        const outputDiv = document.getElementById('output');

        // Iterate over each car manufacturer in the data
        data.forEach(manufacturer => {
            // Create a card for each manufacturer
            const card = document.createElement('div');
            card.classList.add('car-card');

            // Add manufacturer name to the card
            const manufacturerName = document.createElement('h2');
            manufacturerName.textContent = manufacturer.manufacturer;
            card.appendChild(manufacturerName);

            // Add models produced by the manufacturer to the card
            const modelsList = document.createElement('ul');
            manufacturer.models.forEach(model => {
                const listItem = document.createElement('li');
                listItem.textContent = model;
                modelsList.appendChild(listItem);
            });
            card.appendChild(modelsList);

            // Add the card to the output div
            outputDiv.appendChild(card);
        });
    } catch (error) {
        // Handle errors, e.g., display an error message
        console.error('Error fetching or displaying data:', error);
    }
}

// Call the fetchAndDisplayCars function when the page is loaded
window.addEventListener('load', fetchAndDisplayCars);