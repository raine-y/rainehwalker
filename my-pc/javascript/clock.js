function Time() {

    // Creating object of the Date class
    var date = new Date();
    
    // Get current hour
    var hour = date.getHours();
    // Get current minute
    var minute = date.getMinutes();
    
    /* if (hour == 0) {
    hour = 12;
    } else {
    if (hour > 12) {
    hour = hour - 12;
    }
    } */
    
    // Updating hour and minutes
    // if they are less than 10
    hour = update(hour);
    minute = update(minute);
    
    // Adding time elements to the div
    document.getElementById("digital-clock").innerText = hour + " : " + minute;
    // Set Timer to 1 sec (1000 ms)
    setTimeout(Time, 1000);
    }
    
    // Function to update time elements if they are less than 10
    // Append 0 before time elements if they are less than 10
    function update(t) {
    if (t < 10) {
    return "0" + t;
    }
    else {
    return t;
    }
    }
    
Time();