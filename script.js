// Task 1: Color-changing button
const colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', function() {
    this.style.backgroundColor = this.style.backgroundColor === 'blue' ? 'red' : 'blue';
});

// Task 2: Time-based greeting
function showGreeting() {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    alert(greeting);
}

// Task 3: Basic calculator
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 + num2;
    document.getElementById('result').textContent = `Result: ${result}`;
}