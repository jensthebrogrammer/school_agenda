import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useState } from "react";


const UpdateLesson = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state
  console.log(data.id)

  const [lesson, setLesson] = useState("")
  const [teacher, setTeacher] = useState("")
  const [lessonDay, setLessonDay] = useState("")
  const [lessonTime, setLessonTime] = useState("")
  const [collor, setCollor] = useState("")
  

  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log(data.id)
    const id = data.id
    const toPass = {
      lesson,
      teacher,
      lessonDay,
      lessonTime,
      collor
    }

    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toPass)
    }

    const url = `http://127.0.0.1:5000/alter_lesson/${id}`
    const response = await fetch(url, options)

    if (response.status === 404) {
      const data = await response.json();
      alert(data.message);
    } else {
      navigate("/");
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
          placeholder={data.lesson}
          id="lesson"
          onChange={(e) => setLesson(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="teacher">teacher:</label>
        <input 
          type="text"
          value={teacher}
          placeholder={data.teacher}
          id="teacher"
          onChange={(e) => setTeacher(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="lessonDay">lesson day:</label>
        <input 
          type="text"
          value={lessonDay}
          placeholder={data.lessonDay}
          id="lessonDay"
          onChange={(e) => setLessonDay(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="lessonTime">lesson time:</label>
        <input 
          type="text"
          value={lessonTime}
          placeholder={data.lessonTime}
          id="lessonTime"
          onChange={(e) => setLessonTime(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="collor">color:</label>
        <input 
          type="text"
          value={collor}
          placeholder={data.collor}
          id="collor"
          onChange={(e) => setCollor(e.target.value)}
        />
      </div>
      <button type="submit">submit</button>
      <Link to="/"><button>Home</button></Link>
    </form>
  )
}

export default UpdateLesson;