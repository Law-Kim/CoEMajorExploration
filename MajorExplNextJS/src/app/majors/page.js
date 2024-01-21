'use client'

import { useState } from 'react'
import majorsList from './majorsList.json'


// https://www.geeksforgeeks.org/how-to-use-html-select-tag-in-reactjs/



export default function Home() {

  const [selectedMajorName, setSelectedMajorName] = useState(majorsList[0].name)

  const onOptionChangeHandler = (event) => {
    setSelectedMajorName(event.target.value);
    console.log(
      "User Selected Value - ",
      event.target.value
    );
  };

  const selectedMajorInfo = majorsList.find(m => m.name == selectedMajorName)

  return (
    <main className="flex min-h-screen flex-col p-24">

      <div className='flex flex-col items-center'>
        <div>
          <h1 className="mb-3 text-2xl font-semibold">Select a major:</h1>
        </div>

        <select name="majors" id="majorsDropdown" onChange={onOptionChangeHandler}>
          {majorsList.map(m => <option key={m.name} value={m.name}>{m.name}</option>)}
        </select>
      </div>

      <div className="p-8">
        Description: {selectedMajorInfo.description}
      </div>

    </main>
  )
}
