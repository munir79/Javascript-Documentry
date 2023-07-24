//1. Declare object

var mobile={
    name:'samsung',
    price:'10k',
    camera:"50pixel",
    battery:"5000 A"
}
var name1=mobile.name;
console.log(name1);
console.log(mobile);
//2.change value in object

mobile.price='20k';
console.log(mobile);
// properties of objects are : name, price 

// important
var properties=Object.keys(mobile);
console.log(properties);

var values=Object.values(mobile);
console.log(values);
