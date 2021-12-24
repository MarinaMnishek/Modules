const timer = document.getElementById('timer');

export const printTimer = (hours, minutes, seconds) => {
  // если пользователь ничего не ввел в поле, то ставим 0
  hours = hours === '' ? hours = 0 : hours;
  minutes = minutes === '' ? minutes = 0 : minutes;
  seconds = seconds === '' ? seconds = 0 : seconds;

  //вывод в формате 00 : 00 : 00
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

 timer.innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
 return [hours, minutes, seconds]
}

export const printUpdateTimer = (h, m, s) => {
  //вывод в формате 00 : 00 : 00
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;


  timer.innerHTML = h + ' : ' + m + ' : ' + s;
}