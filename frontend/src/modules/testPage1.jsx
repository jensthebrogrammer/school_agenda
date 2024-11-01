import React from "react";
import Navbar from "./navBar";
import LessonsList from "./lessonsList";
import LessonsForm from "./lessonsForm";
import AssignmentList from "./AssignmentList";
import AssignmentForm from "./assignmentForm";

const Page1 = ({lessons, assignments, updateLessons, updateAssignments}) => {
  return (
    <>
      <Navbar />
      <LessonsForm autoUpdate={updateLessons}/>
      <LessonsList lessons={lessons} autoUpdate={updateLessons} />
      <AssignmentForm autoUpdate={updateAssignments} />
      <AssignmentList assigments={assignments} autoUpdate={updateAssignments} />
    </>
  )
}

export default Page1;