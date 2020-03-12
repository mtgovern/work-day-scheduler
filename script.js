// moment 
const m = moment();

// variables for on save button click 
var event;
var hour;

// Current day displayed
console.log(m.format("dddd, MMMM Do"));

$("#currentDay").text(m.format("dddd, MMMM Do"));

// each timeblock is color coded to indicate whether it is in the past, present, or future
$(document).ready( function() {
    colorChange ();
    renderText ();
});

function colorChange () {
    
    var realTime = moment().hours();
    console.log("Current Time" + realTime);
    
    $(".input").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        console.log(timeTest);
        
        if (realTime > timeTest) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (realTime < timeTest) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}

// text for event is saved in local storage
$(".saveBtn").click(function() {
    event = $(this).siblings(".input").val();
    console.log(event);
    hour = $(this).siblings(".hour").text();
    console.log(hour);
    localStorage.setItem(hour, JSON.stringify(event));
    
    colorChange ();
    renderText ();
})

function renderText () {
    var event9 = JSON.parse(localStorage.getItem("9:00 am"));
    $("#9").val("");
    $("#9").val(event9);
    
    var event10 = JSON.parse(localStorage.getItem("10:00 am"));
    $("#10").val("");
    $("#10").val(event10);
    
    var event11 = JSON.parse(localStorage.getItem("11:00 am"));
    $("#11").val("");
    $("#11").val(event11);
    
    var event12 = JSON.parse(localStorage.getItem("12:00 pm"));
    $("#12").val("");
    $("#12").val(event12);
    
    var event1 = JSON.parse(localStorage.getItem("1:00 pm"));
    $("#13").val("");
    $("#13").val(event1);

    var event2 = JSON.parse(localStorage.getItem("2:00 pm"));
    $("#14").val("");
    $("#14").val(event2);

    var event3 = JSON.parse(localStorage.getItem("3:00 pm"));
    $("#15").val("");
    $("#15").val(event3);

    var event4 = JSON.parse(localStorage.getItem("4:00 pm"));
    $("#16").val("");
    $("#16").val(event4);

    var event5 = JSON.parse(localStorage.getItem("5:00 pm"));
    $("#17").val("");
    $("#17").val(event5);
}

