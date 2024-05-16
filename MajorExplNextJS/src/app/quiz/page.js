'use client'

import Image from "next/image";
import quiz from '/src/components/quiz.png'
import { useState, useEffect } from 'react'
import majorsList from './majorsList.json'

//https://codepen.io/amyfu/pen/kPVYLr

export default function Home() {

  const setReset = () => {
    setMajor("");  
  };
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('https://coemajorexploration.onrender.com/questions')
       .then((response) => response.json())
       .then((data) => {
          setQuestions(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
  }, []);
  
  const [selectedMajor, setMajor] = useState(majorsList[0].name)
  const selectedInfo = majorsList.find(m => m.name == selectedMajor)
  
  //displays Computer Science when the submit button is pressed (for testing)
  const clickHandler = (event) => {
    event.preventDefault();
    setMajor("Computer Science");  //was event.target.value
  };

  //used in the test drop-down menu on the page (for testing)
  const changeHandler = (event) => {
    setMajor(event.target.value);  
  };

  //prints out Hello in alert box (for testing)
  const sayHello = (event) => {
    alert("Hello");
  };

  //used to calculate the suggested major based on the selected options (basic functionality)
  //each selection in a question is tied to a different major so more 1st option selection would lead to a specific major, etc.
  function calculateAnswer(event) {
    var a1count = 0; //number of questions with answer 1 selected
    var a2count = 0; //number of questions with answer 2 selected
    var a3count = 0; //number of questions with answer 3 selected
    var a4count = 0; //number of questions with answer 4 selected
    var a5count = 0; //number of questions with answer 5 selected
    var a6count = 0; //number of questions with answer 6 selected
    var a7count = 0; //number of questions with answer 7 selected
    var a8count = 0; //number of questions with answer 8 selected
    var a9count = 0; //number of questions with answer 9 selected
    var a10count = 0; //number of questions with answer 10 selected
    var a11count = 0; //number of questions with answer 11 selected
    var a12count = 0; //number of questions with answer 12 selected
    var a13count = 0; //number of questions with answer 13 selected
    var a14count = 0; //number of questions with answer 14 selected
    var a15count = 0; //number of questions with answer 15 selected
    var a16count = 0; //number of questions with answer 16 selected
    var a17count = 0; //number of questions with answer 17 selected

    var choices = document.getElementsByTagName('input');

    var i; //interation variable

    //iterates through the selected questions and makes a count
    for (i = 0; i < choices.length; i++) {
      if (choices[i].checked) {
        if (choices[i].value == 'a1') {
          a1count = a1count + 1;
        }
        if (choices[i].value == 'a2') {
          a2count = a2count + 1;
        }
        if (choices[i].value == 'a3') {
          a3count = a3count + 1;
        }
        if (choices[i].value == 'a4') {
          a4count = a4count + 1;
        }
        if (choices[i].value == 'a5') {
          a5count = a5count + 1;
        }
        if (choices[i].value == 'a6') {
          a6count = a6count + 1;
        }
        if (choices[i].value == 'a7') {
          a7count = a7count + 1;
        }
        if (choices[i].value == 'a8') {
          a8count = a8count + 1;
        }
        if (choices[i].value == 'a9') {
          a9count = a9count + 1;
        }
        if (choices[i].value == 'a10') {
          a10count = a10count + 1;
        }
        if (choices[i].value == 'a11') {
          a11count = a11count + 1;
        }
        if (choices[i].value == 'a12') {
          a12count = a12count + 1;
        }
        if (choices[i].value == 'a13') {
          a13count = a13count + 1;
        }
        if (choices[i].value == 'a14') {
          a14count = a14count + 1;
        }
        if (choices[i].value == 'a15') {
          a15count = a15count + 1;
        }
        if (choices[i].value == 'a16') {
          a15count = a16count + 1;
        }
        if (choices[i].value == 'a17') {
          a15count = a17count + 1;
        }
      }
    }

        var maxscore = Math.max(a1count,a2count,a3count,a4count); //finds the highest value out of the questions

        //displays the major with the highest score corelated to the answer count
        if (a1count == maxscore) {
          //alert('A1 is the highest with ' + a1count);
          event.preventDefault();
          setMajor("Architectural Engineering");
        }
        if (a2count == maxscore) {
          //alert('A2 is the highest with ' + a2count);
          event.preventDefault();
          setMajor("Bioengineering");
        }
        if (a3count == maxscore) {
          //alert('A3 is the highest with ' + a3count);
          event.preventDefault();
          setMajor("Chemical Enginering");
        }
        if (a4count == maxscore) {
          //alert('A4 is the highest with ' + a4count);
          event.preventDefault();
          setMajor("Civil Engineering");
        }
        if (a5count == maxscore) {
          //alert('A5 is the highest with ' + a5count);
          event.preventDefault();
          setMajor("Computer Science");
        }
        if (a6count == maxscore) {
          //alert('A6 is the highest with ' + a6count);
          event.preventDefault();
          setMajor("Construction Engineering Management");
        }
        if (a7count == maxscore) {
          //alert('A7 is the highest with ' + a7count);
          event.preventDefault();
          setMajor("Ecological Engineering");
        }
        if (a8count == maxscore) {
          //alert('A8 is the highest with ' + a8count);
          event.preventDefault();
          setMajor("Electrical and Computer Engineering");
        }
        if (a9count == maxscore) {
          //alert('A9 is the highest with ' + a9count);
          event.preventDefault();
          setMajor("Energy Systems Engineering");
        }
        if (a10count == maxscore) {
          //alert('A10 is the highest with ' + a10count);
          event.preventDefault();
          setMajor("Engineering Science");
        }
        if (a11count == maxscore) {
          //alert('A11 is the highest with ' + a11count);
          event.preventDefault();
          setMajor("Environmental Engineering");
        }
        if (a12count == maxscore) {
          //alert('A12 is the highest with ' + a12count);
          event.preventDefault();
          setMajor("Industrial Engineering");
        }
        if (a13count == maxscore) {
          //alert('A13 is the highest with ' + a13count);
          event.preventDefault();
          setMajor("Manufacturing Engineering");
        }
        if (a14count == maxscore) {
          //alert('A14 is the highest with ' + a14count);
          event.preventDefault();
          setMajor("Mechanical Engineering");
        }
        if (a15count == maxscore) {
          //alert('A15 is the highest with ' + a15count);
          event.preventDefault();
          setMajor("Nuclear Engineering");
        }
        if (a16count == maxscore) {
          //alert('A16 is the highest with ' + a16count);
          event.preventDefault();
          setMajor("Outdoor Products");
        }
        if (a17count == maxscore) {
          //alert('A17 is the highest with ' + a17count);
          event.preventDefault();
          setMajor("Radiation Health Physics");
        }
  }

  //Quiz Form questions, buttons, and output fields
  return (
    <main className="flex min-h-screen flex-col items-center p-24">

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      </div>

      <div id="wrapper">
        <h1>What kind of College of Engineering major might work for you?</h1>
        <br />

        <div className="questions-container">
          {questions.map((question) => {
            return (
              <div className="question-card" key={question.name}>
                <h2 className="question-title">{question.question}</h2>
                <p className="question-body">Insert answer</p>
              </div>
            );
          })}
        </div>

        <form id="quiz">
          {/* Question 01 */}
          <h2>Q01: What do you value most when it comes to a career?</h2>
          
          {/* Question 1 answers */}
          <label><input type="radio" name="q1" value="a1"/>
          Financial security
          </label><br />
          <label><input type="radio" name="q1" value="a2"/>
          Helping others
          </label><br />
          <label><input type="radio" name="q1" value="a3"/>
          Job stability
          </label><br />
          <label><input type="radio" name="q1" value="a4"/>
          Developing technologies
          </label><br />
          <br />

          {/* Question 02 */}
          <h2>Q02: What is your ideal work environment?</h2>
  
          {/* Question 02 Answers */}
          <label><input type="radio" name="q2" value="a5"/>
          A laboratory
          </label><br />
          <label><input type="radio" name="q2" value="a6"/>
          A place with high levels of appreciation
          </label><br />
          <label><input type="radio" name="q2" value="a7"/>
          A place with cutting edge equipment
          </label><br />
          <label><input type="radio" name="q2" value="a8"/>
          An informal environment such as from home
          </label><br />
          <br />
    
          {/* Question 03 */}
          <h2>Q03: Who inspires you?</h2>
  
          {/* Question 03 Answers*/}
          <label><input type="radio" name="q3" value="a9"/>
          Developers of new technologies
          </label><br />
          <label><input type="radio" name="q3" value="a10"/>
          People who sacrifice for the greater good
          </label><br />
          <label><input type="radio" name="q3" value="a11"/>
          Creative or artistic people
          </label><br />
          <label><input type="radio" name="q3" value="a12"/>
          Innovative people
          </label><br />
          <br />
    
          {/* Question 04 */}
          <h2>Q04: What do you do when you encounter a difficult problem?</h2>
  
          {/* Question 04 Answers */}
          <label><input type="radio" name="q4" value="a13"/>
          Research potential solutions independently
          </label><br />
          <label><input type="radio" name="q4" value="a14"/>
          Ask for help
          </label><br />
          <label><input type="radio" name="q4" value="a15"/>
          Step away from the problem to relax and gain perspective
          </label><br />
          <label><input type="radio" name="q4" value="a16"/>
          Experiment with potential solutions until one is successful
          </label><br />
          <br />

          {/* Question 05 */}
          <h2>Q05: What type of people do you prefer to work with?</h2>
  
          {/* Question 05 Answers*/}
          <label><input type="radio" name="q5" value="a17"/>
          Other professionals in the same field
          </label><br />
          <label><input type="radio" name="q5" value="a1"/>
          People from a wide range of fields and disciplines
          </label><br />
          <label><input type="radio" name="q5" value="a2"/>
          Students and teachers
          </label><br />
          <label><input type="radio" name="q5" value="a3"/>
          I prefer to work alone
          </label><br />
          <br />
          
          {/* Question 06 */}
          <h2>Q06: How comfortable are you with mathematics?</h2>
  
          {/* Question 06 Answers*/}
          <label><input type="radio" name="q6" value="a4"/>
          Very comfortable
          </label><br />
          <label><input type="radio" name="q6" value="a5"/>
          Somewhat comfortable
          </label><br />
          <label><input type="radio" name="q6" value="a6"/>
          Somwhat uncomfortable
          </label><br />
          <label><input type="radio" name="q6" value="a7"/>
          Very uncomfortable
          </label><br />
          <br />

          {/* Question 07 */}
          <h2>Q07: What would you prefer?</h2>
  
          {/* Question 07 Answers*/}
          <label><input type="radio" name="q7" value="a8"/>
          A career with many open positions
          </label><br />
          <label><input type="radio" name="q7" value="a9"/>
          A career with the poential to earn a large salary
          </label><br />
          <label><input type="radio" name="q7" value="a10"/>
          A career with a diverse number of jobs available
          </label><br />
          <label><input type="radio" name="q7" value="a11"/>
          A career with a high projected growth in its field
          </label><br />
          <br />

          {/* Question 08 */}
          <h2>Q08: What do you have a great affinity for?</h2>
  
          {/* Question 08 Answers*/}
          <label><input type="radio" name="q8" value="a12"/>
          Computers
          </label><br />
          <label><input type="radio" name="q8" value="a13"/>
          Chemistry
          </label><br />
          <label><input type="radio" name="q8" value="a14"/>
          Architecture
          </label><br />
          <label><input type="radio" name="q8" value="a15"/>
          Robotics and Electricity
          </label><br />
          <br />

          {/* Question 09 */}
          <h2>Q09: What word is most interesting to you?</h2>
  
          {/* Question 09 Answers*/}
          <label><input type="radio" name="q9" value="a16"/>
          Design
          </label><br />
          <label><input type="radio" name="q9" value="a17"/>
          Program
          </label><br />
          <label><input type="radio" name="q9" value="a1"/>
          Construct
          </label><br />
          <label><input type="radio" name="q9" value="a2"/>
          Research
          </label><br />
          <br />

          {/* Question 10 */}
          <h2>Q10: What word is most interesting to you?</h2>
  
          {/* Question 10 Answers*/}
          <label><input type="radio" name="q10" value="a3"/>
          Energy
          </label><br />
          <label><input type="radio" name="q10" value="a4"/>
          Health
          </label><br />
          <label><input type="radio" name="q10" value="a5"/>
          Industry
          </label><br />
          <label><input type="radio" name="q10" value="a6"/>
          Nature
          </label><br />
          <br />

          {/* Buttons */}
          <button name="submit" type="submit" id="submit" onClick={calculateAnswer}>Submit Your Answers</button> {/*used clickHandler for testing*/}
          <button name="reset" type="reset" id="reset" onClick={setReset}>Reset</button>
        </form>
  
        {/* Output - text box link */}
        <div id="answer"> &nbsp;<a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={selectedInfo.link}>{selectedInfo.name}</a></div>

      </div>
    </main>
  )
}
