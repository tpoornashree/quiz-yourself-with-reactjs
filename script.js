const quizData = [
    {
        question: "In React.js which one of the following is used to create a class for Inheritance ?",
        a: "create",
        b: "extends",
        c: "inherits",
        d: "delete",
        correct: "b",
    },
    {
        question: "Which of the following is a way to handle data in React.js ?",
        a: "state and props",
        b: "state and services",
        c: "components and services",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Which of the following is true regarding Babel ?",
        a: "compiler",
        b: "transpiler",
        c: "both of the above",
        d: "none",
        correct: "c",
    },
    {
        question: "In React.js, how we can pass the data from one component to another in React.js ?",
        a: "Render With arguments",
        b: "Props",
        c: "PropTypes",
        d: "setState",
        correct: "b",
    },
    {
        question: "Which of the following function is true about changing the state in React.js ?",
        a: " this.setState",
        b: "this.state()",
        c: " none of the above",
        d: "this()",
        correct: "a",
    },
    {
        question: "Which of the following method is true about referring parent class in React.js ?",
        a: "super()",
        b: "this()",
        c: "self()",
        d: "inherits()",
        correct: "a",
    },

    {
        question: "Which of the following is true about key props ?",
        a: "one type of attribute of html",
        b: "not used as array",
        c: "used for adding to its beauty",
        d: "Key prop is a way to identify the newly added element",
        correct: "d",
    },
    {
        question: "What were the major problems with MVC framework?",
        a: "DOM manipulation was very expensive",
        b: "Applications were slow and inefficient",
        c: " Both A and B",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What can we do with HOC?",
        a: "all of the above",
        b: "State abstraction and manipulation",
        c: "Props manipulation",
        d: "render high jacking",
        correct: "a",
    },
    {
        question: "What are the limitations of ReactJS?",
        a: "all of the below",
        b: "React is using inline templating and JSX. This can seem awkward to some developers",
        c: "The react library is too large",
        d: "React is only for view layer of the app so we still need the help of other technologies to get a complete tooling set for the development",
        correct: "a",
    },
    {
        question: "Who is the author of React JS?",
        a: "shraddha",
        b: "Jordan Walke",
        c: "avinash",
        d: "william",
        correct: "b",
    },
    
];


const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions!</h2>
                
                <button onclick="location.reload()">Try Again!</button>
            `;
        }
    }
});