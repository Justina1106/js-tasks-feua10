/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite objektą, kuris turi 3 savybes ir 1 metodą:

Savybės:
title, director, budget

Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins:
- Jeigu true, tai atsakymą išvesti tokiu formatu: „Režisieriaus {režisieriaus vardas} sukurto filmo {filmo pavadinimas} biudžetas viršijo 100 000 000 mln USD"
- Jeigu false, tai atsakymą išvesti tokiu formatu: „Režisierius {režisieriaus vardas}, kurdamas filmą {filmo pavadinimas}, neviršijo 100 000 000 mln USD biudžeto"
------------------------------------------------------------------------------------------------------ */
const movie = {
    title: 'Titanic',
    director: 'James Cameron',
    budget: 90000000, 
    wasExpensive: function() {
        if (this.budget > 100000000) {
            return `The budget of the movie ${this.title} made by director ${this.director} exceeded $100,000,000 million.`;
        } else {
            return `The director ${this.director} did not exceed a budget of USD 100,000,000 million for the film ${this.title}.`;
        }
    }
};

console.log(movie.wasExpensive());