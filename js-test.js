'use strict';
var answer;
do{
    answer = parseInt(prompt('1+1=?'));
    if(answer != 2){
        var b = confirm('wrong answer. try again');
        if (b == false){
            break;
        }
    }

}
while (answer !=2);
if (answer == 2) {
    var first_right_answer = confirm('you are right next question?');
    if (first_right_answer == true) {
        var factorial_num = Math.floor(Math.random() * 20 + 1);
        var factorial_question = parseInt(prompt('f(' + factorial_num + ')=?'));

        function factorial(n) {
            return (n != 1) ? n * factorial(n - 1) : 1;
        }

        if (factorial(factorial_num) === factorial_question) {
            alert('You are awesome');
        }
        else {
            alert('You are wrong.');
        }

    }

}
