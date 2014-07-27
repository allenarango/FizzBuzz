$(document).ready(function() {

var item = prompt ("Enter a number");
	while(isNaN(item) === true) {
			item = prompt ("You must enter a number")
		}

var i = 0;

var game = function(number) {
	for (var i = 1; i <= number; i ++) {
		if (i % 5 === 0 && i % 3 === 0) {
			$(".number").append('<p>' + "FizzBuzz" + '</p>');
		}
		else if (i % 3 === 0) {
			$(".number").append('<p>' + "Fizz" + '</p>');
		}
		else if (i % 5 === 0) {
			$(".number").append('<p>' + "Buzz" + '</p>');
		}
		else {
			$(".number").append('<p>' + i + '</p>');
		}
	}
}

game (item);

});