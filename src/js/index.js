import '../css/style.css';
import {printError, printResult} from './dataDiff/printResult.js';
import getDateDiff from './dataDiff/getDateDiff.js';
import changeModule from './changeModule/changeModule.js';
// import "https://cdn.jsdelivr.net/npm/howler@2.2.3/dist/howler.min.js"
// import 'https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js'
import {updateTimer} from './timer/updateTimer.js';






// переключение между калькулятором дат и таймером
changeModule();

// калькулятор дат

const form = document.getElementById('datecalc');

form.onsubmit = (event) => {
  event.preventDefault();

  const dataForm = new FormData(event.target);

  const firstDate = dataForm.get('firstDate');
  const secondDate = dataForm.get('secondDate');

  if (!firstDate || !secondDate) {
    printError('Oooopps! Введите дату')
  } else {
    const dateREsult = getDateDiff(firstDate, secondDate);
    printResult(dateREsult);
  }
}


// таймер

const startTimer = document.getElementById('startTimer');
startTimer.onclick = updateTimer;






















