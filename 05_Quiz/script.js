document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];

  trueAnswer = [];
  let currentIndex = 1;

  startBtn.addEventListener("click", () => {
    startBtn.classList = "hidden";
    questionContainer.classList.remove("hidden");
    nextBtn.classList.remove("hidden");

    questionText.textContent = questions[0].question;
    choicesList.innerHTML = `<li>${questions[0].choices[0]}</li><li>${questions[0].choices[1]}</li><li>${questions[0].choices[2]}</li>`;
    choicesList.addEventListener("click", (e) => {
      if (e.target.textContent == questions[0].answer) {
      } else {
        trueAnswer.push(false);
      }
      console.log(trueAnswer);
      nextBtn.addEventListener("click", () => {
        nextQuestion();
      });
    });
  });

  function nextQuestion() {
    if (currentIndex < questions.length) {
      questionText.textContent = questions[currentIndex].question;
      choicesList.innerHTML = `<li>${questions[currentIndex].choices[0]}</li><li>${questions[currentIndex].choices[1]}</li><li>${questions[currentIndex].choices[2]}</li>`;
      choicesList.addEventListener("click", (e) => {
        if (e.target.textContent == questions[currentIndex].answer) {
        } else {
          trueAnswer.push(false);
        }
      });
      currentIndex++;
    }
  }
});
