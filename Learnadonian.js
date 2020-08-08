/////HIDE THE OPTIONS/////
/////HIDE THE OPTIONS/////
/////HIDE THE OPTIONS/////
	document.getElementById("Options").style.display = "none";
	document.getElementById("reset").style.display = "none";
	document.getElementById("submit").style.display = "none";
	document.getElementById("home").style.display = "none";
	document.getElementById("idea").style.display = "none";
	document.getElementById("QuestionBoard").style.display = "none";
	document.getElementById("table0").style.display = "none";
	document.getElementById("table1").style.visibility = "hidden";
	document.getElementById("score").style.display = "none";
	document.getElementById("progressCode").style.display = "none";
	document.getElementById("submitcode").style.display = "none";

var y = 10;
var level = 1;
var code = "voda";

document.getElementById("New").onclick = function() {
	code = "voda";
	document.getElementById("table0").style.display = "block";
	for (var i = 1; i <= 10; i++) codecheck(i);
	for (var i = 1; i <= 10; i++) picklesson(i);	
	document.getElementById("tablewelcome").style.display = "none";
	document.getElementById("laura").style.display = "none";
	document.getElementById("instructionline").innerHTML = "Great!  Please start with Lesson I below.<br><br>More lessons will become available to you as you progress.<br>Progress codes are provided after each lesson so you can always pick up where you left off.";
};

document.getElementById("Code").onclick = function() {
	document.getElementById("progressCode").style.display = "block";
	document.getElementById("submitcode").style.display = "block";
	for (var i = 1; i <= 10; i++) codecheck(i);
	for (var i = 1; i <= 10; i++) picklesson(i);	
	document.getElementById("tablewelcome").style.display = "none";
	document.getElementById("laura").style.display = "none";
	document.getElementById("instructionline").innerHTML = "Please enter your code below";
};

//Not working off ENTER so gave up
//document.getElementById("pcode1").keyup(function(event) {
//    if (event.keyCode === 13) {
//        alert("Hello, World!")
//    }
//});

document.getElementById("submitcode").onclick = function() {
	code = document.getElementById("pcode1").value;
	for (var i = 1; i <= 10; i++) codecheck(i);
	for (var i = 1; i <= 10; i++) picklesson(i);	
	alert( 'Code accepted' );
	document.getElementById("tablewelcome").style.display = "none";
	document.getElementById("instructionline").innerHTML = "Choose your lesson below";
	document.getElementById("table0").style.display = "block";
	document.getElementById("progressCode").style.display = "none";
	document.getElementById("submitcode").style.display = "none";
};

function codecheck (x) {
	code = code.toLowerCase();
	if (code == window["lessoncode" + x]) {
		level = x;
		y = 1;
	}
}

//for (var i = 1; i <= 6; i++) codecheck(i);

//////HOME//////
document.getElementById("home").onclick = function () {
	var y = 1;
	document.getElementById("score").innerHTML = "Score: " + (y-1);
	document.getElementById("Options").style.display = "none";
	document.getElementById("reset").style.display = "none";
	document.getElementById("submit").style.display = "none";
	document.getElementById("home").style.display = "none";
	document.getElementById("QuestionBoard").style.display = "none";
	document.getElementById("table1").style.visibility = "hidden";
	document.getElementById("score").style.display = "none";
	document.getElementById("table0").style.display = "block";
};

document.getElementById("idea").onclick = function () {
	if (document.getElementById("overlay").style.display == "block"){
	document.getElementById("overlay").style.display = "none";
	document.getElementById("headnote").style.backgroundColor = "#30B9CD";
	} else {
		document.getElementById("overlay").style.display = "block";
		document.getElementById("headnote").style.backgroundColor = "#F5F5F5";
	}
};


setTimeout(function(){ document.getElementById("welcome").style.display = "none";}, 1900);

//////CHOOSE LESSON//////

function picklesson (x) {
	var z = "Lesson" + x;
	if (level>=x) {
		if (level>x) {
			document.getElementById("Lesson" + x).setAttribute("class","completedlesson");	
		}
		document.getElementById("Lesson" + level).setAttribute("class","lesson");
		document.getElementById("Lesson" + x).onclick = function () {
			document.getElementById("instructionline").style.display = "none";
			window["Lesson" + x]();
			document.getElementById("score").style.display = "block";
			document.getElementById("QuestionBoard").style.display = "block";
			document.getElementById("table1").style.visibility = "visible";
			document.getElementById("table0").style.display = "none";
			document.getElementById("home").style.display = "block";
			document.getElementById("idea").style.display = "block";
			playGame();
		};
	};
};

//for (var i = 1; i <= 6; i++) picklesson(i);	

function playGame () {
/////GLOBAL FUNCTIONS/////
/////GLOBAL FUNCTIONS/////
/////GLOBAL FUNCTIONS/////

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
  	// While there remain elements to shuffle...
    while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
	}
return array;
}



