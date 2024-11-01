import React from "react";
import { useState } from "react";

const AssignmentForm = ({autoUpdate}) => {
  const [assignment, setAssignment] = useState("");
  const [assignmentDay, setAssignmentDay] = useState("");
  const [assignmentTime, setAssignmentTime] = useState("");

  const onSubmit = async () => {
    const data = {
      assignment,
      assignmentDay,
      assignmentTime
    }

    const options = {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    }

    const url = "http://127.0.0.1:5000/add_assignment"
    const response = await fetch(url, options);

    if (response.status === 400) {
      const data = await response.json();
      alert(data.message);
    } else {
      //autoUpdate();
      window.location.reload();
    }
  }

  return <form onSubmit={onSubmit}>
    <div>
      <label htmlFor="assignment">assignment:</label>
      <input 
        placeholder="assignment"
        type="text"
        id="assignment"
        value={assignment}
        onChange={(e) => setAssignment(e.target.value)}
      />
    </div>

    <div>
      <label htmlFor="assignmentDay">assignment day:</label>
      <input 
        placeholder="assignment day"
        type="text"
        id="assignmentDay"
        value={assignmentDay}
        onChange={(e) => setAssignmentDay(e.target.value)}
      />
    </div>

    <div>
      <label htmlFor="assignmentTime">assignment time:</label>
      <input 
        placeholder="assignment time"
        type="text"
        id="assignmentTime"
        value={assignmentTime}
        onChange={(e) => setAssignmentTime(e.target.value)}
      />
    </div>

    <button type="submit">submit</button>
  </form>
}

export default AssignmentForm;