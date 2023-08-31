const dayElement = document.querySelector('#day')
const hourElement = document.querySelector('#hour')
const minuteElement = document.querySelector('#minute')
const secondElement = document.querySelector('#second')

// contador de los segundos, minutos, horas y dias 
setInterval(() => {
  const date = new Date()
  const dayFromDate = date.getDate()
  const hourFromDate = date.getHours()
  const minuteFromDate = date.getMinutes()
  const secondFromDate = date.getSeconds()

  dayElement.innerText = dayFromDate
  hourElement.innerText = hourFromDate
  minuteElement.innerText = minuteFromDate
  secondElement.innerText = secondFromDate
}, 1000);