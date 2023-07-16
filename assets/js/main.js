var time = 0
var go = 1
var live = 3
var score = 0
var a;
var b;
var c;
var d;
var correct;
var ques;
var ans;
var tick = 0;

var num = Math.floor((Math.random() * 40) + 1);


function buy() {
    if (score >= 50) {
        score = score - 50
        live++
    }
    else {
        swal("☆ You need 50points to buy 1 life.☆")
    }
}


setInterval(function(){
  if (time > 0) {
      time--
  }
}, 1000)

setInterval(function() {
 
 q.innerHTML = ques
 btn1.innerHTML = a
 btn2.innerHTML = b
 btn3.innerHTML = c
 btn4.innerHTML = d
 scores.innerHTML = "Score: " + score
 lives.innerHTML = "Lives: " + live
 
 if (live == 0) {
     result.innerHTML = "Game Over"
     q.innerHTML = ""
     btn1.style.display = "none"
     btn2.style.display = "none"
     btn3.style.display = "none"
     btn4.style.display = "none"
 }
 
 if (tick == 1 && correct == a) {
  btn1.style.backgroundColor = "#2ECC71"; 
  /*#28B463*/   
 }
 
 if (tick == 1 && correct == b) {
  btn2.style.backgroundColor = "#2ECC71";  
 }
 
 if (tick == 1 && correct == c) {
  btn3.style.backgroundColor = "#2ECC71";  
 }
 
 if (tick == 1 && correct == d) {
  btn4.style.backgroundColor = "#2ECC71";  
 }
 
 
 if (time == 0 && go == 1) {
  result.innerHTML = ""
  tick = 0
  
  btn1.style.pointerEvents = "auto"
  btn2.style.pointerEvents = "auto"
  btn3.style.pointerEvents = "auto"
  btn4.style.pointerEvents = "auto"
  
  btn1.style.backgroundColor = "white"; 
  btn2.style.backgroundColor = "white"; 
  btn3.style.backgroundColor = "white"; 
  btn4.style.backgroundColor = "white"; 
 
 
   num = Math.floor((Math.random() * 40) + 1);
   
   switch(num) {
 case 1:
   ques = "The match ____ before we reached the field" 
   a = "start"
   b = "started"
   c = "have started"
   d = "had started"
   correct = "had started"
   break;
   
 case 2:
   ques = "I shall wait here until he ____ back" 
   a = "come"
   b = "comes"
   c = "came"
   d = "will come"
   correct = "comes"
   break;
   
 case 3:
   ques = "Hurry up, the taxi ____ waiting" 
   a = "is"
   b = "has been"
   c = "had been"
   d = "have been"
   correct = "is"
   break; 
      
 case 4:
   ques = "He ____ here until you return" 
   a = "will stay"
   b = "would stay"
   c = "stays"
   d = "None of these"
   correct = "will stay"
   break;  

 case 5:
   ques = "When he came, it ____ all over" 
   a = "was"
   b = "will be"
   c = "had been"
   d = "None of these"
   correct = "was"
   break;
 
 case 6:
   ques = "When he started for office, it ____ raining" 
   a = "was"
   b = "has been"
   c = "had been"
   d = "None of these"
   correct = "was"
   break; 
   
 case 7:
   ques = "Our teacher ____ to London last year" 
   a = "went"
   b = "has gone"
   c = "had gone"
   d = "gone"
   correct = "went"
   break;  
 
 case 8:
   ques = "Switzerland is ____ European country" 
   a = "a"
   b = "an"
   c = "the"
   d = "None of these"
   correct = "a"
   break; 
 
 case 9:
   ques = "We will stay here for ____ while" 
   a = "little"
   b = "a little"
   c = "the little"
   d = "None of these"
   correct = "a little"
   break;  

 case 10:
   ques = "We have only ____ minutes to spare" 
   a = "few"
   b = "a few"
   c = "the few"
   d = "None of these"
   correct = "a few"
   break;          
   
 case 11:
   ques = "Reading is ____ useful habit" 
   a = "a"
   b = "an"
   c = "the"
   d = "None of these"
   correct = "a"
   break;          
 
 case 12:
   ques = "I can depend on ____ friends I have" 
   a = "few"
   b = "a few"
   c = "the few"
   d = "None of these"
   correct = "the few"
   break;            
      
 case 13:
   ques = "We are proud ____ our country" 
   a = "for"
   b = "in"
   c = "with"
   d = "of"
   correct = "of"
   break;
   
 case 14:
   ques = "I wrote the note ____ black ink" 
   a = "with"
   b = "in"
   c = "by"
   d = "of"
   correct = "in"
   break;  
   
 case 15:
   ques = "Please send a reply ____ my letter" 
   a = "to"
   b = "of"
   c = "for"
   d = "in"
   correct = "to"
   break;
   
 case 16:
   ques = "I shall look ____ the complaint" 
   a = "for"
   b = "about"
   c = "into"
   d = "in"
   correct = "into"
   break; 
   
 case 17:
   ques = "The president presided ____ the meeting" 
   a = "over"
   b = "at"
   c = "in"
   d = "into"
   correct = "over"
   break;   

 case 18:
   ques = "My father was angry ____ my failure" 
   a = "for"
   b = "at"
   c = "in"
   d = "on"
   correct = "at"
   break;  
   
 case 19:
   ques = "I cannot part ____ this book" 
   a = "with"
   b = "from"
   c = "of"
   d = "by"
   correct = "with"
   break;          
   
 case 20:
   ques = "We all sympathise ____ the poor man" 
   a = "for"
   b = "about"
   c = "with"
   d = "by"
   correct = "with"
   break;          
   
 case 21:
   ques = "Do not boast ____ your wealth" 
   a = "in"
   b = "for"
   c = "about"
   d = "of"
   correct = "of"
   break; 
   
 case 22:
   ques = "The lame man lives ____ begging" 
   a = "with"
   b = "from"
   c = "by"
   d = "on"
   correct = "by"
   break;          
   
 case 23:
   ques = "He often suffers ____ illness" 
   a = "in"
   b = "from"
   c = "by"
   d = "with"
   correct = "from"
   break;          
   
 case 24:
   ques = "I bought this pen ____ one dollar" 
   a = "by"
   b = "for"
   c = "with"
   d = "in"
   correct = "for"
   break; 
    
 case 25:
   ques = "Shoes are made ____ leather" 
   a = "of"
   b = "by"
   c = "with"
   d = "from"
   correct = "of"
   break;        
   
 case 26:
   ques = "A greedy man hankers ____ money" 
   a = "after"
   b = "for"
   c = "in"
   d = "with"
   correct = "after"
   break; 
 
 case 27:
   ques = "The tiger lives ____ flesh" 
   a = "by"
   b = "on"
   c = "with"
   d = "None of these"
   correct = "on"
   break;        
 
 case 28:
   ques = "The ship was bound ____ India" 
   a = "to"
   b = "off"
   c = "for"
   d = "None of these"
   correct = "for"
   break;          
 
 case 29:
   ques = "He is satisfied ____ his job" 
   a = "by"
   b = "at"
   c = "with"
   d = "in"
   correct = "with"
   break;        
   
 case 30:
   ques = "She is gifted ____ a sweet voice" 
   a = "of"
   b = "to"
   c = "by"
   d = "with"
   correct = "with"
   break;              

 case 31:
   ques = "I cannot agree ____ your proposal" 
   a = "at"
   b = "to"
   c = "with"
   d = "by"
   correct = "to"
   break;        
   
 case 32:
   ques = "I am indebted ____ you for your help" 
   a = "by"
   b = "of"
   c = "with"
   d = "to"
   correct = "to"
   break; 
   
 case 33:
   ques = "The boy was charged ____ stealing" 
   a = "for"
   b = "of"
   c = "with"
   d = "None of these"
   correct = "with"
   break;
   
 case 34:
   ques = "You should be polite ____ your seniors" 
   a = "to"
   b = "for"
   c = "with"
   d = "None of these"
   correct = "to"
   break; 
   
 case 35:
   ques = "____ of their property was destroyed in the flood" 
   a = "Many"
   b = "Much"
   c = "More"
   d = "None of these"
   correct = "Much"
   break; 
   
 case 36:
   ques = "Many guests were invited, but only ____ turned up" 
   a = "few"
   b = "a few"
   c = "the few"
   d = "None of these"
   correct = "a few"
   break; 
     
 case 37:
   ques = "This is ____ room I work in" 
   a = "a"
   b = "an"
   c = "the"
   d = "None of these"
   correct = "the"
   break; 
         
 case 38:
   ques = "Sri Lanka is ____ island" 
   a = "a"
   b = "an"
   c = "the"
   d = "None of these"
   correct = "an"
   break; 
  
 case 39:
   ques = "A busy man has ____ time to waste" 
   a = "little"
   b = "a little"
   c = "the little"
   d = "None of these"
   correct = "little"
   break; 
 
 case 40:
   ques = "The lady slipped while she ____ the steps" 
   a = "climbed"
   b = "was climbing"
   c = "has been climbing"
   d = "had been climbing"
   correct = "was climbing"
   break; 
                                                                                                                                               
}
 go = 0
 
 }
},1)


