let score = 0;
let counter = 0;

function init() {
    createQuestion();
    updateUi();
}
function createQuestion() {

    if (counter > trivia_arr.length - 1) {
        let div = document.createElement("div")
        document.querySelector("#id_parent").append(div);
        div.innerHTML = `Game Over! <br><br> Your score is: ` + score +
            ` <br><button style="color: white;
                background:   #f27548;
                border: none;
                padding:0 16px;
                border-radius: 30px;" 
                class="restart mt-5">Play Again</button>`

        div.style.color = `rgb(135, 67, 86)`
        div.style.fontFamily = `'Arima', cursive`
        div.style.fontSize = `1.5em`

        document.querySelector(".h5").innerHTML = ""
        document.querySelector(".question").innerHTML = ``
        document.querySelector(".h4").classList.add(`d-none`);

        let btnRestart = div.querySelector(".restart");
        btnRestart.addEventListener("click", function () {
            document.querySelector("#id_parent").innerHTML = "";

            counter = 0;
            score = 0;
            qItem = trivia_arr[counter];
            addSingleQuestion(qItem.question, qItem.answers, qItem.correctAnswer);
            updateUi();
            document.querySelector(".h4").classList.remove(`d-none`);
            counter++;
        })
        // יעצור את הפונקציה ולא יתן להמשיך
        return;
    }
    document.querySelector("#id_parent").innerHTML = "";
    qItem = trivia_arr[counter];
    addSingleQuestion(qItem.question, qItem.answers, qItem.correctAnswer);
    counter++;
}

function successAnswer() {
    document.querySelector(".h5").innerHTML = ""
  
    score += 20;
    updateUi();
    createQuestion();
}

function failAnswer() {
    document.querySelector(".h5").innerHTML = ""
   
    updateUi();
    createQuestion();
}

function updateUi() {
    document.querySelector("#id_score").innerHTML = score;
}

init();