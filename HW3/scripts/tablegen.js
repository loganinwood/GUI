// Listener for submission
document.getElementById('submit').addEventListener("click", generate_table);

function generate_table(){
    // Clear all potentially created HTML from earlier submission
    document.getElementById('multtable').innerHTML = "";
    document.getElementById("cminerror").innerHTML = "";
    document.getElementById("cmaxerror").innerHTML = "";
    document.getElementById("rmaxerror").innerHTML = "";
    document.getElementById("rminerror").innerHTML = "";
    // Get Values entered
    var cmin = document.getElementById("cmin").value;
    var cmax = document.getElementById("cmax").value;
    var rmin = document.getElementById("rmin").value;
    var rmax = document.getElementById("rmax").value;
    var hasError = false;
    // Verify input and display error message if needed
    if (isNaN(cmin) || cmin > 250 || cmin < -250){
        document.getElementById("cminerror").innerHTML = "Number must be between -250 and 250"
        hasError = true;
    }
    if (isNaN(cmax) || cmax > 250 || cmax < -250){
        document.getElementById("cmaxerror").innerHTML = "Number must be between -250 and 250"
        hasError = true;
    }
    if(isNaN(rmax) || rmax > 250 || rmax < -250){
        document.getElementById("rmaxerror").innerHTML = "Number must be between -250 and 250"
        hasError = true;
    }
    if (isNaN(rmin) || rmin > 250 || rmin < -250){
        document.getElementById("rminerror").innerHTML = "Number must be between -250 and 250"
        hasError = true;
    }
    // Do not generate table if error in input
    if (hasError){
        return;
    }
    // Swap inputs if the min is larger than the max
    if (cmin > cmax){
        var temp = cmin;
        document.getElementById("cmin").value = cmax;
        document.getElementById("cmax").value = cmin;
        cmin = cmax;
        cmax = temp;
    }
    if (rmin > rmax){
        var temp = rmin;
        document.getElementById("rmin").value = rmax;
        document.getElementById("rmax").value = rmin;
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
