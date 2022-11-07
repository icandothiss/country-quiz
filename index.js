//Elements
const answers = document.getElementById("answers");
const firstANswer = document.getElementById("first");
const secondANswer = document.getElementById("second");
const thirdANswer = document.getElementById("third");
const fourthANswer = document.getElementById("fourth");
const question = document.getElementById("question");
const flagTunisia = document.getElementById("flag-tunisia");
const flagFrance = document.getElementById("flag-france");
const flagKualaLumpur = document.getElementById("flag-kuala-lumpur");
const headerImage = document.getElementById("header-image");
const nextButton = document.getElementById("next-button");
const flagContainer = document.getElementById("flag-container");
const container = document.getElementById("container");
const tryAgainButton = document.getElementById("tryagain-button");
const secondContainer = document.getElementById("second-container");
const scoreCounter = document.getElementById("score-counter");

//answer Lists Flag
const answerListFlag1 = {
  flag: flagTunisia,
  question: "Which country does this flag belong to",
  correctAnswer: "Tunisia",
  answers: ["Malysia", "Tunisia", "Canberra", "Ottawa"],
};
const answerListFlag2 = {
  flag: flagFrance,
  question: "Which country does this flag belong to",
  correctAnswer: "France",
  answers: ["Germany", "France", "Russia", "Algerie"],
};
const answerListFlag3 = {
  flag: flagKualaLumpur,
  question: "Which country does this flag belong to",
  correctAnswer: "KualaLumpur",
  answers: ["South Africe", "KualaLumpur", "Egypt", "Dubai"],
};

const answerListsFlag = [answerListFlag1, answerListFlag2, answerListFlag3];

//Answer Lists

const answerList1 = {
  question: "Kuala Lumpur is the capital of",
  correctAnswer: "Malysia",
  answers: ["Malysia", "Tunisia", "Canberra", "Ottawa"],
};
const answerList2 = {
  question: "USA is the capital of",
  correctAnswer: "Washington",
  answers: ["Washington", "Bridgetown", "Sofia", "Amman"],
};
const answerList3 = {
  question: "Kyiv is the capital of",
  correctAnswer: "Ukrain",
  answers: ["Ukrain", "Kuwait City", "Djibouti", "Valletta"],
};
const answerLists = [answerList1, answerList2, answerList3];

const choice = [answerListsFlag, answerLists];

//EventListeners
answers.addEventListener("click", pickAnswer);
nextButton.addEventListener("click", nextQuestion);
tryAgainButton.addEventListener("click", tryAgainFunction);

//functions
//Generate random answers
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

//shuffled arrays

let capitalOrFlag = shuffleArray(choice);
let array = shuffleArray(answerLists);
let flagArray = shuffleArray(answerListsFlag);

//replace with the shuffled answers/questions

function replaceShuffle() {
  if (capitalOrFlag[0] === answerListsFlag) {
    flagArray[0].flag.classList.remove("hide");
    question.innerText = flagArray[0].question;
    firstANswer.innerText = flagArray[0].answers[0];
    secondANswer.innerText = flagArray[0].answers[1];
    thirdANswer.innerText = flagArray[0].answers[2];
    fourthANswer.innerText = flagArray[0].answers[3];
  } else if (capitalOrFlag[0] === answerLists) {
    headerImage.classList.add("margin-bottom");
    question.innerText = array[0].question;
    firstANswer.innerText = array[0].answers[0];
    secondANswer.innerText = array[0].answers[1];
    thirdANswer.innerText = array[0].answers[2];
    fourthANswer.innerText = array[0].answers[3];
  }
}
replaceShuffle();

//check for the correct answer

function pickAnswer(e) {
  if (e.target.classList[0] === "answer") {
    if (capitalOrFlag[0] === answerLists) {
      if (e.target.childNodes[3].innerText === array[0].correctAnswer) {
        e.target.classList.add("correct");
        nextButton.classList.remove("hide");
      } else {
        e.target.classList.add("false");
        nextButton.classList.add("hide");
        for (let i = 0; i < container.children.length; i++) {
          container.children[i].classList.add("hide");
          secondContainer.classList.remove("hide");
          scoreCounter.innerText = counter;
        }
      }
    } else if (capitalOrFlag[0] === answerListsFlag) {
      if (e.target.childNodes[3].innerText === flagArray[0].correctAnswer) {
        e.target.classList.add("correct");
        nextButton.classList.remove("hide");
      } else {
        e.target.classList.add("false");
        nextButton.classList.add("hide");
        for (let i = 0; i < container.children.length; i++) {
          container.children[i].classList.add("hide");
          secondContainer.classList.remove("hide");
          scoreCounter.innerText = counter;
        }
      }
    }
  }
}

let counter = 0;
function nextQuestion() {
  shuffleArray(choice);
  shuffleArray(answerLists);
  shuffleArray(answerListsFlag);

  //check if theres an existing flag, if there is remove it

  for (let i = 0; i < flagContainer.children.length; i++) {
    if (!flagContainer.children[i].classList.contains("hide")) {
      flagContainer.children[i].classList.add("hide");
    }
  }
  //shuffle and replace
  shuffleArray(flagArray[0].answers);
  shuffleArray(array[0].answers);
  if (capitalOrFlag[0] === answerListsFlag) {
    if (headerImage.classList.contains("margin-bottom")) {
      headerImage.classList.remove("margin-bottom");
    }
    flagArray[0].flag.classList.remove("hide");
    question.innerText = flagArray[0].question;
    firstANswer.innerText = flagArray[0].answers[0];
    secondANswer.innerText = flagArray[0].answers[1];
    thirdANswer.innerText = flagArray[0].answers[2];
    fourthANswer.innerText = flagArray[0].answers[3];
  } else if (capitalOrFlag[0] === answerLists) {
    if (!headerImage.classList.contains("margin-bottom")) {
      headerImage.classList.add("margin-bottom");
      console.log("hi");
    }
    flagArray[0].flag.classList.add("hide");
    question.innerText = array[0].question;
    firstANswer.innerText = array[0].answers[0];
    secondANswer.innerText = array[0].answers[1];
    thirdANswer.innerText = array[0].answers[2];
    fourthANswer.innerText = array[0].answers[3];
  }

  for (let i = 0; i < answers.children.length; i++) {
    if (answers.children[i].classList[1] === "correct") {
      answers.children[i].classList.remove("correct");
    }
  }
  counter++;
  nextButton.classList.add("hide");
  console.log(counter);
}

//try again function
function tryAgainFunction() {
  for (let i = 0; i < container.children.length; i++) {
    container.children[i].classList.remove("hide");
    secondContainer.classList.add("hide");
  }
  for (let i = 0; i < answers.children.length; i++) {
    if (answers.children[i].classList.contains("false")) {
      answers.children[i].classList.remove("false");
    }
  }
  counter = 0;
  replaceShuffle();
}
