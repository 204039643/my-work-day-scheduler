$(document).ready(function () {

    //DOM variables
    // var timeBlockEl = $("#time-block");
    // var rowEl = $("#row");
    // var hourEl = $("#hour");
    //var newDiv = $(<textarea class="form - control" id="text - area" rows="3"></textarea>);


    //JS variables
    var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "11pm", "12pm"];
    var militaryHour = [9, 10, 11, 12, 13, 14, 15, 24, 25];
    var currentHour = moment().format('ha');
    var newHour = 0
    var output = 0
    console.log("Current hour = " + currentHour);


    //functions
    buildCalender();

    //display the current day is displayed at the top of the calendar
    function currentDay() {
        var today = moment().format('dddd, MMMM Do');
        console.log(today);
        $("#currentDay").text(today);
    }

    //convert to 24 hour format for current hour
    function convertHour(hour) {
        if (hour.includes("am") !== "am") {
            output = parseInt(hour) + 12;
            console.log("24 hour time = " + output);
        } else {
            output = parseInt(hour);
        }
    }
    currentDay();


    // WHEN I scroll down THEN I am presented with time blocks for standard business hours
    // Build time blocks
    function buildCalender() {

        for (i = 0; i < hours.length; i++) {
            var hourEl = $("<div>");
            hourEl.attr("class", "col-1");
            hourEl.attr = ("id", "hourEl" + [i]);
            hourEl.text(hours[i]);
            $(".row").append(hourEl);
            console.log(hours[i]);

            var textAreaEl = $("<textarea>");
            textAreaEl.attr("class", "col-10 past");
            
            //set coloring: past = grey, present = white, future = green
            console.log("current i hour = " + militaryHour[i]);
            convertHour(currentHour);
            console.log("current 24 hour = " + output);
            if (militaryHour[i] === output) {
                textAreaEl.attr("class", "col-10 present");
            } else if (militaryHour[i] > output) {
                textAreaEl.attr("class", "col-10 future");
            }

            textAreaEl.attr("id", "textArea" + [i]);
            textAreaEl.attr("name", "textArea" + [i]);
            textAreaEl.attr("type", "text");
            $(".row").append(textAreaEl);

            var saveEl = $("<button>");
            saveEl.attr("class", "col-1");
            saveEl.attr("class", "saveBtn");
            saveEl.text("Save");
            saveEl.attr("id", "button" + [i]);
            $(".row").append(saveEl);

            // // WHEN I view the time blocks for that day THEN each time block is color-coded to indicate whether it is in the past, present, or future
            // // if (currentHour === hours[i]) {
            // //     textAreaEl[i].attr = ("class", "present");

        }

        // WHEN I click into a time block THEN I can enter an event
        // WHEN I click the save button for that time block THEN the text for that event is saved in local storage

        var textarea0 = $("#textArea0");
        $("#button0").on("click", function () {
            localStorage.setItem("textArea0", textarea0);
        }
        )
    };


    // WHEN I refresh the page THEN the saved events persist


});