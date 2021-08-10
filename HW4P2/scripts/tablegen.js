/*
    File: tablegen.js
    GUI Assignment:  Using the jQuery Plugin/UI with Your Dynamic Table
    Logan Inwood UMass Lowell Computer Science, logan_inwood@student.uml.edu
    Copyright (c) 2021 by Logan Inwood.  All rights reserved.  May be freely copied or 
    excerpted for educational purposes with credit to the author.
    updated by LI on August 9, 2021 at 5:00 PM
    */

function generate_table(){
    // Clear all potentially created HTML from earlier submission
    document.getElementById('multtable').innerHTML = "";
    document.getElementById("cminerror").innerHTML = "";
    document.getElementById("cmaxerror").innerHTML = "";
    document.getElementById("rmaxerror").innerHTML = "";
    document.getElementById("rminerror").innerHTML = "";
    // Get Values entered, round them
    var cmin = Math.round(Number(document.getElementById("cmin").value));
    var cmax = Math.round(Number(document.getElementById("cmax").value));
    var rmin = Math.round(Number(document.getElementById("rmin").value));
    var rmax = Math.round(Number(document.getElementById("rmax").value));
    // Swap inputs if the min is larger than the max
    if (cmin > cmax){
        var temp = cmin;
        document.getElementById("cmin").value = cmax;
        $("#slidercmin").slider('value', cmax);
        document.getElementById("cmax").value = cmin;
        $("#slidercmax").slider('value', cmin);
        cmin = cmax;
        cmax = temp;
    }
    if (rmin > rmax){
        var temp = rmin;
        document.getElementById("rmin").value = rmax;
        $("#sliderrmin").slider('value', rmax);
        document.getElementById("rmax").value = rmin;
        $("#sliderrmax").slider('value', rmin);
        rmin = rmax;
        rmax = temp;
    }
    // Begin table generation by creating table elements
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    var rhead = document.createElement('tr');
    rhead.appendChild(document.createElement('th'))
    // Create table header
    for(var i = rmin; i <= rmax; i++){
        heading_i = document.createElement('th');
        heading_i.innerHTML = i;
        rhead.appendChild(heading_i);
    }
    thead.appendChild(rhead);
    table.appendChild(thead);
    // For each row: Create row header using column value.
    // Then add table data containing row value * column value
    for(var i = cmin; i <= cmax; i++){
        row_i = document.createElement('tr');
        row_i1 = document.createElement('th');
        row_i1.innerHTML = i;
        row_i.appendChild(row_i1);
        for(var j = rmin; j <= rmax; j++){
            row_ij = document.createElement('td');
            row_ij.innerHTML = i * j;
            row_i.appendChild(row_ij);
        }
        tbody.appendChild(row_i);
    }
    // Add table body to table, and insert into the div which contains the table
    table.appendChild(tbody);
    document.getElementById('multtable').appendChild(table);
    return;
}   

function add_tab(){
    var tabdiv = document.getElementById("tabs");
    var table = document.getElementById("multtable").cloneNode(true);
    var tablist = document.getElementById("tablist");
    var tabcount = tablist.children.length;
    var newlabel = document.createElement("li");
    var newlink = document.createElement("a");
    newlink.href = "#tabs-" + (tabcount + 1);
    newlink.text = "Tab " + (tabcount + 1);
    newlabel.appendChild(newlink);
    tablist.appendChild(newlabel);
    var newtabdiv = document.createElement("div");
    newtabdiv.id = "#tabs-" + (tabcount + 1);
    newtabdiv.appendChild(table);
    tabdiv.appendChild(newtabdiv);
    if (tabcount == 0){
        $("#tabs").tabs();
    }
    else{
        $("#tabs").tabs("refresh");
    }
    return;
}