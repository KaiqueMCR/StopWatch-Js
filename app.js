let minutes = 0
let seconds = 0
let milliseconds = 0

let displayMinutes = milliseconds
let displaySeconds = seconds
let displayMilliseconds = milliseconds

let interval = ''
let lapNow = ''

let stopWatchStatus = 'stopped'

let startBtn = document.getElementById('startBtn')
let timerMinutes = document.getElementById('min')
let timerSeconds = document.getElementById('sec')
let timerMilliseconds = document.getElementById('msec')
let lapContainer = document.getElementById('laps')

function startWatch() {
  milliseconds++

  if (milliseconds / 100 == 1) {
    seconds++
    milliseconds = 0
    if (seconds / 60 == 1) {
      minutes++
      seconds = 0
    }
  }

  if (milliseconds < 10) {
    displayMilliseconds = '0' + milliseconds
  } else {
    displayMilliseconds = milliseconds
  }

  if (seconds < 10) {
    displaySeconds = '0' + seconds
  } else {
    displaySeconds = seconds
  }

  if (minutes < 10) {
    displayMinutes = '0' + minutes
  } else {
    displayMinutes = minutes
  }

  timerMilliseconds.innerHTML = displayMilliseconds
  timerSeconds.innerHTML = displaySeconds
  timerMinutes.innerHTML = displayMinutes
}

function startStop() {
  if (stopWatchStatus === 'stopped') {
    interval = setInterval(() => {
      startWatch()
    }, 10)
    stopWatchStatus = 'running'
    startBtn.innerHTML = 'stop'
  } else {
    clearInterval(interval)
    stopWatchStatus = 'stopped'
    startBtn.innerHTML = 'start'
  }
}

function reset() {
  clearInterval(interval)
  minutes = 0
  seconds = 0
  milliseconds = 0
  displayMinutes = 0
  displaySeconds = 0
  displayMilliseconds = 0
  stopWatchStatus = 'stopped'
  timerMilliseconds.innerHTML = '00'
  timerSeconds.innerHTML = '00'
  timerMinutes.innerHTML = '00'
  laps.innerHTML = ''
  startBtn.innerHTML = 'start'
}

function lap() {
  lapNow = `${displayMinutes}:${displaySeconds}:${displayMilliseconds}`

  lapSpan = document.createElement('span')
  lapSpan.innerHTML = lapNow

  lapContainer.appendChild(lapSpan)
}
