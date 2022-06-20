var now = moment();
//var nowTime = (toString(now));//
var currentDay = $('#currentDay')
var lead = $('.lead')

currentDay.text(moment().format('MMMM Do YYYY'));
lead.append(currentDay)