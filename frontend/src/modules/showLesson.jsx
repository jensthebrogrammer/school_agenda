import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/showLesson.css";


const LessonShowPage = () => {
  const location = useLocation();
  const lesson = location.state
  console.log(lesson)

  return <>
    <h1 className={"showLesson_" + lesson.collor}>{lesson.lesson}</h1>
    <div className="showLesson_dateTime">
      <h3 className="showLesson_date">{lesson.lessonDay}</h3>
      <h3 className="showLesson_time">{lesson.lessonTime}</h3>
      <h4>{lesson.teacher}</h4>
    </div>
    <Link to="/updateLesson" state={lesson}>
      <button>Update</button>
    </Link>

  </>
}

export default LessonShowPage;