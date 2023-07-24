// 1.while loop
var num=0;
while(num<=10){
    console.log(num);
    num++;
}
// 2. even number
var num=0;
while(num<=10){
    console.log(num);
    num=num+2;
}
// 3.for loop 
for(var i=0; i<=10;i++){
    console.log(i);
}

// 4.array in loop 

var num=[20,23,55,100,300];
for (var i=0; i<num.length;i++){
    console.log(num[i]);

}

for (var i=0; i<num.length;i++){
    var number=num[i];
    console.log(number);
}


//5. Break

for(var i=0;i<=20;i++){
    console.log(i);
    if(i>100){
        break;
    }
}

// 6. break in while loop
var i=0;
while(i<=20){
    console.log(i);
    i++;
    if(i>10){
        break;
    }
 
}

// 7.string in break
var items=['mobile','sunglass','leptop','watch','pen'];
var i=0;
while(i<=items.length){
    console.log(items[i]);
    i++;
    if(items[i]=='leptop'){
        break;
    }
  
    
}

