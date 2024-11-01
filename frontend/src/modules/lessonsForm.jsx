import React from "react";
import { useState } from "react";


const LessonsForm = ({autoUpdate}) => {
  const [lesson, setLesson] = useState("")
  const [teacher, setTeacher] = useState("")
  const [lessonDay, setLessonDay] = useState("")
  const [lessonTime, setLessonTime] = useState("")
  const [collor, setCollor] = useState("")

  const onSubmit = async () => {
    const data = {
      lesson,
      teacher,
      lessonDay,
      lessonTime,
      collor
    }

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }

    const url = "http://127.0.0.1:5000/create_lesson"
    const response = await fetch(url, options)

    if (response.status === 400) {
      const data = await response.json();
      alert(data.message);
    } else {
      autoUpdate();
      window.location.reload();
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="lesson">lesson:</label>
        <input 
          type="text"
          value={lesson}
          placeholder="lesson"
          id="lesson"
          onChange={(e) => setLesson(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="teacher">teacher:</label>
        <input 
          type="text"
          value={teacher}
          placeholder="teacher"
          id="teacher"
          onChange={(e) => setTeacher(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="lessonDay">lesson day:</label>
        <input 
          type="text"
          value={lessonDay}
          placeholder="lesson day"
          id="lessonDay"
          onChange={(e) => setLessonDay(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="lessonTime">lesson time:</label>
        <input 
          type="text"
          value={lessonTime}
          placeholder="lesson time"
          id="lessonTime"
          onChange={(e) => setLessonTime(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="collor">color:</label>
        <input 
          type="text"
          value={collor}
          placeholder="color"
          id="collor"
          onChange={(e) => setCollor(e.target.value)}
        />
      </div>
      <button type="submit">submit</button>
    </form>
  )
}

export default LessonsForm;