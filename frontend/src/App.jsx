import { HashRouter as Router, Routes, Route, json } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './modules/testHomePage';
import Page1 from './modules/testPage1';
import LessonsGrid from './modules/lessonsGrid';
import LessonShowPage from './modules/showLesson';
import UpdateLesson from './modules/updatingLesson';
import './App.css'


//const mockDataLessons = {"lesson": "wiskunde", "teacher": "daniëls", "lessonDay": "vrijdag", "lessonTime": "11:15", "collor": "red", id: 1}


function App() {
  useEffect(() => {
    fetchAll();
    //console.log(assignments)
  }, []);


  const [lessons, setLessons] = useState([]);
  const [assignments, setAssignments] = useState([]);

  const fetchLessons = async () => {
    const response = await fetch("http://127.0.0.1:5000/get_lessons");
    const data = await response.json();
    setLessons(data.lessons);
  }

  const fetchAssignments = async () => {
    const response = await fetch("http://127.0.0.1:5000/get_assignments")
    const data = await response.json();
    //console.log(data.assignments)
    setAssignments(data.assignments);
  }

  const fetchAll = () => {
    fetchLessons();
    fetchAssignments();
  }


  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <LessonsGrid
                lessons={lessons}
                assignments={assignments} />
            }
          />
          <Route
            path="/page1"
            element={
              <Page1
                lessons={lessons}
                assignments={assignments}
                updateLessons={fetchLessons}
                updateAssignments={fetchAssignments}
              />
            }
          />
          <Route path="/lessonShow" element={<LessonShowPage />} />
          <Route path="/updateLesson" element={<UpdateLesson />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
