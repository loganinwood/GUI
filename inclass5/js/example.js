// ADD NEW ITEM TO END OF 
var newli = document.createElement("li");
newli.innerText = "cream"
var lastNode = document.getElementById("four");
lastNode.parentNode.insertBefore(newli, lastNode.nextSibling);
// ADD NEW ITEM START OF LIST
var newli = document.createElement("li");
newli.innerText = "kale"
var firstNode = document.getElementById("one");
firstNode.parentNode.insertBefore(newli, firstNode);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var list = document.getElementsByTagName('ul')[0];
var listitems = list.children;
for(var i = 0; i < listitems.length; i++){
    listitems[i].className = 'cool';
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var groc = document.getElementsByTagName('h2')[0];
var cur = groc.innerHTML;
groc.innerHTML = cur + "<span>" + listitems.length + "</span>";