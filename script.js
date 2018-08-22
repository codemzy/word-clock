var date = Date.now();

var numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen'];

function getTime() {
  var now = new Date();
  var mins = now.getMinutes();
  var hours = now.getHours();
  return {minutes: mins, hours: hours};
};

function setTime() {
  // remove any active classes
  document.querySelectorAll('.active').forEach(function(active) {
    active.classList.remove('active');
  });
  // add time active classes
  document.querySelectorAll('.time').forEach(function(time) {
    time.classList.add('active');
  });
  var time = getTime();
  var hour = time.hours <= 12 ? time.hours : time.hours - 12; // change from 24 hour
  var minutes = time.minutes;
  // set minutes
  function setMinutes(mins) {
    if (mins === 30) {
      document.querySelector('#minutes .half').classList.add('active');
    } else if (mins === 15) {
      document.querySelector('#minutes .quarter').classList.add('active');
    } else {
      if (mins <= 13) {
        document.querySelector('#minutes .' + numberWords[mins]).classList.add('active');
      } else {
        mins >= 20 ? document.querySelector('#minutes .twenty').classList.add('active') : document.querySelector('#minutes .teen').classList.add('active'); // twenty or teen
        mins%10 ? document.querySelector('#minutes .' + numberWords[mins%10]).classList.add('active') : false; // if minutes remaining
      }
      // minutes / minute word
      if (mins !== 15 && mins > 1) {
        document.querySelector('#minutes .minutes').classList.add('active');
      } else if (mins === 1) {
        document.querySelector('#minutes .minute').classList.add('active');
      }
    }
  }
  // set past / to / oclock
  if (minutes === 0) {
    document.querySelector('.oclock').classList.add('active');
  } else if (minutes > 0 && minutes <= 30) {
    setMinutes(minutes);
    // add past active classes
    document.querySelectorAll('.past').forEach(function(past) {
      past.classList.add('active');
    });
  } else if (minutes > 30) {
    document.querySelector('.to').classList.add('active');
    var minutesLeft = 60 - minutes;
    setMinutes(minutesLeft);
  }
  // set hour
  document.querySelector('#hours #' + numberWords[hour]).classList.add('active');
  // am / pm
  document.querySelector(time.hours < 12 ? '.am' : '.pm').classList.add('active');
}

// run function every second
setInterval(setTime, 1000);
