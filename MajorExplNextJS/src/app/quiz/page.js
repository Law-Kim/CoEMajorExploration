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
    fetch('http://127.0.0.1:8008/questions')
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
      }
    }
/*
    alert('A1 ' + a1count + ', A2 ' + a2count + ', A3 ' + a3count + ', A4 ' + a4count); //test to display the calculated values
*/
        var maxscore = Math.max(a1count,a2count,a3count,a4count); //finds the highest value out of the questions

        //displays the major with the highest score corelated to the answer count
        if (a1count == maxscore) {
          //alert('A1 is the highest with ' + a1count);
          event.preventDefault();
          setMajor("Bioengineering");
        }
        if (a2count == maxscore) {
          //alert('A2 is the highest with ' + a2count);
          event.preventDefault();
          setMajor("Chemical Engineering");
        }
        if (a3count == maxscore) {
          //alert('A3 is the highest with ' + a3count);
          event.preventDefault();
          setMajor("Computer Science");
        }
        if (a4count == maxscore) {
          //alert('A4 is the highest with ' + a4count);
          event.preventDefault();
          setMajor("Architectural Engineering");
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
          <h2>What do you value most when it comes to a career?</h2>
          
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
          <h2>What is your ideal work environment?</h2>
  
          {/* Question 02 Answers */}
          <label><input type="radio" name="q2" value="a1"/>
          A laboratory
          </label><br />
          <label><input type="radio" name="q2" value="a2"/>
          A place with high levels of appreciation
          </label><br />
          <label><input type="radio" name="q2" value="a3"/>
          A place with cutting edge equipment
          </label><br />
          <label><input type="radio" name="q2" value="a4"/>
          An informal environment such as from home
          </label><br />
          <br />
    
          {/* Question 03 */}
          <h2>Who inspires you?</h2>
  
          {/* Question 03 Answers*/}
          <label><input type="radio" name="q3" value="a1"/>
          Developers of new technologies
          </label><br />
          <label><input type="radio" name="q3" value="a2"/>
          People who sacrifice for the greater good
          </label><br />
          <label><input type="radio" name="q3" value="a3"/>
          Creative or artistic people
          </label><br />
          <label><input type="radio" name="q3" value="a4"/>
          Innovative people
          </label><br />
          <br />
    
          {/* Question 04 */}
          <h2>What do you do when you encounter a difficult problem?</h2>
  
          {/* Question 04 Answers */}
          <label><input type="radio" name="q4" value="a1"/>
          Research potential solutions independently
          </label><br />
          <label><input type="radio" name="q4" value="a2"/>
          Ask for help
          </label><br />
          <label><input type="radio" name="q4" value="a3"/>
          Step away from the problem to relax and gain perspective
          </label><br />
          <label><input type="radio" name="q4" value="a4"/>
          Experiment with potential solutions until one is successful
          </label><br />
          <br />

          {/* Buttons */}
          <button name="submit" type="submit" id="submit" onClick={calculateAnswer}>Submit Your Answers</button> {/*used clickHandler for testing*/}
          <button name="reset" type="reset" id="reset" onClick={setReset}>Reset</button>
        </form>
  
        {/* Output - text box link */}
        <div id="answer"> &nbsp;<a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={selectedInfo.link}>{selectedInfo.name}</a></div>

        {/* Experimental drop down list for testing
        <div className='flex flex-col items-center p-8' >
      
        <select name="majors" id="majorsDropdown" onChange={changeHandler}>{majorsList.map(m => <option key={m.name} value={m.name}>{m.name}</option>)}
        </select>
        </div>
        */}

      </div>

    </main>
  )
}
