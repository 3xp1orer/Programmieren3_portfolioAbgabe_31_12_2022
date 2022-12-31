'use strict';
var id = 100;
window.itemlist = [];// request ans backend senden --> liste aller items
window.someItemslist = [];  
window.showedItemList = window.itemlist;
class Item {

    constructor(name, category, price, serialnumber, date_of_purchase, borrowing_history, destruction_history, location, status) {
        serialnumber = serialnumber || "";
        date_of_purchase = date_of_purchase || new Date();
        borrowing_history = borrowing_history || [];
        destruction_history = destruction_history || "";
        location = location || "undef";
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.serialnumber = serialnumber;
        this.date_of_purchase = date_of_purchase;
        this.borrowing_history = borrowing_history;
        this.destruction_history = destruction_history;
        this.location = location;
        this.status = status;
        id +=1;
    }
    




}



