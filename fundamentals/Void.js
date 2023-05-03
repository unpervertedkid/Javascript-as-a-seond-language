let customer = [{}, null];

customer[0].name = "John";
customer[0].type = "Cappuccino";
customer[0].cream = "Heavy Cream";
customer[0].sweetener = "Sugar";
customer[0].size = "Large";
customer[0].price = 5.00;

customer[1] = {};
customer[1].name = "Jane";
customer[1].type = "Espresso";
customer[1].cream = "Light Cream";
customer[1].sweetener = "Sugar";
customer[1].size = "Medium";
customer[1].price = 4.00;

console.log(customer[0].name + " ordered a " + customer[0].size + " " + customer[0].type + " with " + customer[0].cream + " and " + customer[0].sweetener + " for $" + customer[0].price + ".");
console.log(customer[1].name + " ordered a " + customer[1].size + " " + customer[1].type + " with " + customer[1].cream + " and " + customer[1].sweetener + " for $" + customer[1].price + ".");
