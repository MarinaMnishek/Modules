import {printError, printResult} from './dataDiff/printResult.js';
import getDateDiff from './dataDiff/getDateDiff.js';
import changeModule from './changeModule/changeModule.js';
// import updateTimer from './timer/updateTimer';
// import "https://cdn.jsdelivr.net/npm/howler@2.2.3/dist/howler.min.js"
import "https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js"


changeModule();
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







const timer = document.getElementById('timer');

const startTimer = document.getElementById('startTimer');
const stopTimer = document.getElementById('stopTimer');

startTimer.onclick = () => {
  let hours = document.getElementById('hours').value;
  let minutes = document.getElementById('minutes').value;
  let seconds = document.getElementById('seconds').value;

  hours = hours===''? hours = 0 : hours;
  minutes = minutes===''? minutes = 0 : minutes;
  seconds = seconds===''? seconds = 0 : seconds;

  timer.innerHTML = hours +' : ' + minutes +' : ' + seconds;

  let timerStopDate = new Date();

  timerStopDate.setHours(timerStopDate.getHours() + parseInt(hours));
  timerStopDate.setMinutes(timerStopDate.getMinutes() + parseInt(minutes));
  timerStopDate.setSeconds(timerStopDate.getSeconds() + parseInt(seconds));


 let timerId = setInterval(()=>{
    console.log("timerStopDate: " + timerStopDate)
    let now = new Date();
    console.log("now: " + now)
    let diff = timerStopDate - now;
   diff = diff<0 ? diff = 0 : diff;
    console.log("diff: " + diff)

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hour = Math.floor(diff / (1000 * 60 * 60));
    let mins = Math.floor(diff / (1000 * 60));
    let secs = Math.floor(diff / 1000);
    console.log("secs: " + secs)

    let d = days;
    let h = hour - days * 24;
    let m = mins - hour * 60;
    let s = secs - mins * 60;
    console.log("h: " + h)
    console.log("m: " + m)
    console.log("s: " + s)


    if (secs<0 || (h<=0 && m<=0 && s<=0) ) {
      clearInterval(timerId)
      let sound = new Howl({
        src: ['https://assets.codepen.io/21542/howler-push.mp3']
      });
      sound.play();
    }

    timer.innerHTML = h +' : ' + m +' : ' + s;
   console.log("------------------------------------------------------------------------------------")
  }, 1000)

  stopTimer.onclick = () => {
    clearInterval(timerId);
    timer.innerHTML = '';

  }
}























