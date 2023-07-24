// //1. Declare object

// var mobile={
//     name:'samsung',
//     price:'10k',
//     camera:"50pixel",
//     battery:"5000 A"
// }
// var name1=mobile.name;
// console.log(name1);
// console.log(mobile);
// //2.change value in object

// mobile.price='20k';
// console.log(mobile);
// // properties of objects are : name, price 

// // important
// var properties=Object.keys(mobile);
// console.log(properties);

// var values=Object.values(mobile);
// console.log(values);

//3. loop in object

var items={
    mobile:3,
    leptop:4,
    watch:7,
    pen:10,
    car:10
}

var propName=Object.keys(items);

for (var i=0;i<propName.length;i++){
    var prop=propName[i];
   var  propvalue=items[prop];
   console.log(prop,propvalue);
}