/////////////////////////////////////////SENTENCE JAVASCRIPT/////////////////////////////////////////
/////////////////////////////////////////SENTENCE JAVASCRIPT/////////////////////////////////////////
/////////////////////////////////////////SENTENCE JAVASCRIPT/////////////////////////////////////////
/////////////////////////////////////////SENTENCE JAVASCRIPT/////////////////////////////////////////
/////////////////////////////////////////SENTENCE JAVASCRIPT/////////////////////////////////////////
function Sentence (z) {

/////SET THE PAIRS/////
/////SET THE PAIRS/////
/////SET THE PAIRS/////

document.getElementById("Question").innerHTML = "Question #" + z + ".  Translate the following sentence:";
document.getElementById("sentence").style.display = "block";
document.getElementById("attempt").style.display = "block";
document.getElementById("sentence").innerHTML = document.getElementById(z+"Q").innerHTML;

function Pairing (a,p,s) {
     this.answer = a;
     this.pair = p;
     this.select = s;
}
var a1 = new Pairing (document.getElementById(z+"O1").innerHTML,"A",0);
var a2 = new Pairing (document.getElementById(z+"O2").innerHTML,"B",0);
var a3 = new Pairing (document.getElementById(z+"O3").innerHTML,"C",0);
var a4 = new Pairing (document.getElementById(z+"O4").innerHTML,"D",0);
var a5 = new Pairing (document.getElementById(z+"O5").innerHTML,"A",0);
var a6 = new Pairing (document.getElementById(z+"O6").innerHTML,"B",0);
var a7 = new Pairing (document.getElementById(z+"O7").innerHTML,"C",0);
var a8 = new Pairing (document.getElementById(z+"O8").innerHTML,"D",0);
console.log(a1);

var correct;
if (document.getElementById(z+"NoW").innerHTML == 8) {
	correct = a1.answer + " " + a2.answer + " " + a3.answer + " " + a4.answer + " " + a5.answer + " " + a6.answer + " " + a7.answer + " " + a8.answer;
}
if (document.getElementById(z+"NoW").innerHTML == 7) {
	correct = a1.answer + " " + a2.answer + " " + a3.answer + " " + a4.answer + " " + a5.answer + " " + a6.answer + " " + a7.answer;
}
if (document.getElementById(z+"NoW").innerHTML == 6) {
	correct = a1.answer + " " + a2.answer + " " + a3.answer + " " + a4.answer + " " + a5.answer + " " + a6.answer;
}
if (document.getElementById(z+"NoW").innerHTML == 5) {
	correct = a1.answer + " " + a2.answer + " " + a3.answer + " " + a4.answer + " " + a5.answer;
}
if (document.getElementById(z+"NoW").innerHTML == 4) {
	correct = a1.answer + " " + a2.answer + " " + a3.answer + " " + a4.answer;
}
if (document.getElementById(z+"NoW").innerHTML == 3) {
	correct = a1.answer + " " + a2.answer + " " + a3.answer;
}
if (document.getElementById(z+"NoW").innerHTML == 2) {
	correct = a1.answer + " " + a2.answer;
}
if (document.getElementById(z+"NoW").innerHTML == 1) {
	correct = a1.answer;
}

console.log(correct);

/////RANDOMISE THE PAIRS AND RESET/////
/////RANDOMISE THE PAIRS AND RESET/////
/////RANDOMISE THE PAIRS AND RESET/////
var answers = [a1,a2,a3,a4,a5,a6,a7,a8];
shuffle(answers);

var a1 = new Pairing (answers[0].answer,answers[0].pair,answers[0].select);
var a2 = new Pairing (answers[1].answer,answers[1].pair,answers[1].select);
var a3 = new Pairing (answers[2].answer,answers[2].pair,answers[2].select);
var a4 = new Pairing (answers[3].answer,answers[3].pair,answers[3].select);
var a5 = new Pairing (answers[4].answer,answers[4].pair,answers[4].select);
var a6 = new Pairing (answers[5].answer,answers[5].pair,answers[5].select);
var a7 = new Pairing (answers[6].answer,answers[6].pair,answers[6].select);
var a8 = new Pairing (answers[7].answer,answers[7].pair,answers[7].select);

console.log(a1,a2,a3,a4,a5,a6,a7,a8);

document.getElementById("S1").innerHTML = a1.answer;
document.getElementById("S2").innerHTML = a2.answer;
document.getElementById("S3").innerHTML = a3.answer;
document.getElementById("S4").innerHTML = a4.answer;
document.getElementById("S5").innerHTML = a5.answer;
document.getElementById("S6").innerHTML = a6.answer;
document.getElementById("S7").innerHTML = a7.answer;
document.getElementById("S8").innerHTML = a8.answer;

/////CHOOSING THE CORRECT ANSWER/////	
/////CHOOSING THE CORRECT ANSWER/////
/////CHOOSING THE CORRECT ANSWER/////

var chooseAnswer = "Choose the correct answer from the words below";
var str = chooseAnswer;
document.getElementById("attempt").innerHTML = str;

function reset () {
	str = chooseAnswer;
	document.getElementById("attempt").innerHTML = str;
	a1.select = 0;
	document.getElementById("S1").setAttribute("class","button");
	a2.select = 0;
	document.getElementById("S2").setAttribute("class","button");
	a3.select = 0;
	document.getElementById("S3").setAttribute("class","button");
	a4.select = 0;
	document.getElementById("S4").setAttribute("class","button");
	a5.select = 0;
	document.getElementById("S5").setAttribute("class","button");
	a6.select = 0;
	document.getElementById("S6").setAttribute("class","button");
	a7.select = 0;
	document.getElementById("S7").setAttribute("class","button");
	a8.select = 0;
	document.getElementById("S8").setAttribute("class","button");
	document.getElementById("reset").style.display = "none";	
	document.getElementById("submit").style.display = "none";
	document.getElementById("attempt").setAttribute("class","aborder");
}

document.getElementById("reset").onclick = function () {
	reset();
};

document.getElementById("submit").onclick = function () {
	function moveon () {
		a1.select = 0;
		document.getElementById("S1").setAttribute("class","button");
		a2.select = 0;
		document.getElementById("S2").setAttribute("class","button");
		a3.select = 0;
		document.getElementById("S3").setAttribute("class","button");
		a4.select = 0;
		document.getElementById("S4").setAttribute("class","button");
		a5.select = 0;
		document.getElementById("S5").setAttribute("class","button");
		a6.select = 0;
		document.getElementById("S6").setAttribute("class","button");
		a7.select = 0;
		document.getElementById("S7").setAttribute("class","button");
		a8.select = 0;
		document.getElementById("S8").setAttribute("class","button");
		document.getElementById("reset").style.display = "none";	
		document.getElementById("submit").style.display = "none";
		document.getElementById("attempt").setAttribute("class","aborder");
		y++;
		nextQuestion();
		console.log(y);
	}

	if (str == correct) {
		document.getElementById("attempt").setAttribute("class","gborder");
		setTimeout(function(){
 	    	document.getElementById("attempt").innerHTML = "Correct";
			}, 500);
		setTimeout(function(){
 	    	moveon();
			}, 2000);
	}
	if (str != correct) {
		document.getElementById("attempt").innerHTML = "That is incorrect, please try again";
		document.getElementById("attempt").setAttribute("class","rborder");
		setTimeout(function(){
 	    	reset();
			}, 1000);
	};
};

document.getElementById("S1").onclick = function () {
	if (a1.select == 0) {
		if (str != chooseAnswer) {
			str = str + " " + a1.answer;
		}
		if (str == chooseAnswer) {
			str = a1.answer;
			document.getElementById("reset").style.display = "block";
			document.getElementById("submit").style.display = "block";	
		};
		document.getElementById("attempt").innerHTML = str;
		document.getElementById("S1").setAttribute("class","disappear");	
	a1.select = -1;
	};
};

document.getElementById("S2").onclick = function () {
	if (a2.select == 0) {
		if (str != chooseAnswer) {
			str = str + " " + a2.answer;
		}
		if (str == chooseAnswer) {
			str = a2.answer;
			document.getElementById("reset").style.display = "block";
			document.getElementById("submit").style.display = "block";	
		};
		document.getElementById("attempt").innerHTML = str;
		document.getElementById("S2").setAttribute("class","disappear");	
	a2.select = -1;
	};
};

document.getElementById("S3").onclick = function () {
	if (a3.select == 0) {
		if (str != chooseAnswer) {
			str = str + " " + a3.answer;
		}
		if (str == chooseAnswer) {
			str = a3.answer;
			document.getElementById("reset").style.display = "block";
			document.getElementById("submit").style.display = "block";	
		};
		document.getElementById("attempt").innerHTML = str;
		document.getElementById("S3").setAttribute("class","disappear");	
	a3.select = -1;
	};
};

document.getElementById("S4").onclick = function () {
	if (a4.select == 0) {
		if (str != chooseAnswer) {
			str = str + " " + a4.answer;
		}
		if (str == chooseAnswer) {
			str = a4.answer;
			document.getElementById("reset").style.display = "block";
			document.getElementById("submit").style.display = "block";	
		};
		document.getElementById("attempt").innerHTML = str;
		document.getElementById("S4").setAttribute("class","disappear");	
	a4.select = -1;
	};
};

document.getElementById("S5").onclick = function () {
	if (a5.select == 0) {
		if (str != chooseAnswer) {
			str = str + " " + a5.answer;
		}
		if (str == chooseAnswer) {
			str = a5.answer;
			document.getElementById("reset").style.display = "block";
			document.getElementById("submit").style.display = "block";	
		};
		document.getElementById("attempt").innerHTML = str;
		document.getElementById("S5").setAttribute("class","disappear");	
	a5.select = -1;
	};
};

document.getElementById("S6").onclick = function () {
	if (a6.select == 0) {
		if (str != chooseAnswer) {
			str = str + " " + a6.answer;
		}
		if (str == chooseAnswer) {
			str = a6.answer;
			document.getElementById("reset").style.display = "block";
			document.getElementById("submit").style.display = "block";	
		};
		document.getElementById("attempt").innerHTML = str;
		document.getElementById("S6").setAttribute("class","disappear");	
	a6.select = -1;
	};
};

document.getElementById("S7").onclick = function () {
	if (a7.select == 0) {
		if (str != chooseAnswer) {
			str = str + " " + a7.answer;
		}
		if (str == chooseAnswer) {
			str = a7.answer;
			document.getElementById("reset").style.display = "block";
			document.getElementById("submit").style.display = "block";	
		};
		document.getElementById("attempt").innerHTML = str;
		document.getElementById("S7").setAttribute("class","disappear");	
	a7.select = -1;
	};
};

document.getElementById("S8").onclick = function () {
	if (a8.select == 0) {
		if (str != chooseAnswer) {
			str = str + " " + a8.answer;
		}
		if (str == chooseAnswer) {
			str = a8.answer;
			document.getElementById("reset").style.display = "block";
			document.getElementById("submit").style.display = "block";	
		};
		document.getElementById("attempt").innerHTML = str;
		document.getElementById("S8").setAttribute("class","disappear");	
	a8.select = -1;
	};
};
};

