
function changeModule() {

  const buttonDate = document.getElementById('chooseDataCalc');
  const buttonTimer = document.getElementById('chooseTimer');

  const form = document.getElementById('datecalc');
  const formTimer = document.getElementById('timerSection')

 buttonDate.onclick = () => {
    return form.classList.toggle('visible');
  }
  buttonTimer.onclick = () => {
    return formTimer.classList.toggle('visible');
  }
}
export default changeModule;








// function changeModule() {
//
//   const button = document.getElementById('chooseDataCalc')
//   const form = document.getElementById('datecalc');
//
//   button.onclick = () => {
//     return form.classList.toggle('visible');
//   }
// }
// export default changeModule;