const {data} = require('./p4-data.js');

const questions=['Q1','Q2','Q3'];
function getQuestions(){ 
  const q= questions.toString();
  return q;
};

function getAnswers(){
    const answers=['A1','A2','A3'];
    return answers;
};

function getQuestionsAnswers(){
  const qanda= data;
  return qanda;
};

function getQuestion(number = ""){
    const qobj= {
        question: questions[number].toString(),
        number: questions[number].charAt(1),
        error: '',
    }
    return qobj;
};

function getAnswer(number = ""){
    const aobj= {
        answer: answers[number].toString(),
        number: questions[number].charAt(1),
        error: '',
    }
    return aobj;
};

function getQuestionAnswer(number=""){
    const qaobj= {
        question: questions[number].toString(),
        answer: answers[number].toString(),
        number: questions[number].charAt(1),
        error: '',
    }
    return qaobj;
};

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
// Set a constant to true to test the appropriate function
const testGetQs = true;
const testGetAs = false;
const testGetQsAs = false;
const testGetQ = false;
const testGetA = false;
const testGetQA = false;
const testAdd = false;      // Extra credit
const testUpdate = false;   // Extra credit
const testDelete = false;   // Extra credit

// getQuestions()
if (testGetQs) {
  testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
  testing("getAnswers", { d: "()", f: getAnswers() });
}

// getQuestionsAnswers()
if (testGetQsAs) {
  testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

// getQuestion()
if (testGetQ) {
  testing(
    "getQuestion",
    { d: "()", f: getQuestion() },      // Extra credit: +1
    { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
    { d: "(1)", f: getQuestion(1) },
    { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
  );
}

// getAnswer()
if (testGetA) {
  testing(
    "getAnswer",
    { d: "()", f: getAnswer() },        // Extra credit: +1
    { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
    { d: "(1)", f: getAnswer(1) },
    { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
  );
}

// getQuestionAnswer()
if (testGetQA) {
  testing(
    "getQuestionAnswer",
    { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
    { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
    { d: "(1)", f: getQuestionAnswer(1) },
    { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
  );
}

module.exports(
  getQuestions(), getAnswers(), getQuestionsAnswers(),
)