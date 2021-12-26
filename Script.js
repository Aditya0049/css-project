
// ------------------- Set Questions And Answers --------------------
const quizdata = [
  {
    question:"What does HTML stands for?",
    a:"Hightext machine language.",
    b:"Hypertext Markup Language.",
    c:"Hypertext Machine language.",
    d:"Hypertext and links markup language.",
    correct:"opt2"
  },
  {
    question:"The year in which HTML was first proposed _______.",
    a:"1990",
    b:"1980",
    c:"2000",
    d:"1995",
    correct:"opt1"
  },
  {
    question:"A program in HTML can be rendered and read by -",
    a:"Web browser",
    b:"Server",
    c:"Interpreter",
    d:"None of the above",
    correct:"opt1"
  },
  {
    question:"CSS stands for -",
    a:"Cascade style sheets",
    b:"Color and style sheets",
    c:"Cascading style sheets",
    d:"None of the above",
    correct:"opt3"
  },
  {
    question:"Which type of language is Javascript",
    a:"Programming",
    b:"Scripting",
    c:"Markup",
    d:"None of the above",
    correct:"opt2"
  }
];


// ------------------- Getting Refrenceses From HTML -------------------------
const Question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");
const showscore = document.querySelector("#showscore");
const innerdiv = document.querySelector("#inner-div");
const start = document.querySelector("#Startbtn");
const infobox = document.querySelector("#infobox");
// -------------------------- Set Default Values -------------------------
let questioncount = 0;
let score = 0;

// ------------ loadquestion() function for loading new questions ------------
function loadquestion(){

  // document.querySelector("#wrongicon").classList.add("wrong");
  // document.querySelector("#checkicon").classList.add("check");

  const questiondata = quizdata[questioncount];

  Question.innerHTML = questiondata.question;
  option1.innerHTML = questiondata.a;
  option2.innerHTML = questiondata.b;
  option3.innerHTML = questiondata.c;
  option4.innerHTML = questiondata.d;
}

loadquestion();


 // ------------- getcheckedans() function for getting checked answers --------
function getcheckedans(){
  let ans;
  answers.forEach(function(curroption){
    if(curroption.checked){
      ans=curroption.id;
    }
  });

  return ans;
}

// ----------- deselect() function for unchecked default checked option --------
function deselect(){
  answers.forEach(function(curroption){
    curroption.checked = false;
  });
}

// ------------- ActionListener for Submit Button -----------------
submit.addEventListener('click',function(){
    const checkedanswer = getcheckedans();
    const correctanswer = quizdata[questioncount].correct;

    if(checkedanswer===correctanswer){
      score++;
    }

    questioncount++;

    deselect();

    if(questioncount < quizdata.length){
      loadquestion();
    }else{
      if(score>=3){
        showscore.innerHTML=`
            <h3>You Complete The Quiz !<h3>
            <h3>Awosome! You Scored ${score}/${quizdata.length} Marks &#9996;</h3><br>
            <button class="btn" onclick="location.reload()">Play Again</button>
            <h3><a class="showans" href="Correct.html" role="button">View Answers</a></h3>
        `;
      }else{
        showscore.innerHTML=`
            <h3>You Complete The Quiz !<h3>
            <h3>You Scored ${score}/${quizdata.length} Marks</h3>
            <h3>Better Luck For Next Time &#128077;</h3><br>
            <button class="btn" onclick="location.reload()">Play Again</button>
            <h3><a class="showans" href="Correct.html">View Answers</a></h3>
        `;
      }
       innerdiv.classList.add('quiz');
       showscore.classList.remove('scorearea');
    }
});

// -------------------- ActionListener for start button ----------------------
start.addEventListener('click',function(){
  infobox.classList.add("info");
  innerdiv.classList.remove('quiz');
});
