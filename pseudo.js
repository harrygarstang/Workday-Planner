// TODO: 4. What is the current time in the format: hours:minutes:seconds

function CurrentTime() {
   var timeNow = moment().format('DD MMM YYYY [at] hh:mm:ss a');
   $('#currentDay').text(timeNow);
}
setInterval(CurrentTime, 1000);
// var today = moment();
// $("#currentDay").text(today.format("Do MMMM YYYY HH:mm:ss")); 

var plannerContainer = $('#plannerContainer');

function generateWorkdayPlanner(startHour, endhour) {
   for (i = startHour; i < endhour; i++) {

      // // Dynamically create row 
      // var rowBlock = $('<div>');
      // rowBlock.attr('class','')
      // Dynamically create time-block
      var timeBlock = $("<div>");
      timeBlock.attr('class', 'row time-block');

      // Create a column to display the time
      var timeColumn = $("<div>");
      timeColumn.attr('class', 'col-lg-1 col-md-1 hour');
      timeColumn.text(i);

      // Create an area for the text
      var txtArea = $('<textarea>');
      txtArea.attr('class', 'col-lg-10 col-md-10 past');
      txtArea.attr('cols', '100');

      // Create the button for saving 
      var saveButton = $('<button>');
      saveButton.attr('class', 'fa fa-save col-lg-1 col-md-1 saveBtn');


      // Append the dynamically created timeblocks 
      timeBlock.append(
         timeColumn,
         txtArea,
         saveButton
      );
      plannerContainer.append(timeBlock);

   }
}

var scheduleButton = document.getElementById("userScheduleBtn");
button.addEventListener

generateWorkdayPlanner(9, 17);
