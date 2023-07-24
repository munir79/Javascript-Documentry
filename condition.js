
// simple note
// 1. assaign :- " = "
// 2.is eqaual :- " ==  ,==="


//1. simple if else

var mybadget=500000;
iphonePrice=100000;
if(mybadget>iphonePrice){
    console.log("you are able to buy i phone");
}
else{
    console.log("sorry you have not enough budget");
}

// 2. 

var isgraduated=false ;
var wellInProgramming=true;
if(isgraduated==true && wellInProgramming==true){
    console.log('condition in ok for job');
}
else {
    console.log('not ok for government job');

}

if(isgraduated===true || wellInProgramming==true  ){
    console.log(" ok for remote job");
}

// grade problem in js

var marks=120;
 if(marks>100){
    console.log('your marks dosent exist');
}
else if(marks>=90){
    console.log('your Grade is : A+');
}
else if(marks>=80){
    console.log("your grade is :A+");
}
else if(marks>=70){
    console.log("your grade is:A");
}
else if(marks>=60){
    console.log("your grade id :A-");
}
else if(marks>=50){
    console.log("your grade is:B");
}
else if(marks>=40){
    console.log(" your grade is :c");

}
else if(marks>=33){
    console.log("Your grade is :D");
}
else if(marks<33){
    console.log("your grade is:F");
}

