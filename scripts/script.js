$(document).ready(function () {

    //JS variables
    var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    var militaryHour = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    var currentHour = moment().format('ha');
    var newHour = 0
    var output = 0
    console.log("Current hour = " + currentHour);

    //Function Definitions

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

    // Build time blocks for standard business hors
    function buildCalender() {

        for (i = 0; i < hours.length; i++) {
            var hourEl = $("<div>");
            hourEl.attr("class", "col-md-1 hour");
            hourEl.attr = ("id", "hourEl" + [i]);
            hourEl.text(hours[i]);
            $(".row").append(hourEl);
            console.log(hours[i]);

            var textAreaEl = $("<textarea>");
            textAreaEl.attr("class", "col-md-10 hour past");

            //set coloring of text area: past = grey, present = red, future = green
            console.log("current i hour = " + militaryHour[i]);
            convertHour(currentHour);
            console.log("current 24 hour = " + output);

            //use military time (24 hour) to determine if timeslot is past, present, or future
            if (militaryHour[i] === output) {
                textAreaEl.attr("class", "col-10 hour present");
            } else if (militaryHour[i] > output) {
                textAreaEl.attr("class", "col-10 hour future");
            }

            textAreaEl.attr("id", "textArea" + [i]);
            textAreaEl.attr("name", "textArea" + [i]);
            textAreaEl.attr("type", "text");
            $(".row").append(textAreaEl);

            var saveEl = $("<button>");
            saveEl.attr("class", "col-md-1 saveBtn");
            saveEl.text("Save");
            saveEl.attr("id", "button" + [i]);
            $(".row").append(saveEl);

        }

        //Populate text areas from local storage upon page load
        var textRetrieve = localStorage.getItem("textArea0");
        $("#textArea0").text(textRetrieve);
        var textRetrieve = localStorage.getItem("textArea1");
        $("#textArea1").text(textRetrieve);
        var textRetrieve = localStorage.getItem("textArea2");
        $("#textArea2").text(textRetrieve);
        var textRetrieve = localStorage.getItem("textArea3");
        $("#textArea3").text(textRetrieve);
        var textRetrieve = localStorage.getItem("textArea4");
        $("#textArea4").text(textRetrieve);
        var textRetrieve = localStorage.getItem("textArea5");
        $("#textArea5").text(textRetrieve);
        var textRetrieve = localStorage.getItem("textArea6");
        $("#textArea6").text(textRetrieve);
        var textRetrieve = localStorage.getItem("textArea7");
        $("#textArea7").text(textRetrieve);
        var textRetrieve = localStorage.getItem("textArea8");
        $("#textArea8").text(textRetrieve);

        // Event listeners for save button associated with text area
        // Save text area strings to local storage for that timeslot

        var textarea0 = $("#textArea0");
        $("#button0").on("click", function () {
            localStorage.setItem("textArea0", textarea0.val());
        })
        var textarea1 = $("#textArea1");
        $("#button1").on("click", function () {
            localStorage.setItem("textArea1", textarea1.val());
        })
        var textarea2 = $("#textArea2");
        $("#button2").on("click", function () {
            localStorage.setItem("textArea2", textarea2.val());
        })
        var textarea3 = $("#textArea3");
        $("#button3").on("click", function () {
            localStorage.setItem("textArea3", textarea3.val());
        })
        var textarea4 = $("#textArea4");
        $("#button4").on("click", function () {
            localStorage.setItem("textArea4", textarea4.val());
        })
        var textarea5 = $("#textArea5");
        $("#button5").on("click", function () {
            localStorage.setItem("textArea5", textarea5.val());
        })
        var textarea6 = $("#textArea6");
        $("#button6").on("click", function () {
            localStorage.setItem("textArea6", textarea6.val());
        })
        var textarea7 = $("#textArea7");
        $("#button7").on("click", function () {
            localStorage.setItem("textArea7", textarea7.val());
        })
        var textarea8 = $("#textArea8");
        $("#button8").on("click", function () {
            localStorage.setItem("textArea8", textarea8.val());
        })

    };

    //function calls
    buildCalender();
    currentDay();
});