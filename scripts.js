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
  var count = 0;

  if (questionOne == "2") {
    count += 5;
  }
  if (questionTwo == "2") {
    count += 5;
  }
  if (questionThree == "3") {
    count += 5;
  }
  if (questionFour == "3") {
    count += 5;
  }
  if (questionFive == "4") {
    count += 5;
  }
  if (questionSix == "2") {
    count += 5;
  }
  if (questionSeven == "2") {
    count += 5;
  }
  if (questionEight == "3") {
    count += 5;
  }
  if (questionNine == "2") {
    count += 5;
  }
  if (questionTen == "4") {
    count += 5;
  }
  $(".questionEleven").change(function() {
    var questionElevenbool = true;

    var questionElevenanswers = new Array();

    var questionElevenright = new Array("kicukiro", "nyarugenge");

    $(".questionEleven input:checked").each(function() {
      questionElevenanswers.push($(this).val());
    });

    questionElevenanswers.sort();

    questionElevenright.sort();

    if (questionElevenanswers.length == questionElevenright.length) {
      for (i = 0; i < questionElevenanswers.length; i++) {
        if (questionElevenanswers[i] == questionElevenright[i]) {
          count += 5;
        }
      }
    }
  });

  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("number_count").innerHTML =
    "Your score is: " + count + "/50";

  $("#button").hide();
  $("#quiz").hide();
  $("#number_count").show();
  event.preventDefault();
}
