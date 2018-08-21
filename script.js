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
  } else if (minutes <= 5 || minutes >= 55 ) {
    document.querySelector('#oclock').classList.add('active');
  } else if (minutes < 10) {
    
  }
  // set hour
  document.querySelector('#hours #' + numberWords[hour]).classList.add('active');
}

// run function every second
setInterval(setTime, 1000);
