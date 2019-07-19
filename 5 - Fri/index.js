console.log(`I poured spot remover on my dog. Now he's gone...`);

const container = document.querySelector(`.btn-container`);
const addBtn = document.querySelector(`[name="addBtn"]`);

const randNum = (max) => Math.floor(Math.random() * Math.floor(max));

/******************************
 * 
 *  Using the existing HTML and CSS, add Javascript code to do the following:
 * 
 *  1 - When the user clicks "Add New Button" a new button is added to the page.
 *  2 - The button can only be clicked a random number of times between 1 -10. A
 *      randNum function has been supplied.
 *  3 - Once the button has been clicked enough times, it should be disabled.
 * 
 ********************************/
