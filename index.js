
 var readlineSync = require("readline-sync")
 var userName = readlineSync.question("What's your name? ")
 console.log("Welcome! "+userName+" to National Games QUIZ")

 var score=0
 function checkAnswer(question,answer)
 {
   var uanswer = readlineSync.question(question)
   if(uanswer === answer)
   {
     console.log("you are right!")
     score = score + 1
   }
   else{
     console.log("you are wrong")
   }

   console.log("current Score : ",score)
 }

 var highestScores =[{
   name : "Veena",
   score : 5
 },
 {
   name : "Akanksha",
   score : 5
 }]

var qapairs = [
  {
    question:"What is the National Game of USA?\na.Golf\nb.Ice Hockey\nc.Football\nd.Baseball\n",
    answer :"d"
  },
  {
    question:"What is the National Game of Japan?\na.Table Tennis\nb.Judo\nc.Badminton\nd.Archery\n",
    answer : "b"
  },
  {
    question:"What is the National Game of England?\na.Cricket\nb.Football\nc.Rugby Football\nd.Bull Fighting\n",
    answer:"a"
  },
  {
    question:"What is the National Game of New Zealand?\na.Cricket\nb.Rugby\nc.Tennis\nd.Golf\n",
    answer :"b"
  },
  {
    question:"What is the National Game of China?\na.Badminton\nb.Archery\nc.Table Tennis\nd.Judo\n",
    answer :"c"
  }
]

for(var i=0;i<qapairs.length;i++)
{
  var currentPair = qapairs[i]
  checkAnswer(currentPair.question,currentPair.answer)
}

console.log("Yay! you scored : ",score)
console.log("Highest score scored by :")
for(var i=0;i<highestScores.length;i++)
{
    console.log(highestScores[i].name)
    console.log("Score :",highestScores[i].score)
}






