function checkAnswer(exerciseId) {
    const answerInput = document.getElementById('answer' + exerciseId);
    const resultDiv = document.getElementById('result' + exerciseId);
    let correctAnswer;
    let userAnswer;
    let isCorrect;

    if (exerciseId === 1) { correctAnswer = 13; userAnswer = parseInt(answerInput.value); isCorrect = userAnswer === correctAnswer; }
    else if (exerciseId === 2) { correctAnswer = 5; userAnswer = parseInt(answerInput.value); isCorrect = userAnswer === correctAnswer; }
    else if (exerciseId === 3) { correctAnswer = /теорема пифагора/; userAnswer = answerInput.value.trim().toLowerCase(); isCorrect = correctAnswer.test(userAnswer); }
    else if (exerciseId === 4) { correctAnswer = 25; userAnswer = parseInt(answerInput.value); isCorrect = userAnswer === correctAnswer; }
    else if (exerciseId === 5) { correctAnswer = -10; userAnswer = parseInt(answerInput.value); isCorrect = userAnswer === correctAnswer; }
    else {
        resultDiv.textContent = "Ошибка в номере задачи.";
        return;
    }

    if (isNaN(userAnswer) && exerciseId !== 3) {
        resultDiv.textContent = "Пожалуйста, введите число.";
        resultDiv.style.color = "red";
        return;
    }

    if (isCorrect) {
        resultDiv.textContent = "Верно!";
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = `Неверно. Правильный ответ: ${correctAnswer}`;
        resultDiv.style.color = "red";
    }
}

