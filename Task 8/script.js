/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite objektą, kuri turi 2 savybes ir 4 metodus.

Savybės: du skaičiai, kuriuos reikės panaudoti nurodytuose metoduose.

Metodai:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
const calculator = {
    num1: 0,
    num2: 0,
    setNumbers: function(num1, num2) {
      this.num1 = num1;
      this.num2 = num2;
    },
    sum: function() {
      return this.num1 + this.num2;
    },
    subtraction: function() {
      return this.num1 - this.num2;
    },
    multiplication: function() {
      return this.num1 * this.num2;
    },
    division: function() {
      // Check if num2 is not 0 to avoid division by zero
      if (this.num2 !== 0) {
        return this.num1 / this.num2;
      } else {
        return "Cannot divide by zero!";
      }
    }
  };
  
 
  calculator.setNumbers(10, 5);
  
  
  console.log('Sum:', calculator.sum()); // Output: 15 (10 + 5)
  console.log('Subtraction:', calculator.subtraction()); // Output: 5 (10 - 5)
  console.log('Multiplication:', calculator.multiplication()); // Output: 50 (10 * 5)
  console.log('Division:', calculator.division()); // Output: 2 (10 / 5)