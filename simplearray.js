//1. declare javascript
var age=[20,30,40,50];
console.log(age);
// 2.string assign in array
var name=['akas','kamal','rahim','rahman'];

// 3.array length 
console.log(age.length);

//4. get element by index
console.log(age[3]);
var element =age[3];
console.log(element);

//5. set element by index 
age[2]=77;
age[3]=89;
console.log(age);

// 6. find index of an element
var mobile=['nokia','samsung','sawmi','i-phone','redmi'];
var position=mobile.indexOf('samsung');
console.log(position);
 

// 7. push 
var country=['bangladesh','india','pakistan','saudi','america'];
country.push('germany');
console.log(country);
country.pop('england');
country.push('singapur');
console.log(country);