function btn01() {
  tick = 1
  ans = a
  if (a == correct) {
     result.innerHTML = "Correct ✅"
     score = score + 10 
 }  
 else {
     result.innerHTML = "Wrong ❌"
     live--
  btn1.style.backgroundColor = "red"; 
  btn2.style.backgroundColor = "white"; 
  btn3.style.backgroundColor = "white"; 
  btn4.style.backgroundColor = "white";   
 }
  time = 3
  go = 1
  btn1.style.pointerEvents = "none"
  btn2.style.pointerEvents = "none"
  btn3.style.pointerEvents = "none"
  btn4.style.pointerEvents = "none"
}

function btn02() {
  tick = 1
  ans = b
  if (b == correct) {
     result.innerHTML = "Correct ✅"
     score = score + 10 
 }  
 else {
     result.innerHTML = "Wrong ❌"
     live--
  
  btn2.style.backgroundColor = "red"; 
  btn1.style.backgroundColor = "white"; 
  btn3.style.backgroundColor = "white"; 
  btn4.style.backgroundColor = "white";    
 }
  time = 3
  go = 1
  btn1.style.pointerEvents = "none"
  btn2.style.pointerEvents = "none"
  btn3.style.pointerEvents = "none"
  btn4.style.pointerEvents = "none"
}

