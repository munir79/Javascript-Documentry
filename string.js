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


// 6.split

const line3='i am jakir hossain munir. i am from bangladesh. Bangladesh is a small coutry. i love my bangladesh.'
const dot=line3.split('.');
console.log(dot);

const sentence=line3.split(' ');
console.log(sentence);
const char=line3.split('');
console.log(char);

//7. slice

const partial=line3.slice(5,19);
console.log(partial);

//8. join
const lines=[
    'i am jakir hossain munir', 'i am from bangladesh' ,'Bangladesh is a small coutry', 'i love my bangladesh'
]

const line6=lines.join('.');
console.log(line6);
