var date = Date.now();

var numberWords = ['zero', 'one', 'two', 'three', 'four', 'five'];

function getTime() {
  var now = new Date();
  var mins = now.getMinutes();
  var hours = now.getHours();
  return {minutes: mins, hours: hours};
};

function setTime() {
  var time = getTime();
  var hour = time.hours <= 12 ? time.hours : time.hours - 12; // change from 24 hour
  // set hour
  document.querySelector('#hours #' + numberWords[hour]).classList.add('active');
}


