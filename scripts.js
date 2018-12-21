
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
  var questionEleven = document.quiz.questionEleven.value;
  var questionTwelve = document.quiz.questionTwelve.value;
  var questionThirteen = document.quiz.questionThirteen.value;
  var questionFourteen = document.quiz.questionFourteen.value;
  var questionFifteen = document.quiz.questionFifteen.value;
  var count = 0;

  if (questionOne == "2") {
    count += 4;
  }
  if (questionTwo == "2") {
    count += 4;
  }
  if (questionThree == "3") {
    count += 4;
  }
  if (questionFour == "3") {
    count += 4;
  }
  if (questionFive == "4") {
    count += 4;
  }
  if (questionSix == "2") {
    count += 4;
  }
  if (questionSeven == "2") {
    count += 4;
  }
  if (questionEight == "3") {
    count += 4;
  }
  if (questionNine == "2") {
    count += 4;
  }
  if (questionTen == "4") {
    count += 4;
  }
  if (questionEleven == "1") {
    count += 4;
  }
  if (questionTwelve == "3") {
    count += 4;
  }
  if (questionThirteen == "4") {
    count += 4;
  }
  if (questionFourteen == "1") {
    count += 4;
  }
  if (questionFifteen == "4") {
    count += 4;
  }
  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("number_count").innerHTML =
    "Your score is: " + count + "/60";

  $(document).ready(function () {
    $("#button").hide();
    $("#quiz").hide();
    $("#number_count").show();
    event.preventDefault();
  });
}
