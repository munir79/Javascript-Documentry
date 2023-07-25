// 1. to lowercase

const userName='BlackPink';
const userInput='blackpink';

if(userName.toLowerCase()==userInput.toLowerCase()){
    console.log("valid User");

}
else{
    console.log("invalid User");
}

//2. to uppercase

const username1='Blackpink';
const userinput1='blackpink';

if(username1.toLowerCase()==userinput1.toUpperCase()){
    console.log('valid User');
}
else{
    console.log('invalid user');
}

//2. search with includes

const line='our country name is Bangladesh .Bangladesh is a small country';
const search='bangladesh';

const doesExist=line.toLowerCase().includes(search.toLowerCase());
console.log(doesExist);

//3. indexof

const line1='my name is jakir hossain munir '
console.log(line1.indexOf('my'));


//4. startswith
console.log(line1.startsWith('my'));

// 5. endswith

console.log(line1.endsWith('munir'));
