# Kevin-Coding-Quiz
A dynamically created Javascript Quiz that will test your knowledge of the language and allow you to store and display high scores.

This quiz is comprised of 10 multiple-choice questions, from which you can select A,B, or C. You have 180 seconds to complete the quiz, after which your remaining time will display as your score. Incorrect choices will subtract 10 seconds from the timer. After the quiz is completed, you may submit your score to the high scores chart - only the top 3 scores are saved.

Most of the HTML and styling is dynamically generated through the DOM - specific areas are displayed or hidden based on their necessity at that point in the quiz; i.e. the quiz is not shown at the results screen and vice-versa. All questions are saved within variable 'questions', which is an array of objects containing all information on the specific questions.

All DOM variables and initial values are declared at the beginning of the script. The 'questions' variable is declared slightly later, after the buttons are created.

Function List:

1) decideCorrect() - decides if the correct response was chosen for any given question. If the answer was incorrect, time is subtracted. If the answer was correct, the score counter is increased by one. After execution of this portion of the function, the question counter is increased by one, so that other functions may set up text for the upcoming question.  This function is called when any answer button is pressed.

2) setText() - decides between continuing the quiz (continuequiz()), or ending the quiz (completeQuiz()), based on whether the question limit has been reached. This function is called when any answer button is pressed.

3) continueQuiz() - sets all text on the page to its next corresponding question text within the 'questions' variable, after decideCorrect() increases the question count.  This function is called by setText().

4) completeQuiz() - sets all text on the page to the ending text, and will display the final score and number of correct questions chosen. Additional specific text is called if the timer ever reaches 0. This function also hides the quiz display and reveals the high score submission display. This function is called by setText().

5) startTimer() - this function will begin the 180 second timer, which is also the scoring system for the quiz. As per its structure, it will call completeQuiz() and stop the timer if the question limit is reached or if the timer ever reaches 0. This function is called by the start ('begin') button.

6) saveScore() - after the submit score button is pressed at the end of the quiz, this function will sort the array of given name/score objects and print them to the high scores list, highest to lowest. It only prints the top 3 scores to the table, though the other scores technically still exist within array 'scoresArray'. This function is called by the submit score button.


Additional functionality is provided by the submit start ('begin') button and submit score button. The start button will reveal the quiz display and start the timer, and will reset pertinent values to their original count (score, timer, etc). This button will disappear after the quiz begins and reappear at the end, should the player choose to restart. The submit score button will save the final score and name of the player, for use in the saveScore() function (which pushes to the high scores). It will disappear after a score is submitted.
