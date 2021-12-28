import {printTimer, printUpdateTimer} from './printTimer.js';
import { Howl } from 'howler';
// import 'https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js'
// import melody from '../../files/13c9a55c268e643.mp3'

const timer = document.getElementById('timer');
const stopTimer = document.getElementById('stopTimer');

export const updateTimer = () => {
  let hours = document.getElementById('hours').value;
  let minutes = document.getElementById('minutes').value;
  let seconds = document.getElementById('seconds').value;

  //выводим на страничку таймер
  [hours, minutes,seconds] = printTimer (hours, minutes, seconds);

  // к текущей дате добавляем время по таймеру
  let timerStopDate = new Date();
  timerStopDate.setHours(timerStopDate.getHours() + parseInt(hours));
  timerStopDate.setMinutes(timerStopDate.getMinutes() + parseInt(minutes));
  timerStopDate.setSeconds(timerStopDate.getSeconds() + parseInt(seconds));


  let timerId = setInterval(() => {
    let now = new Date();
    let diff = timerStopDate - now;
    diff = diff < 0 ? diff = 0 : diff;


    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hour = Math.floor(diff / (1000 * 60 * 60));
    let mins = Math.floor(diff / (1000 * 60));
    let secs = Math.floor(diff / 1000);

    let d = days;
    let h = hour - days * 24;
    let m = mins - hour * 60;
    let s = secs - mins * 60;

    if (secs < 0 || (h <= 0 && m <= 0 && s <= 0)) {
      clearInterval(timerId)
      let sound = new Howl({
        src: ['https://assets.codepen.io/21542/howler-push.mp3']

      });
      sound.play();

    }
     printUpdateTimer(h, m, s);

  }, 1000)


  stopTimer.onclick = () => {
    clearInterval(timerId);
    // timer.innerHTML = '00 : 00 : 00'; //после клика выставить нули

    //обнуляем значения в полях ввода
    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
  }
}