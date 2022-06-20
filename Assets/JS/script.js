var currentDay = $('#currentDay')
var lead = $('.lead')
var hourBlock = $('.time-block')



//Adds current date to the header display//
currentDay.text(moment().format('MMM DD, YYYY'));
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

    //Creats the timeblocks for the tasks to be added into//
    var createContainers = 
    `<container class="row" id=${i}>
        <div class="hour col-2">${timeBlock}</div>
        <textarea class='event col-8 ${currentTime} ${i}'></textarea>
        <div class="col-1">
        <button type="submit" class="saveBtn">Save</button>
        </div>
        <div class="col-1">
        <i class="fas fa-trash-alt" id='del'> </i>
        </div>
    </container>`
    ;
//appends the created timeblocks into the container//
$(".container-fluid").append(createContainers);

//gets items from local storage depending on the id of the container//
$(`${i}`).val(localStorage.getItem(`${i}`));

}


var del = $('#del')
var add = $('.saveBtn')

//add button saves content to local storage//
add.on('click', function() {
  console.log('add button clicked');
  var eventContent = $(this).siblings('.event').val();
  var eventTime = $(this).parent().attr('id');
  localStorage.setItem(eventTime, eventContent);
});

//delete button deletes content in local storage//
del.on('click', function() {
  console.log('del button clicked');
  var eventContent = $(this).siblings('.event').val();
  var eventTime = $(this).parent().attr('id');
  localStorage.removeItem(eventTime, eventContent);
});

