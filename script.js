const display = document.getElementById('display');
const themeSwitch = document.getElementById('theme-switch');

function appendToDisplay(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = "";
}
function calculate() {
    try {   
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }       

}
function remove() {
      const display = document.getElementById('display');
      display.value = display.value.slice(0, -1); 
}




document.addEventListener('keydown', (event) => {
      const key = event.key;

      if (/[\d+\-*/.]/.test(key)) {
        appendToDisplay(key);
      } 
      
      else if (key === 'Enter' || key === '=') {
        event.preventDefault(); 
        calculate();
      }
      
      else if (key === 'Backspace') {
        remove();
      }
      
      else if (key === 'Escape' || key === 'c') {
        clearDisplay();
      }
   }); 