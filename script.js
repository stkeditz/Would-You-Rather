let currentWord="Apple";
let score=0;

let usedWords=["apple"];

document.getElementById("usedWords").innerHTML="<li>Apple</li>";

function submitWord(){

let input=document.getElementById("wordInput");

let word=input.value.trim();

if(word==""){
message("Enter a word.");
return;
}

if(usedWords.includes(word.toLowerCase())){
message("Word already used!");
return;
}

usedWords.push(word.toLowerCase());

score++;

document.getElementById("score").innerHTML=score;

currentWord=word;

document.getElementById("currentWord").innerHTML="Current Word : "+currentWord;

document.getElementById("usedWords").innerHTML+=
"<li>"+word+"</li>";

message("Good!");

input.value="";
}

function message(text){
document.getElementById("message").innerHTML=text;
}
