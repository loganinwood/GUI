/*
    File: validate.js
    GUI Assignment:  Using the jQuery Plugin/UI with Your Dynamic Table
    Logan Inwood UMass Lowell Computer Science, logan_inwood@student.uml.edu
    Copyright (c) 2021 by Logan Inwood.  All rights reserved.  May be freely copied or 
    excerpted for educational purposes with credit to the author.
    updated by LI on August 9, 2021 at 5:00 PM
    */

$(function() {
    // Function to validate input
    $("#numform").validate({
        // List of rules for each input that must be followed
        rules: {
            rmin: {
                required: true,
                number: true,
                range: [-100, 100]
            },
            cmin: {
                required: true,
                number: true,
                range: [-100, 100]
            },
            rmax: {
                required: true,
                number: true,
                range: [-100, 100]
            },
            cmax: {
                required: true,
                number: true,
                range: [-100, 100]
            }
        },
      // Error messages for each rule for each input
        messages: {
            rmin: {
                required: "Empty parameter. Please enter a number -100 <= x <= 100",
                range: "Outside of range. Please enter a number -100 <= x <= 100",
                number: "Not a number. Please enter a number -100 <= x <= 100",
            },
            cmin: {
                required: "Empty parameter. Please enter a number -100 <= x <= 100",
                range: "Outside of range. Please enter a number -100 <= x <= 100",
                number: "Not a number. Please enter a number -100 <= x <= 100",
            },
            rmax: {
                required: "Empty parameter. Please enter a number -100 <= x <= 100",
                range: "Outside of range. Please enter a number -100 <= x <= 100",
                number: "Not a number. Please enter a number -100 <= x <= 100",
            },
            cmax: {
                required: "Empty parameter. Please enter a number -100 <= x <= 100",
                range: "Outside of range. Please enter a number -100 <= x <= 100",
                number: "Not a number. Please enter a number -100 <= x <= 100",
            },
        },  
        // Handles proper location of error messages
        errorPlacement: function(error, element){
            if (element.attr("name") == "rmin"){
                $("#rminerror").text("Row Min: " + error.text());
            }
            else if (element.attr("name") == "cmin"){
                $("#cminerror").text("Col Min: " + error.text());
            }
            else if (element.attr("name") == "cmax"){
                $("#cmaxerror").text("Col Max: " + error.text());
            }
            else if (element.attr("name") == "rmax"){
                $("#rmaxerror").text("Row Max: " + error.text());
            }
        }
    });
    // If form is submitted, check to make sure there are no validation errors.
    $("#submit").on('click', function(e) {
        var validform = $("#numform").valid();
        if (validform){
            generate_table();
        }
        else{ // If there are errors, clear out the previous table 
            $("#multtable").html("");
        }
        return;
    });
});