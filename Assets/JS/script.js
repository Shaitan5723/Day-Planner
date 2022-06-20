var now = moment();
var currentDay = $('#currentDay')
var lead = $('.lead')
var hourBlock = $('.time-block')
var del = $('.fas fa-trash-alt')
var add = $('saveBtn')


//Adds current date to the header display//
currentDay.text(moment().format('MMMM Do YYYY'));
lead.append(currentDay)

//Sets the time of the workday to start at 9 AM of the day in question//
var workTime = moment().startOf("day").add(8, "hour");
var currentHour = moment().hour();

//Sets value 'i' as each hour of the work day//
for (var i = 9; i < 18; i++) {
  var timeBlock = workTime.add(1, "hour").format("h A");
  var currentTime;

  //sets timeblocks to respond to i depending on their relation//
    if (currentHour < i) {
      currentTime = 'future';
    } else if (currentHour == i) {
      currentTime = 'present';
    } else if (currentHour > i) {
      currentTime = 'past';
    }

    var createContainers = 
    `<container class="row" id='${i}'>
        <div class="hour col-2">${timeBlock}</div>
        <textarea class="event col-8 ${currentTime}"></textarea>
        <div class="col-1">
        <button type="submit" class="saveBtn">Save</button>
        </div>
        <div class="col-1">
        <i class="fas fa-trash-alt"> </i>
        </div>
    </container>`
    ;

$(".container-fluid").append(createContainers);

}

var eventContent = $(this).siblings('.event').val();
var eventTime = $(this).parent().attr('id');

add.click(function() {
  localStorage.setItem(eventTime,eventContent);
});

del.click(function() {
  localStorage.removeItem(eventTime,eventContent);
});
