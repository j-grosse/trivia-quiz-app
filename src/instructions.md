https://wd40-trivia.onrender.com/api/questions

### Field name Description Data type
id                question id     Int
question          the question    String
correctAnswer     the question's correctAnswer    String
answers question  4 answers       Array
userAnswer        the user choosed answer default to ""   String

- Displaying questions: The application fetches a set of questions from hardcoded file (questions.js) OR external API and displays it for the user.

useEffect
fetch / axios
append to li in ul with id="questions"

- Selecting buttons with multiple choice answers:
  Users can select an answer for each question by clicking on one of four answers

button onClick="handleSelect"
const [answer, setAnswer] = useState("")
e.target.class = "selected"
set className="btn-info"

- submit button
  <button className="btn-success" onClick="handleSubmit"></button>
  conditional rendering
  
- compare selections with correct answers
  compare UserAnswers & correctAnswer []
  map through answers
  const answers = res.data.answers
  answers.map(item => item.correctAnswer)

- present correct answers in green
  get target.value
  set className btn-success

- add points to score array
  count up and present the score
  const [score, setScore] = useState (0);

* Reviewing answers: After completing all questions, users can review their answers along with the correct answers for each question.

check if all userAnswer states are

show score

- Restarting the quiz: Users have the option to restart the quiz and retake it from the beginning.

reset on retry
reset all states

---

Using questions.js render questions with its answers and the user should be able
to choose one answer per question
once all questions have been answered
then you should be able to
view the final score with answer review
User should be able to restart the app to retake the questions

---

Level 2

We want to get dynamic questions from API.
● Instead of using questions.js a hardcoded array use
https://wd40-trivia.onrender.com/
● Please note the api is hosted on a free shared hosting which means if the app is not active it go to sleep and needs 30-40 seconds to response back for the first time after sleep (so make sure you go to browser and wait for response then try to test with your react app )
● Main.jsx is using <React.StrictMode> that will cause 2 renders

---

Level 3
● Now that all questions are coming from the API lets change the UI allowing only one question to be displayed at a time.
● Once all questions are answered show the final score with the questions review
