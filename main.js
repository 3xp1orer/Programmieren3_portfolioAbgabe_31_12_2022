'use strict';

/*
// heatmapElement.innerHTML = "<p>heatmap</p>"           
//innerHTML überschreibt den gesamten inhalt inhalt
const calendarElement = document.getElementById("calendar");
const monthNameEl = document.getElementById("month-name");
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let selectedMonth = 0;
addEventListener('DOMContentLoaded', (event) => {main();});

monthNameEl.innerText = MONTHS[selectedMonth];
*/   
/* 
//Calender Heatmap switch year
function onBackwardClicked(){
    if(selectedMonth === 0){return;}
    selectedMonth--;
    monthNameEl.innerText = MONTHS[selectedMonth];
}
function onForwardClicked(){
    if(selectedMonth === 11){return;}
    selectedMonth++;
    monthNameEl.innerText = MONTHS[selectedMonth];
}

*/


//items templates
var iPhone1 = new Item('iPhoneX', 'smartphone', '400$', '4u2pIN', new Date().toISOString().slice(0, 10), [], 'Office');
var tablet1 = new Item('Lenovo x1 Tablet', 'tablet', '280$', 'China4win', "2015-11-12", [], 'Room 2');
var HDMItoVGA = new Item('HDMI to VGA - cable', 'connectors', '11$', '4u2c0NN3c7', new Date().toISOString().slice(0, 10), [], 'Room 3');
window.itemlist.push(iPhone1);
window.itemlist.push(tablet1);
window.itemlist.push(HDMItoVGA);

addHtmlTableRow();








//dynamic item list
function createItem(){
    // catch data from form
    var name                = document.getElementById("name").value,
        category            = document.getElementById("category").value,
        price               = document.getElementById("price").value,
        serialnumber        = document.getElementById("serialnumber").value,
        date_of_purchase    = document.getElementById("date_of_purchase").value,
        borrowing_history   = document.getElementById("borrowing_history").value,
        destruction_history = document.getElementById("destruction_history").value,
        location            = document.getElementById("location").value,
        status              = document.getElementById("status").value,
        item                = new Item(name, category, price, serialnumber, date_of_purchase, borrowing_history, destruction_history, location, status);
    
    window.itemlist.push(item);
    //window.showedItemList.push(item);//?!
    //console.log(window.itemlist);
    addHtmlTableRow();
}

// add rows item table
function addHtmlTableRow(){
    var table       = document.getElementById("dynamic_list"),
        tablebody   = table.getElementsByTagName("tbody")[0];
    table.getElementsByTagName("tbody")[0].innerHTML = "";
    for(var item of window.showedItemList){
        var newRow  = tablebody.insertRow(table.length);
        newRow.classList.add("tablerow");
        newRow.classList.add(item.id);
        newRow.addEventListener('click', () => {
                alert(JSON.stringify(item));
                //oppen form with data
                getDataForm(item);
          });
        console.log(item);
        
        //set table values
        newRow.insertCell(0).innerHTML = item.id;
        newRow.insertCell(1).innerHTML = item.name;
        newRow.insertCell(2).innerHTML = item.category;
        newRow.insertCell(3).innerHTML = item.price;
        newRow.insertCell(4).innerHTML = item.serialnumber;
        newRow.insertCell(5).innerHTML = item.date_of_purchase;
        newRow.insertCell(6).innerHTML = item.borrowing_history;
        newRow.insertCell(7).innerHTML = item.destruction_history;
        newRow.insertCell(8).innerHTML = item.location;
        newRow.insertCell(9).innerHTML = item.status;
    }
}


/*
//updates table
function replaceTable() {
    const old_tbody = document.getElementById("itemslist")
    const new_tbody = document.createElement("tbody");
    old_tbody.parentNode.replaceChild(new_tbody, old_tbody)
}
*/




//on row button click
//clickedRow.addEventListener("click", );
// onRowClick
/*
document.querySelector(".tablerow").addEventListener('click', function(event) {
    console.log(event.target.tagName);
    if (event.target.tagName === 'TR') {
        // read tablerow data
        var rowData = event.target.cells;
        console.log(rowData);
    }
});

jQuery(function($){
    $(".masterskutd").on("click", function(e){
        e.preventDefault();
        var $tr = $(this).closest('tr');
        $tr.addClass('clicked');
        console.log($this).data('sku');
    })
})
*/



/*
function getDataRow(e){
    e.preventDefault();
    
}
function getQueryselector(string){
    document.querySelector(`.tablerow ${string}`);
}
*/








//on form button click
const   popup       = document.querySelector(".popup"),
        form        = document.querySelector(".form"),
        submitInput = document.querySelector("#createItem_button"),
        submitEdit  = document.querySelector("#editItem_button"),
        submitItem  = document.querySelector("#deleteItem_button");
function getDataForm(e){
    e.preventDefault();
    createItem();
    var formData = new FormData(form);
    alert(`NEW ITEM CREATED:    ${formData.get('name')} - ${formData.get('category')} - ${formData.get('price')} - ${formData.get('serialnumber')}`);
    document.querySelector(".popup").classList.remove("active");
}
//TODO
/*
function edit(e){
    e.preventDefault();
}

function deletee(e){
    e.preventDefault();
    console.log(document.getElementById("id").value);
    for(var i in window.itemlist){
        if(i.id == document.getElementById("id").value){
            window.itemlist.pop(item);
        }else{;}
    }
    alert(`DELETED:    ${formData.get('name')} - ${formData.get('category')} - ${formData.get('price')} - ${formData.get('serialnumber')}`);
    document.querySelector(".popup").classList.remove("active");
}

submitEdit.addEventListener("click", edit, false);
submitItem.addEventListener("click", deletee, false);
*/
submitInput.addEventListener("click", getDataForm, false);


//add search bar
const searchIcon    = document.querySelector(".searchicon"),
      mysearch      = document.querySelector("#mysearch"),
      search        = document.querySelector(".search");
searchIcon.onclick  = function(){
    search.classList.toggle("active");
} 
mysearch.addEventListener("input",e => {
    const value = e.target.value;
    console.log(value);
    searchItemNameType(value);
});
//searchfunktion(searchInput) erstellen über itemarray.name itemarray.category iterrieren
function searchItemNameType(value){
    window.itemslist = window.itemlist.filter(
        e => e.name.match(value) || e.category.match(value)
    );
    console.log(window.itemslist);
    //hier muss noch die aktuelle liste durch die matchliste(window.someItemslist) der suche ersetzt werden
}



//POPUP show and hide
document.querySelector("#createNew_item").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
});







/*
var student1 = new Student('0000000', 'Max', 'Mustermann', 'max.mustermann@student.fhws.de', [], []);
*/