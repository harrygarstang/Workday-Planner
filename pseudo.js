// TODO: 4. What is the current time in the format: hours:minutes:seconds
var today = moment();
$("#currentDay").text(today.format("Do MMMM YYYY")); 

var plannerContainer = $('#planner');

 function generateWorkdayPlanner(startHour,endhour){
    for(i=startHour; i<endhour;i++);

    // Dynamically create time-block
    var timeBlock = $("<div>");
    timeBlock.attr('class','row-time-block');

    // Create a column to display the time
    var timeColumn = $("<div>");
    timeColumn.attr('class', 'col-lg-1 col-md-1 hour');

    // Create an area for the text
    var txtArea = $('<textarea>');

    // Create the button for saving 

    // Append the dynamically created timeblocks 

 }

 generateWorkdayPlanner(9,17);