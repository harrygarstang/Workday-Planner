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
   for (i = startHour; i < endhour+1; i++) {

      
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

      // Check if the user input is already locally stored for this hour 
      var storedText = localStorage.getItem(i);
      if (storedText) {
         txtArea.val(storedText);
      }

      // Save button functionality 
      var saveButton = $('<button>');
   


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

// Check if the start time and end time are already stored in local storage
var storedStartTime = localStorage.getItem("startTime");
var storedEndTime = localStorage.getItem("endTime");

if (storedStartTime && storedEndTime) {
   // Convert stored values to integers
   storedStartTime = parseInt(storedStartTime);
   storedEndTime = parseInt(storedEndTime);
   // Generate the planner using the stored values
   generateWorkdayPlanner(storedStartTime, storedEndTime);
}

scheduleButton.addEventListener("click", function(){
   if (!storedStartTime && !storedEndTime) {
      var startTime = prompt("Please enter the start time in whole hours only (e.g. 9)");
      var endTime = prompt("Please enter the  end time (e.g. 17)");
   } else {
      var startTime = storedStartTime;
      var endTime = storedEndTime;
   }

   // Validate input by converting input to integers
   startTime = parseInt(startTime);
   endTime = parseInt(endTime);

   // store user input in local storage 
   localStorage.setItem("startTime", startTime);
   localStorage.setItem("endTime", endTime);

   // convert user input into integers
   storedstartTime = parseInt(localStorage.getItem("startTime"));
   storedendTime = parseInt(localStorage.getItem("endTime"));

   
   
   generateWorkdayPlanner(storedstartTime, storedendTime);
   // this.remove();

   
});


var resetButton = document.getElementById("resetBtn");
resetButton.addEventListener("click", function() {
   localStorage.clear();
   location.reload();
}

)


