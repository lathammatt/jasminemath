function add (num1, num2){
	var answer = +num1 + +num2;
	input.value = answer;
};

function subtract (num1, num2) {
	var answer = +num1 - +num2;
	input.value = answer;
};

function multiply (num1, num2){
	var answer = +num1 * +num2;
	input.value = answer;
};

function divide (num1, num2){
	var answer = +num1 / +num2;
	input.value = answer;
};

function square (num1){
	var answer = +num1 * +num1;
	input.value = answer;
};

function sroot (num1){
	var answer = Math.sqrt(num1);
	input.value = answer;
};

var input = document.getElementById("input");
var addButton = document.getElementById("add");
var minus = document.getElementById("minus");
var times = document.getElementById("times");
var div = document.getElementById("divide");
var blocky = document.getElementById("square");
var rooty = document.getElementById("root");
var num1 = 0;
var num2 = 0;

addButton.addEventListener("click", function (){
	var num1 = input.value;
	input.value = "";
	input.focus();
	input.addEventListener("keyup", function(event){
		if (event.keyCode === 13){
			var num2 = input.value;
			input.value = "";
			add(num1, num2);
		};
	});
});

minus.addEventListener("click", function (){
	var num1 = input.value;
	input.value = "";
	input.focus();
	input.addEventListener("keyup", function(event){
		if (event.keyCode === 13){
			var num2 = input.value;
			input.value = "";
			subtract(num1, num2);
		};
	});
});

times.addEventListener("click", function (){
	var num1 = input.value;
	input.value = "";
	input.focus();
	input.addEventListener("keyup", function(event){
		if (event.keyCode === 13){
			var num2 = input.value;
			input.value = "";
			multiply(num1, num2);
		};
	});
});

div.addEventListener("click", function (){
	var num1 = input.value;
	input.value = "";
	input.focus();
	input.addEventListener("keyup", function(event){
		if (event.keyCode === 13){
			var num2 = input.value;
			input.value = "";
			divide(num1, num2);
		};
	});
});

blocky.addEventListener("click", function (){
	var num1 = input.value;
	square(num1);
});

rooty.addEventListener("click", function (){
	var num1 = input.value;
	sroot(num1);
});




