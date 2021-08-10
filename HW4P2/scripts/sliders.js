/*
    File: sliders.js
    GUI Assignment:  Using the jQuery Plugin/UI with Your Dynamic Table
    Logan Inwood UMass Lowell Computer Science, logan_inwood@student.uml.edu
    Copyright (c) 2021 by Logan Inwood.  All rights reserved.  May be freely copied or 
    excerpted for educational purposes with credit to the author.
    updated by LI on August 9, 2021 at 9:00 PM
    */

$(function(){
    // Set parameters for each slider
    $("#sliderrmin").slider({
        max: 100,
        min: -100,
        value: 0, // When the slider is moved, change the value of the input box and if the form is valid, generate a table
        slide: function( event, ui ) { 
            $("#rmin").val(ui.value);
            var validform = $("#numform").valid();
            if (validform){
                generate_table();
            }
        }, // If the slider stops moving, then check if the form is valid. If so, generate a table and create a new tab.
        stop: function( event, ui ) {
            $("#rmin").val(ui.value);
            var validform = $("#numform").valid();
            if (validform){
                generate_table();
                add_tab();
            }
        }
    });
    $("#slidercmin").slider({
        max: 100,
        min: -100,
        value: 0,
        slide: function( event, ui ) {
            $("#cmin").val(ui.value);
            var validform = $("#numform").valid();
            if (validform){
                generate_table();
            }
        },
        stop: function( event, ui ) {
            $("#cmin").val(ui.value);
            var validform = $("#numform").valid();
            if (validform){
                generate_table();
                add_tab();
            }
        }
    });
    $("#sliderrmax").slider({
        max: 100,
        min: -100,
        value: 0,
        slide: function( event, ui ) {
            $("#rmax").val(ui.value);
            var validform = $("#numform").valid();
            if (validform){
                generate_table();
            }
        },
        stop: function( event, ui ) {
            $("#rmax").val(ui.value);
            var validform = $("#numform").valid();
            if (validform){
                generate_table();
                add_tab();
            }
        }
    });
    $("#slidercmax").slider({
        max: 100,
        min: -100,
        value: 0,
        slide: function( event, ui ) {
            $("#cmax").val(ui.value);
            var validform = $("#numform").valid();
            if (validform){
                generate_table();
            }
        },
        stop: function( event, ui ) {
            $("#cmax").val(ui.value);
            var validform = $("#numform").valid();
            if (validform){
                generate_table();
                add_tab();
            }
        }
    });
    // Whenever the input field is changed, update the slider value and generate new table if form is valid
    $("#rmin").change(function(){
        var newval = $("#rmin").val();
        $("#sliderrmin").slider('value', newval);
        var validform = $("#numform").valid();
        if (validform){
            generate_table();
            add_tab();
        }
        return;
    })
    $("#cmin").change(function(){
        var newval = $("#cmin").val();
        $("#slidercmin").slider('value', newval);
        var validform = $("#numform").valid();
        if (validform){
            generate_table();
            add_tab();
        }
        return;
    })
    $("#rmax").change(function(){
        var newval = $("#rmax").val();
        $("#sliderrmax").slider('value', newval);
        var validform = $("#numform").valid();
        if (validform){
            generate_table();
            add_tab();
        }
        return;
    })
    $("#cmax").change(function(){
        var newval = $("#cmax").val();
        $("#slidercmax").slider('value', newval);
        var validform = $("#numform").valid();
        if (validform){
            generate_table();
            add_tab();
        }
        return;
    })
    
});