$(document).ready(function() {
	var i = 0;
	for (i = 1; i < 101; i ++) {
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
});