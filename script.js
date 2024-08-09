document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let score = 0;

    // Check answers
    if (document.querySelector('input[name="q1"]:checked').value === 'a') {
        score++;
    }
    // Add similar checks for other questions

    // Display result
    document.getElementById('result').innerHTML = `<h3>You scored ${score} out of 5!</h3>`;
});
