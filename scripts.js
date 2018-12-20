function check() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question4.value;
  var count = 0;

  if (question1 == "c") {
    count += 20;
  }
  if (question2 == "c") {
    count += 20;
  }
  if (question3 == "b") {
    count += 20;
  }
  if (question4 == "c") {
    count += 20;
  }
  if (question5 == "c") {
    count += 20;
  }
  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("number_count").innerHTML = "You got " + count + "%.";

  $("#button").hide();
  $("#quiz").hide();
  $("#number_count").show();
  event.preventDefault();
}
