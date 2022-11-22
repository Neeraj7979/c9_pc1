// define function calculateWeightedAverage here to calcuate weighted average
const assignment=10;
const project=35;
const quiz=10;
const midTerm=15;
const finalTerm=30;

var assignmentScore=97;
var projectScore=82;
var quizScore=60;
var midTernScore=60;
var midTermScore=75;
var finalExamScore=80;

var assignmentPercentSCore = (assignment/100)*assignmentScore;
var projectPercentSCore = (project/100)*projectScore;
var quizPercentSCore = (quiz/100)*quizScore;
var midTermPercentSCore = (midTerm/100)*midTermScore;
var finalTermPercentSCore= (finalTerm/100)*midTermScore;

overallPercentage =assignmentPercentSCore+projectPercentSCore+quizPercentSCore+midTermPercentSCore+finalTermPercentSCore;
console.log(`The weighted average score is :${overallPercentage}`);
