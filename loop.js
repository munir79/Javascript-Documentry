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

