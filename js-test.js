window.onload = function () {
    var button = document.getElementById('StartButton');
    button.onclick = function () {
        var firstNum = Number(prompt('Enter first number'));
        var secondNum = Number(prompt('Enter second number'));
        if (firstNum >= 0 && firstNum <= 10 && secondNum <= 10 && secondNum >= 0){
            alert('Are you serious? You can do it by yourself.');
        }
        var sum = firstNum + secondNum;
        alert('Result is ' + sum);
    }
}