
document.getElementById('startQuizBtn').addEventListener('click', function() {
    document.querySelector('.intro').classList.add('hidden');
    document.getElementById('quizSection').classList.remove('hidden');
    loadQuiz();
});

function loadQuiz() {
    // Dummy content for the quiz - Replace with API call
    const questionText = "What is the capital of France?";
    const options = ["Paris", "London", "Rome", "Berlin"];

    document.getElementById('questionText').innerText = questionText;
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = checkAnswer.bind(null, option);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    if (selectedOption === "Paris") {
        document.getElementById('resultContainer').classList.remove('hidden');
    } else {
        alert("Wrong Answer! Try Again.");
    }
}