function btn03() {
  tick = 1
  ans = c
  if (c == correct) {
     result.innerHTML = "Correct ✅"
     score = score + 10
 }  
 else {
     result.innerHTML = "Wrong ❌"
     live--
  btn3.style.backgroundColor = "red"; 
  btn1.style.backgroundColor = "white"; 
  btn2.style.backgroundColor = "white"; 
  btn4.style.backgroundColor = "white";
 } 
  time = 3
  go = 1
  btn1.style.pointerEvents = "none"
  btn2.style.pointerEvents = "none"
  btn3.style.pointerEvents = "none"
  btn4.style.pointerEvents = "none"
}

function btn04() {
  tick = 1
  ans = d
  if (d == correct) {
     result.innerHTML = "Correct ✅"
     score = score + 10
 }  
 else {
     result.innerHTML = "Wrong ❌"
     live--
   
  btn4.style.backgroundColor = "red"; 
  btn1.style.backgroundColor = "white"; 
  btn2.style.backgroundColor = "white"; 
  btn3.style.backgroundColor = "white";    
 }
  time = 3
  go = 1
  btn1.style.pointerEvents = "none"
  btn2.style.pointerEvents = "none"
  btn3.style.pointerEvents = "none"
  btn4.style.pointerEvents = "none"
}

0