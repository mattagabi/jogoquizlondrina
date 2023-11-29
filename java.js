const questions = [
    {
        question: "Em que ano Londrina foi fundada?",
        options: ["1933", "1934", "1927", "190"],
        correctAnswer: "1934"
    },
    {
        question: "Qual é o apelido dado a Londrina?",
        options: ["Russia Brasileira", "Londres", "Pequena Londres", "Caipiras"],
        correctAnswer: "Pequena Londres"
    },
    {
        question: " Qual é o principal símbolo da cidade?",
        options: ["Jardim Botanico", "Museu Historio de Londrina", "Lago igapo","A Torre da Catedral Metropolitana."],
        correctAnswer: "A Torre da Catedral Metropolitana"
    },
    {
        question: " Qual é a universidade mais antiga de Londrina?",
        options: ["Universidade Estadual De Londrina", "Universidade Positivo ", "Universidade Tecnologica Federal Do parana ", "Instituto Federal Do Parana"],
        correctAnswer: "Universidade Estadual De Londrina"
    },
    {
        question: "Em que região do Paraná está localizada Londrina?",
        options: ["Oeste do Parana", "Norte do Parana", "Sul do Parana", "Leste do Parana"],
        correctAnswer: "Norte do Parana"
    },
    {
        question: "Em que ano Londrina foi elevada à categoria de cidade",
        options: [" 1937", "1938", "1939", "1940."],
        correctAnswer: "1937."
    },
    {
        question: "Qual é o nome da avenida mais famosa de Londrina",
        options: ["Av Higeanopolis", "Av Aracy Soares Santos", "Av Tiradentes", "Av Maringa"],
        correctAnswer: "Av Higeanopolis"
    },
    {
        question: "Que importante rodovia corta o município de Londrina, conectando-o a outras regiões do país?",
        options: ["Rodovia BR-379", "Rodovia BR-370", "Rodovia BR-371", "Rodovia BR-372"],
        correctAnswer: "Rodovia BR-369"
    },
    {
        question: "Qual é a data de comemoração do aniversário de Londrina?",
        options: ["10 De Dezembro", "11 De Dezembro", "12 De Dezembro", "13 De Dezembro"],
        correctAnswer: "10 De Dezembro"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";
    document.getElementById("result").textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    document.getElementById("result-screen").style.display = "none";
    document.getElementById("start-screen").style.display = "block";
}
