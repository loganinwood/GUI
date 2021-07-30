document.getElementById('submit').addEventListener("click", generate_table);

function generate_table(){
    var cmin = document.getElementById("cmin").value;
    var cmax = document.getElementById("cmax").value;
    var rmin = document.getElementById("rmin").value;
    var rmax = document.getElementById("rmax").value;
    document.getElementById('multtable').innerHTML = "";
    document.getElementById("cminerror").innerHTML = "";
    document.getElementById("cmaxerror").innerHTML = "";
    document.getElementById("rmaxerror").innerHTML = "";
    document.getElementById("rminerror").innerHTML = "";
    if (isNaN(cmin) || cmin > 250 || cmin < -250){
        document.getElementById("cminerror").innerHTML = "Number must be between -250 and 250"
        return;
    }
    if (isNaN(cmax) || cmax > 250 || cmax < -250){
        document.getElementById("cmaxerror").innerHTML = "Number must be between -250 and 250"
        return;
    }
    if(isNaN(rmax) || rmax > 250 || rmax < -250){
        document.getElementById("rmaxerror").innerHTML = "Number must be between -250 and 250"
        return;
    }
    if (isNaN(rmin) || rmin > 250 || rmin < -250){
        document.getElementById("rminerror").innerHTML = "Number must be between -250 and 250"
        return;
    }
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

    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    var rhead = document.createElement('tr');
    rhead.appendChild(document.createElement('th'));
    for(var i = rmin; i <= rmax; i++){
        heading_i = document.createElement('th');
        heading_i.innerHTML = i;
        rhead.appendChild(heading_i);
    }
    thead.appendChild(rhead);
    table.appendChild(thead);
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
    table.appendChild(tbody);
    document.getElementById('multtable').appendChild(table);
    return;
}   
