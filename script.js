var date = Date.now();

var numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];

function getTime() {
  var now = new Date();
  var mins = now.getMinutes();
  var hours = now.getHours();
  return {minutes: mins, hours: hours};
};

function setTime() {
  var time = getTime();
  var hour = time.hours <= 12 ? time.hours : time.hours - 12; // change from 24 hour
  var minutes = time.minutes;
  // set minutes
  if (minutes <= 0) {
    document.querySelector('#oclock').classList.add('active');
  } else if (minutes <= 5 || minutes >= 55) {
    document.querySelector('#mins-five').classList.add('active');
  } else if (minutes <= 10 || minutes >= 50) {
    document.querySelector('#mins-ten').classList.add('active');
  } else if (minutes <= 15 || minutes >= 45) {
    document.querySelector('#quarter').classList.add('active');
  } else if (minutes <= 20 || minutes >= 40) {
    document.querySelector('#twenty').classList.add('active');
  } else if (minutes <= 25 || minutes >= 35) {
    document.querySelector('#twenty').classList.add('active');
    document.querySelector('#mins-five').classList.add('active');
  } else if (minutes <= 30 || minutes >= 30) {
    document.querySelector('#half').classList.add('active');
  }
  if (minutes < 35) {
    document.querySelector('#past').classList.add('active');
  } else if (minutes >= 35) {
    document.querySelector('#to').classList.add('active');
  }
  // set hour
  document.querySelector('#hours #' + numberWords[hour]).classList.add('active');
}

// run function every second
setInterval(setTime, 1000);