/////////////////////////////////////////MATCH JAVASCRIPT/////////////////////////////////////////
/////////////////////////////////////////MATCH JAVASCRIPT/////////////////////////////////////////
/////////////////////////////////////////MATCH JAVASCRIPT/////////////////////////////////////////
/////////////////////////////////////////MATCH JAVASCRIPT/////////////////////////////////////////
/////////////////////////////////////////MATCH JAVASCRIPT/////////////////////////////////////////
function Match(z){

document.getElementById("Question").innerHTML = "Question #" + z + ".  Match the pairs:";
document.getElementById("sentence").style.display = "none";
document.getElementById("attempt").style.display = "none";

function Pairing (a,p,s) {
     this.answer = a;
     this.pair = p;
     this.select = s;
}
var a1 = new Pairing (document.getElementById(z+"O1").innerHTML,"A",0);
var a2 = new Pairing (document.getElementById(z+"O2").innerHTML,"B",0);
var a3 = new Pairing (document.getElementById(z+"O3").innerHTML,"C",0);
var a4 = new Pairing (document.getElementById(z+"O4").innerHTML,"D",0);
var a5 = new Pairing (document.getElementById(z+"O5").innerHTML,"A",0);
var a6 = new Pairing (document.getElementById(z+"O6").innerHTML,"B",0);
var a7 = new Pairing (document.getElementById(z+"O7").innerHTML,"C",0);
var a8 = new Pairing (document.getElementById(z+"O8").innerHTML,"D",0);
console.log(a1);

/////RANDOMISE THE PAIRS AND RESET/////
/////RANDOMISE THE PAIRS AND RESET/////
/////RANDOMISE THE PAIRS AND RESET/////

var answers = [a1,a2,a3,a4,a5,a6,a7,a8];
shuffle(answers);

var a1 = new Pairing (answers[0].answer,answers[0].pair,answers[0].select);
var a2 = new Pairing (answers[1].answer,answers[1].pair,answers[1].select);
var a3 = new Pairing (answers[2].answer,answers[2].pair,answers[2].select);
var a4 = new Pairing (answers[3].answer,answers[3].pair,answers[3].select);
var a5 = new Pairing (answers[4].answer,answers[4].pair,answers[4].select);
var a6 = new Pairing (answers[5].answer,answers[5].pair,answers[5].select);
var a7 = new Pairing (answers[6].answer,answers[6].pair,answers[6].select);
var a8 = new Pairing (answers[7].answer,answers[7].pair,answers[7].select);

console.log(a1,a2,a3,a4,a5,a6,a7,a8);

document.getElementById("S1").innerHTML = a1.answer;
document.getElementById("S2").innerHTML = a2.answer;
document.getElementById("S3").innerHTML = a3.answer;
document.getElementById("S4").innerHTML = a4.answer;
document.getElementById("S5").innerHTML = a5.answer;
document.getElementById("S6").innerHTML = a6.answer;
document.getElementById("S7").innerHTML = a7.answer;
document.getElementById("S8").innerHTML = a8.answer;

/////CHOOSING THE CORRECT ANSWER/////	
/////CHOOSING THE CORRECT ANSWER/////
/////CHOOSING THE CORRECT ANSWER/////
function complete () {
if (a1.select == -1 && a2.select == -1 && a3.select == -1 && a4.select == -1 && a5.select == -1 && a6.select == -1 && a7.select == -1 && a8.select == -1) {
	document.getElementById("attempt").setAttribute("class","gborder");
	document.getElementById("attempt").innerHTML = "Correct";
	document.getElementById("attempt").style.display = "block";
	setTimeout(function(){
		document.getElementById("attempt").setAttribute("class","aborder");
		a1.select = 0;
		document.getElementById("S1").setAttribute("class","button");
		a2.select = 0;
		document.getElementById("S2").setAttribute("class","button");
		a3.select = 0;
		document.getElementById("S3").setAttribute("class","button");
		a4.select = 0;
		document.getElementById("S4").setAttribute("class","button");
		a5.select = 0;
		document.getElementById("S5").setAttribute("class","button");
		a6.select = 0;
		document.getElementById("S6").setAttribute("class","button");
		a7.select = 0;
		document.getElementById("S7").setAttribute("class","button");
		a8.select = 0;
		document.getElementById("S8").setAttribute("class","button");
		document.getElementById("reset").style.display = "none";	
		document.getElementById("submit").style.display = "none";
		y++;
		nextQuestion();
		console.log(y);
	}, 2000);
	};
};

document.getElementById("S1").onclick = function () {
	if (a1.select == 0 && a2.select <= 0 && a3.select <= 0 && a4.select <= 0 && a5.select <= 0 && a6.select <= 0 && a7.select <= 0 && a8.select <= 0) {
		a1.select = 1;
		document.getElementById("S1").setAttribute("class","selected");
	};
	if (a1.select == 0 && a2.select == 1 || a3.select == 1 || a4.select == 1 || a5.select == 1 || a6.select == 1 || a7.select == 1 || a8.select == 1) {
		if (a2.select == 1 && a1.pair == a2.pair) {
		setTimeout(function(){
			document.getElementById("S1").setAttribute("class","disappear");
			document.getElementById("S2").setAttribute("class","disappear");
			a1.select = -1;
			a2.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S1").setAttribute("class","selected");	
	};
		if (a3.select == 1 && a1.pair == a3.pair) {
		setTimeout(function(){
			document.getElementById("S1").setAttribute("class","disappear");
			document.getElementById("S3").setAttribute("class","disappear");
			a1.select = -1;
			a3.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S1").setAttribute("class","selected");	
	};
		if (a4.select == 1 && a1.pair == a4.pair) {
		setTimeout(function(){
			document.getElementById("S1").setAttribute("class","disappear");
			document.getElementById("S4").setAttribute("class","disappear");
			a1.select = -1;
			a4.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S1").setAttribute("class","selected");	
	};
		if (a5.select == 1 && a1.pair == a5.pair) {
		setTimeout(function(){
			document.getElementById("S1").setAttribute("class","disappear");
			document.getElementById("S5").setAttribute("class","disappear");
			a1.select = -1;
			a5.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S1").setAttribute("class","selected");	
	};
		if (a6.select == 1 && a1.pair == a6.pair) {
		setTimeout(function(){
			document.getElementById("S1").setAttribute("class","disappear");
			document.getElementById("S6").setAttribute("class","disappear");
			a1.select = -1;
			a6.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S1").setAttribute("class","selected");	
	};
		if (a7.select == 1 && a1.pair == a7.pair) {
		setTimeout(function(){
			document.getElementById("S1").setAttribute("class","disappear");
			document.getElementById("S7").setAttribute("class","disappear");
			a1.select = -1;
			a7.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S1").setAttribute("class","selected");	
	};
		if (a8.select == 1 && a1.pair == a8.pair) {
		setTimeout(function(){
			document.getElementById("S1").setAttribute("class","disappear");
			document.getElementById("S8").setAttribute("class","disappear");
			a1.select = -1;
			a8.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S1").setAttribute("class","selected");	
	};
		if (a2.select == 1 && a1.pair !== a2.pair) {
		setTimeout(function(){
			document.getElementById("S1").setAttribute("class","button");
			a2.select = 0;
			document.getElementById("S2").setAttribute("class","button");
		}, 200);		
		document.getElementById("S1").setAttribute("class","wrong");
		document.getElementById("S2").setAttribute("class","wrong");		
		};
		if (a3.select == 1 && a1.pair !== a3.pair) {
		setTimeout(function(){
			document.getElementById("S1").setAttribute("class","button");
			a3.select = 0;
			document.getElementById("S3").setAttribute("class","button");
		}, 200);		
		document.getElementById("S1").setAttribute("class","wrong");
		document.getElementById("S3").setAttribute("class","wrong");		
		};
		if (a4.select == 1 && a1.pair !== a4.pair) {
		setTimeout(function(){
			document.getElementById("S1").setAttribute("class","button");
			a4.select = 0;
			document.getElementById("S4").setAttribute("class","button");
		}, 200);		
		document.getElementById("S1").setAttribute("class","wrong");
		document.getElementById("S4").setAttribute("class","wrong");		
		};
		if (a5.select == 1 && a1.pair !== a5.pair) {
		setTimeout(function(){
			document.getElementById("S1").setAttribute("class","button");
			a5.select = 0;
			document.getElementById("S5").setAttribute("class","button");
		}, 200);		
		document.getElementById("S1").setAttribute("class","wrong");
		document.getElementById("S5").setAttribute("class","wrong");		
		};
		if (a6.select == 1 && a1.pair !== a6.pair) {
		setTimeout(function(){
			document.getElementById("S1").setAttribute("class","button");
			a6.select = 0;
			document.getElementById("S6").setAttribute("class","button");
		}, 200);		
		document.getElementById("S1").setAttribute("class","wrong");
		document.getElementById("S6").setAttribute("class","wrong");		
		};
		if (a7.select == 1 && a1.pair !== a7.pair) {
		setTimeout(function(){
			document.getElementById("S1").setAttribute("class","button");
			a7.select = 0;
			document.getElementById("S7").setAttribute("class","button");
		}, 200);		
		document.getElementById("S1").setAttribute("class","wrong");
		document.getElementById("S7").setAttribute("class","wrong");		
		};
		if (a8.select == 1 && a1.pair !== a8.pair) {
		setTimeout(function(){
			document.getElementById("S1").setAttribute("class","button");
			a8.select = 0;
			document.getElementById("S8").setAttribute("class","button");
		}, 200);		
		document.getElementById("S1").setAttribute("class","wrong");
		document.getElementById("S8").setAttribute("class","wrong");		
		};
	};
};
document.getElementById("S2").onclick = function () {
	if (a1.select <= 0 && a2.select == 0 && a3.select <= 0 && a4.select <= 0 && a5.select <= 0 && a6.select <= 0 && a7.select <= 0 && a8.select <= 0) {
		a2.select = 1;
		document.getElementById("S2").setAttribute("class","selected");
	};
	if (a2.select == 0 && a1.select == 1 || a3.select == 1 || a4.select == 1 || a5.select == 1 || a6.select == 1 || a7.select == 1 || a8.select == 1) {
		if (a1.select == 1 && a2.pair == a1.pair) {
		setTimeout(function(){
			document.getElementById("S1").setAttribute("class","disappear");
			document.getElementById("S2").setAttribute("class","disappear");
			a1.select = -1;
			a2.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S2").setAttribute("class","selected");	
	};
		if (a3.select == 1 && a2.pair == a3.pair) {
		setTimeout(function(){
			document.getElementById("S2").setAttribute("class","disappear");
			document.getElementById("S3").setAttribute("class","disappear");
			a2.select = -1;
			a3.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S2").setAttribute("class","selected");	
	};
		if (a4.select == 1 && a2.pair == a4.pair) {
		setTimeout(function(){
			document.getElementById("S2").setAttribute("class","disappear");
			document.getElementById("S4").setAttribute("class","disappear");
			a2.select = -1;
			a4.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S2").setAttribute("class","selected");	
	};
		if (a5.select == 1 && a2.pair == a5.pair) {
		setTimeout(function(){
			document.getElementById("S2").setAttribute("class","disappear");
			document.getElementById("S5").setAttribute("class","disappear");
			a2.select = -1;
			a5.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S2").setAttribute("class","selected");	
	};
		if (a6.select == 1 && a2.pair == a6.pair) {
		setTimeout(function(){
			document.getElementById("S2").setAttribute("class","disappear");
			document.getElementById("S6").setAttribute("class","disappear");
			a2.select = -1;
			a6.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S2").setAttribute("class","selected");	
	};
		if (a7.select == 1 && a2.pair == a7.pair) {
		setTimeout(function(){
			document.getElementById("S2").setAttribute("class","disappear");
			document.getElementById("S7").setAttribute("class","disappear");
			a2.select = -1;
			a7.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S2").setAttribute("class","selected");	
	};
		if (a8.select == 1 && a2.pair == a8.pair) {
		setTimeout(function(){
			document.getElementById("S2").setAttribute("class","disappear");
			document.getElementById("S8").setAttribute("class","disappear");
			a2.select = -1;
			a8.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S2").setAttribute("class","selected");	
	};
		if (a1.select == 1 && a2.pair !== a1.pair) {
		setTimeout(function(){
			document.getElementById("S2").setAttribute("class","button");
			a1.select = 0;
			document.getElementById("S1").setAttribute("class","button");
		}, 200);		
		document.getElementById("S2").setAttribute("class","wrong");
		document.getElementById("S1").setAttribute("class","wrong");		
		};
		if (a3.select == 1 && a2.pair !== a3.pair) {
		setTimeout(function(){
			document.getElementById("S2").setAttribute("class","button");
			a3.select = 0;
			document.getElementById("S3").setAttribute("class","button");
		}, 200);		
		document.getElementById("S2").setAttribute("class","wrong");
		document.getElementById("S3").setAttribute("class","wrong");		
		};
		if (a4.select == 1 && a2.pair !== a4.pair) {
		setTimeout(function(){
			document.getElementById("S2").setAttribute("class","button");
			a4.select = 0;
			document.getElementById("S4").setAttribute("class","button");
		}, 200);		
		document.getElementById("S2").setAttribute("class","wrong");
		document.getElementById("S4").setAttribute("class","wrong");		
		};
		if (a5.select == 1 && a2.pair !== a5.pair) {
		setTimeout(function(){
			document.getElementById("S2").setAttribute("class","button");
			a5.select = 0;
			document.getElementById("S5").setAttribute("class","button");
		}, 200);		
		document.getElementById("S2").setAttribute("class","wrong");
		document.getElementById("S5").setAttribute("class","wrong");		
		};
		if (a6.select == 1 && a2.pair !== a6.pair) {
		setTimeout(function(){
			document.getElementById("S2").setAttribute("class","button");
			a6.select = 0;
			document.getElementById("S6").setAttribute("class","button");
		}, 200);		
		document.getElementById("S2").setAttribute("class","wrong");
		document.getElementById("S6").setAttribute("class","wrong");		
		};
		if (a7.select == 1 && a2.pair !== a7.pair) {
		setTimeout(function(){
			document.getElementById("S2").setAttribute("class","button");
			a7.select = 0;
			document.getElementById("S7").setAttribute("class","button");
		}, 200);		
		document.getElementById("S2").setAttribute("class","wrong");
		document.getElementById("S7").setAttribute("class","wrong");		
		};
		if (a8.select == 1 && a2.pair !== a8.pair) {
		setTimeout(function(){
			document.getElementById("S2").setAttribute("class","button");
			a8.select = 0;
			document.getElementById("S8").setAttribute("class","button");
		}, 200);		
		document.getElementById("S2").setAttribute("class","wrong");
		document.getElementById("S8").setAttribute("class","wrong");		
		};
	};
};
document.getElementById("S3").onclick = function () {
	if (a1.select <= 0 && a2.select <= 0 && a3.select == 0 && a4.select <= 0 && a5.select <= 0 && a6.select <= 0 && a7.select <= 0 && a8.select <= 0) {
		a3.select = 1;
		document.getElementById("S3").setAttribute("class","selected");
	};
	if (a3.select == 0 && a1.select == 1 || a2.select == 1 || a4.select == 1 || a5.select == 1 || a6.select == 1 || a7.select == 1 || a8.select == 1) {
		if (a2.select == 1 && a3.pair == a2.pair) {
		setTimeout(function(){
			document.getElementById("S3").setAttribute("class","disappear");
			document.getElementById("S2").setAttribute("class","disappear");
			a3.select = -1;
			a2.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S3").setAttribute("class","selected");	
	};
		if (a1.select == 1 && a3.pair == a1.pair) {
		setTimeout(function(){
			document.getElementById("S1").setAttribute("class","disappear");
			document.getElementById("S3").setAttribute("class","disappear");
			a1.select = -1;
			a3.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S3").setAttribute("class","selected");	
	};
		if (a4.select == 1 && a3.pair == a4.pair) {
		setTimeout(function(){
			document.getElementById("S3").setAttribute("class","disappear");
			document.getElementById("S4").setAttribute("class","disappear");
			a3.select = -1;
			a4.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S3").setAttribute("class","selected");	
	};
		if (a5.select == 1 && a3.pair == a5.pair) {
		setTimeout(function(){
			document.getElementById("S3").setAttribute("class","disappear");
			document.getElementById("S5").setAttribute("class","disappear");
			a3.select = -1;
			a5.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S3").setAttribute("class","selected");	
	};
		if (a6.select == 1 && a3.pair == a6.pair) {
		setTimeout(function(){
			document.getElementById("S3").setAttribute("class","disappear");
			document.getElementById("S6").setAttribute("class","disappear");
			a3.select = -1;
			a6.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S3").setAttribute("class","selected");	
	};
		if (a7.select == 1 && a3.pair == a7.pair) {
		setTimeout(function(){
			document.getElementById("S3").setAttribute("class","disappear");
			document.getElementById("S7").setAttribute("class","disappear");
			a3.select = -1;
			a7.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S3").setAttribute("class","selected");	
	};
		if (a8.select == 1 && a3.pair == a8.pair) {
		setTimeout(function(){
			document.getElementById("S3").setAttribute("class","disappear");
			document.getElementById("S8").setAttribute("class","disappear");
			a3.select = -1;
			a8.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S3").setAttribute("class","selected");	
	};
		if (a2.select == 1 && a3.pair !== a2.pair) {
		setTimeout(function(){
			document.getElementById("S3").setAttribute("class","button");
			a2.select = 0;
			document.getElementById("S2").setAttribute("class","button");
		}, 200);		
		document.getElementById("S3").setAttribute("class","wrong");
		document.getElementById("S2").setAttribute("class","wrong");		
		};
		if (a1.select == 1 && a3.pair !== a1.pair) {
		setTimeout(function(){
			document.getElementById("S3").setAttribute("class","button");
			a1.select = 0;
			document.getElementById("S1").setAttribute("class","button");
		}, 200);		
		document.getElementById("S3").setAttribute("class","wrong");
		document.getElementById("S1").setAttribute("class","wrong");		
		};
		if (a4.select == 1 && a3.pair !== a4.pair) {
		setTimeout(function(){
			document.getElementById("S3").setAttribute("class","button");
			a4.select = 0;
			document.getElementById("S4").setAttribute("class","button");
		}, 200);		
		document.getElementById("S3").setAttribute("class","wrong");
		document.getElementById("S4").setAttribute("class","wrong");		
		};
		if (a5.select == 1 && a3.pair !== a5.pair) {
		setTimeout(function(){
			document.getElementById("S3").setAttribute("class","button");
			a5.select = 0;
			document.getElementById("S5").setAttribute("class","button");
		}, 200);		
		document.getElementById("S3").setAttribute("class","wrong");
		document.getElementById("S5").setAttribute("class","wrong");		
		};
		if (a6.select == 1 && a3.pair !== a6.pair) {
		setTimeout(function(){
			document.getElementById("S3").setAttribute("class","button");
			a6.select = 0;
			document.getElementById("S6").setAttribute("class","button");
		}, 200);		
		document.getElementById("S3").setAttribute("class","wrong");
		document.getElementById("S6").setAttribute("class","wrong");		
		};
		if (a7.select == 1 && a3.pair !== a7.pair) {
		setTimeout(function(){
			document.getElementById("S3").setAttribute("class","button");
			a7.select = 0;
			document.getElementById("S7").setAttribute("class","button");
		}, 200);		
		document.getElementById("S3").setAttribute("class","wrong");
		document.getElementById("S7").setAttribute("class","wrong");		
		};
		if (a8.select == 1 && a3.pair !== a8.pair) {
		setTimeout(function(){
			document.getElementById("S3").setAttribute("class","button");
			a8.select = 0;
			document.getElementById("S8").setAttribute("class","button");
		}, 200);		
		document.getElementById("S3").setAttribute("class","wrong");
		document.getElementById("S8").setAttribute("class","wrong");		
		};
	};
};
document.getElementById("S4").onclick = function () {
	if (a1.select <= 0 && a2.select <= 0 && a3.select <= 0 && a4.select == 0 && a5.select <= 0 && a6.select <= 0 && a7.select <= 0 && a8.select <= 0) {
		a4.select = 1;
		document.getElementById("S4").setAttribute("class","selected");
	};
	if (a4.select == 0 && a1.select == 1 || a2.select == 1 || a3.select == 1 || a5.select == 1 || a6.select == 1 || a7.select == 1 || a8.select == 1) {
		if (a2.select == 1 && a4.pair == a2.pair) {
		setTimeout(function(){
			document.getElementById("S4").setAttribute("class","disappear");
			document.getElementById("S2").setAttribute("class","disappear");
			a4.select = -1;
			a2.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S4").setAttribute("class","selected");	
	};
		if (a3.select == 1 && a4.pair == a3.pair) {
		setTimeout(function(){
			document.getElementById("S4").setAttribute("class","disappear");
			document.getElementById("S3").setAttribute("class","disappear");
			a4.select = -1;
			a3.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S4").setAttribute("class","selected");	
	};
		if (a1.select == 1 && a4.pair == a1.pair) {
		setTimeout(function(){
			document.getElementById("S4").setAttribute("class","disappear");
			document.getElementById("S1").setAttribute("class","disappear");
			a1.select = -1;
			a4.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S4").setAttribute("class","selected");	
	};
		if (a5.select == 1 && a4.pair == a5.pair) {
		setTimeout(function(){
			document.getElementById("S4").setAttribute("class","disappear");
			document.getElementById("S5").setAttribute("class","disappear");
			a4.select = -1;
			a5.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S4").setAttribute("class","selected");	
	};
		if (a6.select == 1 && a4.pair == a6.pair) {
		setTimeout(function(){
			document.getElementById("S4").setAttribute("class","disappear");
			document.getElementById("S6").setAttribute("class","disappear");
			a4.select = -1;
			a6.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S4").setAttribute("class","selected");	
	};
		if (a7.select == 1 && a4.pair == a7.pair) {
		setTimeout(function(){
			document.getElementById("S4").setAttribute("class","disappear");
			document.getElementById("S7").setAttribute("class","disappear");
			a4.select = -1;
			a7.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S4").setAttribute("class","selected");	
	};
		if (a8.select == 1 && a4.pair == a8.pair) {
		setTimeout(function(){
			document.getElementById("S4").setAttribute("class","disappear");
			document.getElementById("S8").setAttribute("class","disappear");
			a4.select = -1;
			a8.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S4").setAttribute("class","selected");	
	};
		if (a2.select == 1 && a4.pair !== a2.pair) {
		setTimeout(function(){
			document.getElementById("S4").setAttribute("class","button");
			a2.select = 0;
			document.getElementById("S2").setAttribute("class","button");
		}, 200);		
		document.getElementById("S4").setAttribute("class","wrong");
		document.getElementById("S2").setAttribute("class","wrong");		
		};
		if (a3.select == 1 && a4.pair !== a3.pair) {
		setTimeout(function(){
			document.getElementById("S4").setAttribute("class","button");
			a3.select = 0;
			document.getElementById("S3").setAttribute("class","button");
		}, 200);		
		document.getElementById("S4").setAttribute("class","wrong");
		document.getElementById("S3").setAttribute("class","wrong");		
		};
		if (a1.select == 1 && a4.pair !== a1.pair) {
		setTimeout(function(){
			document.getElementById("S4").setAttribute("class","button");
			a1.select = 0;
			document.getElementById("S1").setAttribute("class","button");
		}, 200);		
		document.getElementById("S4").setAttribute("class","wrong");
		document.getElementById("S1").setAttribute("class","wrong");		
		};
		if (a5.select == 1 && a4.pair !== a5.pair) {
		setTimeout(function(){
			document.getElementById("S4").setAttribute("class","button");
			a5.select = 0;
			document.getElementById("S5").setAttribute("class","button");
		}, 200);		
		document.getElementById("S4").setAttribute("class","wrong");
		document.getElementById("S5").setAttribute("class","wrong");		
		};
		if (a6.select == 1 && a4.pair !== a6.pair) {
		setTimeout(function(){
			document.getElementById("S4").setAttribute("class","button");
			a6.select = 0;
			document.getElementById("S6").setAttribute("class","button");
		}, 200);		
		document.getElementById("S4").setAttribute("class","wrong");
		document.getElementById("S6").setAttribute("class","wrong");		
		};
		if (a7.select == 1 && a4.pair !== a7.pair) {
		setTimeout(function(){
			document.getElementById("S4").setAttribute("class","button");
			a7.select = 0;
			document.getElementById("S7").setAttribute("class","button");
		}, 200);		
		document.getElementById("S4").setAttribute("class","wrong");
		document.getElementById("S7").setAttribute("class","wrong");		
		};
		if (a8.select == 1 && a4.pair !== a8.pair) {
		setTimeout(function(){
			document.getElementById("S4").setAttribute("class","button");
			a8.select = 0;
			document.getElementById("S8").setAttribute("class","button");
		}, 200);		
		document.getElementById("S4").setAttribute("class","wrong");
		document.getElementById("S8").setAttribute("class","wrong");		
		};
	};
};
document.getElementById("S5").onclick = function () {
	if (a1.select <= 0 && a2.select <= 0 && a3.select <= 0 && a4.select <= 0 && a5.select == 0 && a6.select <= 0 && a7.select <= 0 && a8.select <= 0) {
		a5.select = 1;
		document.getElementById("S5").setAttribute("class","selected");
	};
	if (a5.select == 0 && a1.select == 1 || a2.select == 1 || a3.select == 1 || a4.select == 1 || a6.select == 1 || a7.select == 1 || a8.select == 1) {
		if (a2.select == 1 && a5.pair == a2.pair) {
		setTimeout(function(){
			document.getElementById("S5").setAttribute("class","disappear");
			document.getElementById("S2").setAttribute("class","disappear");
			a5.select = -1;
			a2.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S5").setAttribute("class","selected");	
	};
		if (a3.select == 1 && a5.pair == a3.pair) {
		setTimeout(function(){
			document.getElementById("S5").setAttribute("class","disappear");
			document.getElementById("S3").setAttribute("class","disappear");
			a5.select = -1;
			a3.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S5").setAttribute("class","selected");	
	};
		if (a4.select == 1 && a5.pair == a4.pair) {
		setTimeout(function(){
			document.getElementById("S5").setAttribute("class","disappear");
			document.getElementById("S4").setAttribute("class","disappear");
			a5.select = -1;
			a4.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S5").setAttribute("class","selected");	
	};
		if (a1.select == 1 && a5.pair == a1.pair) {
		setTimeout(function(){
			document.getElementById("S1").setAttribute("class","disappear");
			document.getElementById("S5").setAttribute("class","disappear");
			a1.select = -1;
			a5.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S5").setAttribute("class","selected");	
	};
		if (a6.select == 1 && a5.pair == a6.pair) {
		setTimeout(function(){
			document.getElementById("S5").setAttribute("class","disappear");
			document.getElementById("S6").setAttribute("class","disappear");
			a5.select = -1;
			a6.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S5").setAttribute("class","selected");	
	};
		if (a7.select == 1 && a5.pair == a7.pair) {
		setTimeout(function(){
			document.getElementById("S5").setAttribute("class","disappear");
			document.getElementById("S7").setAttribute("class","disappear");
			a5.select = -1;
			a7.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S5").setAttribute("class","selected");	
	};
		if (a8.select == 1 && a5.pair == a8.pair) {
		setTimeout(function(){
			document.getElementById("S5").setAttribute("class","disappear");
			document.getElementById("S8").setAttribute("class","disappear");
			a5.select = -1;
			a8.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S5").setAttribute("class","selected");	
	};
		if (a2.select == 1 && a5.pair !== a2.pair) {
		setTimeout(function(){
			document.getElementById("S5").setAttribute("class","button");
			a2.select = 0;
			document.getElementById("S2").setAttribute("class","button");
		}, 200);		
		document.getElementById("S5").setAttribute("class","wrong");
		document.getElementById("S2").setAttribute("class","wrong");		
		};
		if (a3.select == 1 && a5.pair !== a3.pair) {
		setTimeout(function(){
			document.getElementById("S5").setAttribute("class","button");
			a3.select = 0;
			document.getElementById("S3").setAttribute("class","button");
		}, 200);		
		document.getElementById("S5").setAttribute("class","wrong");
		document.getElementById("S3").setAttribute("class","wrong");		
		};
		if (a4.select == 1 && a5.pair !== a4.pair) {
		setTimeout(function(){
			document.getElementById("S5").setAttribute("class","button");
			a4.select = 0;
			document.getElementById("S4").setAttribute("class","button");
		}, 200);		
		document.getElementById("S5").setAttribute("class","wrong");
		document.getElementById("S4").setAttribute("class","wrong");		
		};
		if (a1.select == 1 && a5.pair !== a1.pair) {
		setTimeout(function(){
			document.getElementById("S5").setAttribute("class","button");
			a1.select = 0;
			document.getElementById("S1").setAttribute("class","button");
		}, 200);		
		document.getElementById("S5").setAttribute("class","wrong");
		document.getElementById("S1").setAttribute("class","wrong");		
		};
		if (a6.select == 1 && a5.pair !== a6.pair) {
		setTimeout(function(){
			document.getElementById("S5").setAttribute("class","button");
			a6.select = 0;
			document.getElementById("S6").setAttribute("class","button");
		}, 200);		
		document.getElementById("S5").setAttribute("class","wrong");
		document.getElementById("S6").setAttribute("class","wrong");		
		};
		if (a7.select == 1 && a5.pair !== a7.pair) {
		setTimeout(function(){
			document.getElementById("S5").setAttribute("class","button");
			a7.select = 0;
			document.getElementById("S7").setAttribute("class","button");
		}, 200);		
		document.getElementById("S5").setAttribute("class","wrong");
		document.getElementById("S7").setAttribute("class","wrong");		
		};
		if (a8.select == 1 && a5.pair !== a8.pair) {
		setTimeout(function(){
			document.getElementById("S5").setAttribute("class","button");
			a8.select = 0;
			document.getElementById("S8").setAttribute("class","button");
		}, 200);		
		document.getElementById("S5").setAttribute("class","wrong");
		document.getElementById("S8").setAttribute("class","wrong");		
		};
	};
};
document.getElementById("S6").onclick = function () {
	if (a1.select <= 0 && a2.select <= 0 && a3.select <= 0 && a4.select <= 0 && a5.select <= 0 && a6.select == 0 && a7.select <= 0 && a8.select <= 0) {
		a6.select = 1;
		document.getElementById("S6").setAttribute("class","selected");
	};
	if (a6.select == 0 && a1.select == 1 || a2.select == 1 || a3.select == 1 || a4.select == 1 || a5.select == 1 || a7.select == 1 || a8.select == 1) {
		if (a2.select == 1 && a6.pair == a2.pair) {
		setTimeout(function(){
			document.getElementById("S6").setAttribute("class","disappear");
			document.getElementById("S2").setAttribute("class","disappear");
			a6.select = -1;
			a2.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S6").setAttribute("class","selected");	
	};
		if (a3.select == 1 && a6.pair == a3.pair) {
		setTimeout(function(){
			document.getElementById("S6").setAttribute("class","disappear");
			document.getElementById("S3").setAttribute("class","disappear");
			a6.select = -1;
			a3.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S6").setAttribute("class","selected");	
	};
		if (a4.select == 1 && a6.pair == a4.pair) {
		setTimeout(function(){
			document.getElementById("S6").setAttribute("class","disappear");
			document.getElementById("S4").setAttribute("class","disappear");
			a6.select = -1;
			a4.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S6").setAttribute("class","selected");	
	};
		if (a5.select == 1 && a6.pair == a5.pair) {
		setTimeout(function(){
			document.getElementById("S6").setAttribute("class","disappear");
			document.getElementById("S5").setAttribute("class","disappear");
			a6.select = -1;
			a5.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S6").setAttribute("class","selected");	
	};
		if (a1.select == 1 && a6.pair == a1.pair) {
		setTimeout(function(){
			document.getElementById("S1").setAttribute("class","disappear");
			document.getElementById("S6").setAttribute("class","disappear");
			a1.select = -1;
			a6.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S6").setAttribute("class","selected");	
	};
		if (a7.select == 1 && a6.pair == a7.pair) {
		setTimeout(function(){
			document.getElementById("S6").setAttribute("class","disappear");
			document.getElementById("S7").setAttribute("class","disappear");
			a6.select = -1;
			a7.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S6").setAttribute("class","selected");	
	};
		if (a8.select == 1 && a6.pair == a8.pair) {
		setTimeout(function(){
			document.getElementById("S6").setAttribute("class","disappear");
			document.getElementById("S8").setAttribute("class","disappear");
			a6.select = -1;
			a8.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S6").setAttribute("class","selected");	
	};
		if (a2.select == 1 && a6.pair !== a2.pair) {
		setTimeout(function(){
			document.getElementById("S6").setAttribute("class","button");
			a2.select = 0;
			document.getElementById("S2").setAttribute("class","button");
		}, 200);		
		document.getElementById("S6").setAttribute("class","wrong");
		document.getElementById("S2").setAttribute("class","wrong");		
		};
		if (a3.select == 1 && a6.pair !== a3.pair) {
		setTimeout(function(){
			document.getElementById("S6").setAttribute("class","button");
			a3.select = 0;
			document.getElementById("S3").setAttribute("class","button");
		}, 200);		
		document.getElementById("S6").setAttribute("class","wrong");
		document.getElementById("S3").setAttribute("class","wrong");		
		};
		if (a4.select == 1 && a6.pair !== a4.pair) {
		setTimeout(function(){
			document.getElementById("S6").setAttribute("class","button");
			a4.select = 0;
			document.getElementById("S4").setAttribute("class","button");
		}, 200);		
		document.getElementById("S6").setAttribute("class","wrong");
		document.getElementById("S4").setAttribute("class","wrong");		
		};
		if (a5.select == 1 && a6.pair !== a5.pair) {
		setTimeout(function(){
			document.getElementById("S6").setAttribute("class","button");
			a5.select = 0;
			document.getElementById("S5").setAttribute("class","button");
		}, 200);		
		document.getElementById("S6").setAttribute("class","wrong");
		document.getElementById("S5").setAttribute("class","wrong");		
		};
		if (a1.select == 1 && a6.pair !== a1.pair) {
		setTimeout(function(){
			document.getElementById("S6").setAttribute("class","button");
			a1.select = 0;
			document.getElementById("S1").setAttribute("class","button");
		}, 200);		
		document.getElementById("S6").setAttribute("class","wrong");
		document.getElementById("S6").setAttribute("class","wrong");		
		};
		if (a7.select == 1 && a6.pair !== a7.pair) {
		setTimeout(function(){
			document.getElementById("S6").setAttribute("class","button");
			a7.select = 0;
			document.getElementById("S7").setAttribute("class","button");
		}, 200);		
		document.getElementById("S6").setAttribute("class","wrong");
		document.getElementById("S7").setAttribute("class","wrong");		
		};
		if (a8.select == 1 && a6.pair !== a8.pair) {
		setTimeout(function(){
			document.getElementById("S6").setAttribute("class","button");
			a8.select = 0;
			document.getElementById("S8").setAttribute("class","button");
		}, 200);		
		document.getElementById("S6").setAttribute("class","wrong");
		document.getElementById("S8").setAttribute("class","wrong");		
		};
	};
};
document.getElementById("S7").onclick = function () {
	if (a1.select <= 0 && a2.select <= 0 && a3.select <= 0 && a4.select <= 0 && a5.select <= 0 && a6.select <= 0 && a7.select == 0 && a8.select <= 0) {
		a7.select = 1;
		document.getElementById("S7").setAttribute("class","selected");
	};
	if (a7.select == 0 && a1.select == 1 || a2.select == 1 || a3.select == 1 || a4.select == 1 || a5.select == 1 || a6.select == 1 || a8.select == 1) {
		if (a2.select == 1 && a7.pair == a2.pair) {
		setTimeout(function(){
			document.getElementById("S7").setAttribute("class","disappear");
			document.getElementById("S2").setAttribute("class","disappear");
			a7.select = -1;
			a2.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S7").setAttribute("class","selected");	
	};
		if (a3.select == 1 && a7.pair == a3.pair) {
		setTimeout(function(){
			document.getElementById("S7").setAttribute("class","disappear");
			document.getElementById("S3").setAttribute("class","disappear");
			a7.select = -1;
			a3.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S7").setAttribute("class","selected");	
	};
		if (a4.select == 1 && a7.pair == a4.pair) {
		setTimeout(function(){
			document.getElementById("S7").setAttribute("class","disappear");
			document.getElementById("S4").setAttribute("class","disappear");
			a7.select = -1;
			a4.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S7").setAttribute("class","selected");	
	};
		if (a5.select == 1 && a7.pair == a5.pair) {
		setTimeout(function(){
			document.getElementById("S7").setAttribute("class","disappear");
			document.getElementById("S5").setAttribute("class","disappear");
			a7.select = -1;
			a5.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S7").setAttribute("class","selected");	
	};
		if (a6.select == 1 && a7.pair == a6.pair) {
		setTimeout(function(){
			document.getElementById("S7").setAttribute("class","disappear");
			document.getElementById("S6").setAttribute("class","disappear");
			a7.select = -1;
			a6.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S7").setAttribute("class","selected");	
	};
		if (a1.select == 1 && a7.pair == a1.pair) {
		setTimeout(function(){
			document.getElementById("S1").setAttribute("class","disappear");
			document.getElementById("S7").setAttribute("class","disappear");
			a1.select = -1;
			a7.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S7").setAttribute("class","selected");	
	};
		if (a8.select == 1 && a7.pair == a8.pair) {
		setTimeout(function(){
			document.getElementById("S7").setAttribute("class","disappear");
			document.getElementById("S8").setAttribute("class","disappear");
			a7.select = -1;
			a8.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S7").setAttribute("class","selected");	
	};
		if (a2.select == 1 && a7.pair !== a2.pair) {
		setTimeout(function(){
			document.getElementById("S7").setAttribute("class","button");
			a2.select = 0;
			document.getElementById("S2").setAttribute("class","button");
		}, 200);		
		document.getElementById("S7").setAttribute("class","wrong");
		document.getElementById("S2").setAttribute("class","wrong");		
		};
		if (a3.select == 1 && a7.pair !== a3.pair) {
		setTimeout(function(){
			document.getElementById("S7").setAttribute("class","button");
			a3.select = 0;
			document.getElementById("S3").setAttribute("class","button");
		}, 200);		
		document.getElementById("S7").setAttribute("class","wrong");
		document.getElementById("S3").setAttribute("class","wrong");		
		};
		if (a4.select == 1 && a7.pair !== a4.pair) {
		setTimeout(function(){
			document.getElementById("S7").setAttribute("class","button");
			a4.select = 0;
			document.getElementById("S4").setAttribute("class","button");
		}, 200);		
		document.getElementById("S7").setAttribute("class","wrong");
		document.getElementById("S4").setAttribute("class","wrong");		
		};
		if (a5.select == 1 && a7.pair !== a5.pair) {
		setTimeout(function(){
			document.getElementById("S7").setAttribute("class","button");
			a5.select = 0;
			document.getElementById("S5").setAttribute("class","button");
		}, 200);		
		document.getElementById("S7").setAttribute("class","wrong");
		document.getElementById("S5").setAttribute("class","wrong");		
		};
		if (a6.select == 1 && a7.pair !== a6.pair) {
		setTimeout(function(){
			document.getElementById("S7").setAttribute("class","button");
			a6.select = 0;
			document.getElementById("S6").setAttribute("class","button");
		}, 200);		
		document.getElementById("S7").setAttribute("class","wrong");
		document.getElementById("S6").setAttribute("class","wrong");		
		};
		if (a1.select == 1 && a7.pair !== a1.pair) {
		setTimeout(function(){
			document.getElementById("S7").setAttribute("class","button");
			a1.select = 0;
			document.getElementById("S1").setAttribute("class","button");
		}, 200);		
		document.getElementById("S7").setAttribute("class","wrong");
		document.getElementById("S1").setAttribute("class","wrong");		
		};
		if (a8.select == 1 && a7.pair !== a8.pair) {
		setTimeout(function(){
			document.getElementById("S7").setAttribute("class","button");
			a8.select = 0;
			document.getElementById("S8").setAttribute("class","button");
		}, 200);		
		document.getElementById("S7").setAttribute("class","wrong");
		document.getElementById("S8").setAttribute("class","wrong");		
		};
	};
};
document.getElementById("S8").onclick = function () {
	if (a1.select <= 0 && a2.select <= 0 && a3.select <= 0 && a4.select <= 0 && a5.select <= 0 && a6.select <= 0 && a7.select <= 0 && a8.select == 0) {
		a8.select = 1;
		document.getElementById("S8").setAttribute("class","selected");
	};
	if (a8.select == 0 && a1.select == 1 || a2.select == 1 || a3.select == 1 || a4.select == 1 || a5.select == 1 || a6.select == 1 || a7.select == 1) {
		if (a2.select == 1 && a8.pair == a2.pair) {
		setTimeout(function(){
			document.getElementById("S8").setAttribute("class","disappear");
			document.getElementById("S2").setAttribute("class","disappear");
			a8.select = -1;
			a2.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S8").setAttribute("class","selected");	
	};
		if (a3.select == 1 && a8.pair == a3.pair) {
		setTimeout(function(){
			document.getElementById("S8").setAttribute("class","disappear");
			document.getElementById("S3").setAttribute("class","disappear");
			a8.select = -1;
			a3.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S8").setAttribute("class","selected");	
	};
		if (a4.select == 1 && a8.pair == a4.pair) {
		setTimeout(function(){
			document.getElementById("S8").setAttribute("class","disappear");
			document.getElementById("S4").setAttribute("class","disappear");
			a8.select = -1;
			a4.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S8").setAttribute("class","selected");	
	};
		if (a5.select == 1 && a8.pair == a5.pair) {
		setTimeout(function(){
			document.getElementById("S8").setAttribute("class","disappear");
			document.getElementById("S5").setAttribute("class","disappear");
			a8.select = -1;
			a5.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S8").setAttribute("class","selected");	
	};
		if (a6.select == 1 && a8.pair == a6.pair) {
		setTimeout(function(){
			document.getElementById("S8").setAttribute("class","disappear");
			document.getElementById("S6").setAttribute("class","disappear");
			a8.select = -1;
			a6.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S8").setAttribute("class","selected");	
	};
		if (a7.select == 1 && a8.pair == a7.pair) {
		setTimeout(function(){
			document.getElementById("S8").setAttribute("class","disappear");
			document.getElementById("S7").setAttribute("class","disappear");
			a8.select = -1;
			a7.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S8").setAttribute("class","selected");	
	};
		if (a1.select == 1 && a8.pair == a1.pair) {
		setTimeout(function(){
			document.getElementById("S1").setAttribute("class","disappear");
			document.getElementById("S8").setAttribute("class","disappear");
			a1.select = -1;
			a8.select =  -1; 
			complete ();
		}, 200);		
		document.getElementById("S8").setAttribute("class","selected");	
	};
		if (a2.select == 1 && a8.pair !== a2.pair) {
		setTimeout(function(){
			document.getElementById("S8").setAttribute("class","button");
			a2.select = 0;
			document.getElementById("S2").setAttribute("class","button");
		}, 200);		
		document.getElementById("S8").setAttribute("class","wrong");
		document.getElementById("S2").setAttribute("class","wrong");		
		};
		if (a3.select == 1 && a8.pair !== a3.pair) {
		setTimeout(function(){
			document.getElementById("S8").setAttribute("class","button");
			a3.select = 0;
			document.getElementById("S3").setAttribute("class","button");
		}, 200);		
		document.getElementById("S8").setAttribute("class","wrong");
		document.getElementById("S3").setAttribute("class","wrong");		
		};
		if (a4.select == 1 && a8.pair !== a4.pair) {
		setTimeout(function(){
			document.getElementById("S8").setAttribute("class","button");
			a4.select = 0;
			document.getElementById("S4").setAttribute("class","button");
		}, 200);		
		document.getElementById("S8").setAttribute("class","wrong");
		document.getElementById("S4").setAttribute("class","wrong");		
		};
		if (a5.select == 1 && a8.pair !== a5.pair) {
		setTimeout(function(){
			document.getElementById("S8").setAttribute("class","button");
			a5.select = 0;
			document.getElementById("S5").setAttribute("class","button");
		}, 200);		
		document.getElementById("S8").setAttribute("class","wrong");
		document.getElementById("S5").setAttribute("class","wrong");		
		};
		if (a6.select == 1 && a8.pair !== a6.pair) {
		setTimeout(function(){
			document.getElementById("S8").setAttribute("class","button");
			a6.select = 0;
			document.getElementById("S6").setAttribute("class","button");
		}, 200);		
		document.getElementById("S8").setAttribute("class","wrong");
		document.getElementById("S6").setAttribute("class","wrong");		
		};
		if (a7.select == 1 && a8.pair !== a7.pair) {
		setTimeout(function(){
			document.getElementById("S8").setAttribute("class","button");
			a7.select = 0;
			document.getElementById("S7").setAttribute("class","button");
		}, 200);		
		document.getElementById("S8").setAttribute("class","wrong");
		document.getElementById("S7").setAttribute("class","wrong");		
		};
		if (a1.select == 1 && a8.pair !== a1.pair) {
		setTimeout(function(){
			document.getElementById("S8").setAttribute("class","button");
			a1.select = 0;
			document.getElementById("S1").setAttribute("class","button");
		}, 200);		
		document.getElementById("S1").setAttribute("class","wrong");
		document.getElementById("S8").setAttribute("class","wrong");		
		};
	};
};
};

/////////////////////////////////////////PICK FOUR JAVASCRIPT/////////////////////////////////////////
/////////////////////////////////////////PICK FOUR JAVASCRIPT/////////////////////////////////////////
/////////////////////////////////////////PICK FOUR JAVASCRIPT/////////////////////////////////////////
/////////////////////////////////////////PICK FOUR JAVASCRIPT/////////////////////////////////////////
/////////////////////////////////////////PICK FOUR JAVASCRIPT/////////////////////////////////////////

function PickFour (z){

	document.getElementById("Question").innerHTML = "Question #" + z + ".  Which of these words means '" + document.getElementById(z+"Q").innerHTML + "':";
	document.getElementById("sentence").style.display = "none";
	document.getElementById("attempt").style.display = "none";
	
	var answer1 = document.getElementById(z+"O1").innerHTML;
	var answer2 = document.getElementById(z+"O2").innerHTML;
	var answer3 = document.getElementById(z+"O3").innerHTML;
	var answer4 = document.getElementById(z+"O4").innerHTML;

/////RANDOMISE THE ANSWERS/////
/////RANDOMISE THE ANSWERS/////
/////RANDOMISE THE ANSWERS/////
var answers = [answer1,answer2,answer3,answer4];
shuffle(answers);

document.getElementById("S1").innerHTML = answers[0];
document.getElementById("S2").innerHTML = answers[1];
document.getElementById("S3").innerHTML = answers[2];
document.getElementById("S4").innerHTML = answers[3];
document.getElementById("S5").innerHTML = "";
document.getElementById("S6").innerHTML = "";
document.getElementById("S7").innerHTML = "";
document.getElementById("S8").innerHTML = "";
document.getElementById("S5").setAttribute("class","hide");
document.getElementById("S6").setAttribute("class","hide");
document.getElementById("S7").setAttribute("class","hide");
document.getElementById("S8").setAttribute("class","hide");

/////CHOOSING THE CORRECT ANSWER/////	
/////CHOOSING THE CORRECT ANSWER/////
/////CHOOSING THE CORRECT ANSWER/////

function checkCorrect () {
	document.getElementById("attempt").setAttribute("class","gborder");
	document.getElementById("attempt").innerHTML = answer1;
	document.getElementById("attempt").style.display = "block";
	setTimeout(function(){
		document.getElementById("attempt").innerHTML = "Correct";
	}, 1000);
	setTimeout(function(){
		document.getElementById("attempt").setAttribute("class","aborder");
		answer1 = 0;
		answer2 = 0;
		answer3 = 0;
		answer4 = 0;
		document.getElementById("S1").setAttribute("class","button");
		document.getElementById("S2").setAttribute("class","button");
		document.getElementById("S3").setAttribute("class","button");
		document.getElementById("S4").setAttribute("class","button");
		document.getElementById("S5").setAttribute("class","button");
		document.getElementById("S6").setAttribute("class","button");
		document.getElementById("S7").setAttribute("class","button");
		document.getElementById("S8").setAttribute("class","button");
		y++;
		nextQuestion();
		console.log(y);
	}, 2000);
};

if (answers[0] == answer1) {
	console.log("ANSWER 1 IS THE CORRECT ONE");
	document.getElementById("S1").onclick = function () {
		checkCorrect ();
		};
	document.getElementById("S2").onclick = function () {
		document.getElementById("S2").setAttribute("class","wrong");		
		setTimeout(function(){
		document.getElementById("S2").setAttribute("class","button");
		}, 200);		
		};		
	document.getElementById("S3").onclick = function () {
		document.getElementById("S3").setAttribute("class","wrong");		
		setTimeout(function(){
		document.getElementById("S3").setAttribute("class","button");
		}, 200);		
		};	
	document.getElementById("S4").onclick = function () {
		document.getElementById("S4").setAttribute("class","wrong");		
		setTimeout(function(){
		document.getElementById("S4").setAttribute("class","button");
		}, 200);		
		};	
	}
if (answers[1] == answer1) {
	console.log("ANSWER 2 IS THE CORRECT ONE");
	document.getElementById("S2").onclick = function () {
		checkCorrect ();
		};
	document.getElementById("S1").onclick = function () {
		document.getElementById("S1").setAttribute("class","wrong");		
		setTimeout(function(){
		document.getElementById("S1").setAttribute("class","button");
		}, 200);		
		};	
	document.getElementById("S3").onclick = function () {
		document.getElementById("S3").setAttribute("class","wrong");		
		setTimeout(function(){
		document.getElementById("S3").setAttribute("class","button");
		}, 200);		
		};	
	document.getElementById("S4").onclick = function () {
		document.getElementById("S4").setAttribute("class","wrong");		
		setTimeout(function(){
		document.getElementById("S4").setAttribute("class","button");
		}, 200);		
		};	
	}
if (answers[2] == answer1) {
	console.log("ANSWER 3 IS THE CORRECT ONE");
	document.getElementById("S3").onclick = function () {
		checkCorrect ();
		};
	document.getElementById("S1").onclick = function () {
		document.getElementById("S1").setAttribute("class","wrong");		
		setTimeout(function(){
		document.getElementById("S1").setAttribute("class","button");
		}, 200);		
		};	
	document.getElementById("S2").onclick = function () {
		document.getElementById("S2").setAttribute("class","wrong");		
		setTimeout(function(){
		document.getElementById("S2").setAttribute("class","button");
		}, 200);		
		};	
	document.getElementById("S4").onclick = function () {
		document.getElementById("S4").setAttribute("class","wrong");		
		setTimeout(function(){
		document.getElementById("S4").setAttribute("class","button");
		}, 200);		
		};	
	}
if (answers[3] == answer1) {
	console.log("ANSWER 4 IS THE CORRECT ONE");
	document.getElementById("S4").onclick = function () {
		checkCorrect ();
		};
	document.getElementById("S1").onclick = function () {
		document.getElementById("S1").setAttribute("class","wrong");		
		setTimeout(function(){
		document.getElementById("S1").setAttribute("class","button");
		}, 200);		
		};	
	document.getElementById("S2").onclick = function () {
		document.getElementById("S2").setAttribute("class","wrong");		
		setTimeout(function(){
		document.getElementById("S2").setAttribute("class","button");
		}, 200);		
		};	
	document.getElementById("S3").onclick = function () {
		document.getElementById("S3").setAttribute("class","wrong");		
		setTimeout(function(){
		document.getElementById("S3").setAttribute("class","button");
		}, 200);		
		};	
	}	
};

function nextQuestion () {
if (y>=2) {
	document.getElementById("score").innerHTML = "Score: " + (y-1);
};
if (y==11) {
	document.getElementById("attempt").setAttribute("class","gborder");
	level++;
	document.getElementById("attempt").setAttribute("class","goborder");
	document.getElementById("attempt").innerHTML = "CONGRATULATIONS YOU HAVE COMPLETED THIS LESSON<br>TO CONTINUE FROM WHERE YOU LEFT OFF TAKE NOTE OF THE FOLLOWING PROGRESS CODE: <br><br><font size = 24>" + window["lessoncode" + level]+ "</font>";
	document.getElementById("attempt").style.display = "block";
	document.getElementById("submit").innerHTML = "Continue";
	document.getElementById("submit").style.display = "block";
	document.getElementById("table1").style.visibility = "hidden";
	document.getElementById("Question").style.display = "none";
	document.getElementById("score").style.display = "none";
//	setTimeout(function(){
	document.getElementById("submit").onclick = function () {
	document.getElementById("attempt").setAttribute("class","aborder");
		document.getElementById("submit").innerHTML = "Submit Answer";
		document.getElementById("submit").style.display = "none";
		document.getElementById("instructionline").style.display = "block";
		document.getElementById("instructionline").innerHTML = "Choose your lesson below";
			document.getElementById("QuestionBoard").style.display = "none";
			document.getElementById("table0").style.display = "block";
			y = 1;
			document.getElementById("score").innerHTML = "Score: " + (y-1);
			for (var i = 1; i <= 10; i++) picklesson(i);
//		}, 5000);
	};
	} else if  (document.getElementById(y+"T").innerHTML == "Sentence") {
		Sentence(y);
	} else if (document.getElementById(y+"T").innerHTML == "Match"){
		Match(y);
	} else if (document.getElementById(y+"T").innerHTML == "Pick four"){
		PickFour(y);
	}
}
nextQuestion();
}



//window.onload =  function() {
//};
/**
 * @author Philcool12
 */
