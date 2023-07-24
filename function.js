//1.function declaration

function add(){
    var a=30;
    var b=2;
    var sum= a+b;
    console.log(sum);
}
add();
add();

// 2.with single parameter

function add1(x){
    var sum1=2+x;
    console.log(sum1);
}
add1(4);

// 3.with double parameter

function add2(x,y){
    var sum=x+y;
    console.log(sum)
}
add2(20,30);

// 4.return value

function add3(x,y){
    var sum=x+y;
    return sum;
}
var result=add3(20,45);
console.log(result);

// 

