var now = moment();
var currentDay = $('#currentDay')
var lead = $('.lead')
var hourBlock = $('.time-block')

currentDay.text(moment().format('MMMM Do YYYY'));
lead.append(currentDay)

var workTime = moment().startOf("day").add(8, "hour");
var hour = moment().format("H");

for (var i = 9; i < 18; i++) {
  var timeSlot = workTime.add(1, "hour").format("HH A");
  var currentTime;

    if (hour < i) {
      currentTime = 'past';
    } else if (hour == i) {
      currentTime = 'present';
    } else if (hour > i) {
      currentTime = 'future';
    }

    hourBlock

}


