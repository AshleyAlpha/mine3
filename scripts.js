function check() {
  var questionOne = document.quiz.questionOne.value;
  var questionTwo = document.quiz.questionTwo.value;
  var questionThree = document.quiz.questionThree.value;
  var questionFour = document.quiz.questionFour.value;
  var questionFive = document.quiz.questionFive.value;
  var questionSix = document.quiz.questionSix.value;
  var questionSeven = document.quiz.questionSeven.value;
  var questionEight = document.quiz.questionEight.value;
  var questionNine = document.quiz.questionNine.value;
  var questionTen = document.quiz.questionTen.value;
  var count = 0;

  if (questionOne == "2") {
    count += 20;
  }
  if (questionTwo == "2") {
    count += 20;
  }
  if (questionThree == "3") {
    count += 20;
  }
  if (questionFour == "3") {
    count += 20;
  }
  if (questionFive == "4") {
    count += 20;
  }
  if (questionSix == "2") {
    count += 20;
  }
  if (questionSeven == "2") {
    count += 20;
  }
  if (questionEight == "3") {
    count += 20;
  }
  if (questionNine == "2") {
    count += 20;
  }
  if (questionTen == "4") {
    count += 20;
  }
  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("number_count").innerHTML = "You got " + count + "%.";

  $("#button").hide();
  $("#quiz").hide();
  $("#number_count").show();
  event.preventDefault();
}
