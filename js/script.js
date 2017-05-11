var pos = 0;
var text_status;
var correct = 0;
var question, numero1, numero2, resultado;
var questions = [
    ["4", "4", "8", "soma"],
    ["7", "8", "15", "soma"],
    ["2", "3", "6", "multiplicacao"],
    ["12", "2", "10", "subtracao"],
    ["6", "2", "3", "divisao"],
    ["4", "3", "7", "soma"],
    ["9", "4", "5", "subtracao"],
    ["3", "3", "9", "multiplicacao"],
    ["10", "2", "5", "divisao"],
    ["7", "1", "6", "subtracao"]
];

function getElement(x) {
    return document.getElementById(x);
}

function renderQuestion() {
    text_status = getElement("text-status");
    num1 = getElement("numb1");
    num2 = getElement("numb2");
    result = getElement("result");
    text_status.innerHTML = "Pergunta " + (pos + 1) + " de " + questions.length;
    numero1 = questions[pos][0];
    numero2 = questions[pos][1];
    resultado = questions[pos][2];
    num1.innerHTML = numero1;
    num2.innerHTML = numero2;
    result.innerHTML = resultado;
}

function checkAnswer(userAnswer) {
    if (userAnswer == questions[pos][3]) {
        correct++;
    }
    pos++;
    pos < questions.length ? renderQuestion() : testCompleted();
}

function testCompleted() {
    container = getElement("container");
    botoes = getElement("botoes");

    msgParabens = "<h2>Parabéns!</h2><br>";
    msgResultado = "<h2>Você acertou " + correct + " de " + questions.length + " questões.</h2><br>";
    msgReiniciar = "<h3>Clique no botão abaixo para refazer o teste</h3>"
    container.innerHTML = msgParabens + msgResultado + msgReiniciar;

    msgBotao = "<img src='img/reiniciar.gif' alt='reiniciar' id='reiniciar' onclick='reiniciarJogo()'>"
    botoes.innerHTML = msgBotao;

}

function reiniciarJogo() {
    window.location.reload();
}

window.addEventListener("load", renderQuestion, false);

$(function () {
    $('#soma').click(function () {
        checkAnswer('soma')
    });
    $('#subtracao').click(function () {
        checkAnswer('subtracao')
    });
    $('#multiplicacao').click(function () {
        checkAnswer('multiplicacao')
    });
    $('#divisao').click(function () {
        checkAnswer('divisao')
    });
});
