/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const outputDiv = document.getElementById('output');
const message = document.getElementById('message');
const button = document.getElementById('btn');

button.addEventListener('click', async () => {
    // Hide the message
    message.style.display = 'none';

    try {
        // Fetch data from the GitHub API
        const response = await fetch(ENDPOINT);
        const users = await response.json();

        // Display user information in the output div
        users.forEach(user => {
            const card = document.createElement('div');
            card.classList.add('user-card');

            const username = document.createElement('p');
            username.textContent = `Username: ${user.login}`;

            const avatar = document.createElement('img');
            avatar.src = user.avatar_url;
            avatar.alt = `Avatar for ${user.login}`;

            card.appendChild(username);
            card.appendChild(avatar);
            outputDiv.appendChild(card);
        });
    } catch (error) {
         // Handle errors, e.g., display an error message
         console.error('Error fetching data:', error);
         outputDiv.textContent = 'Error fetching data. Please try again later.';
     }
});
