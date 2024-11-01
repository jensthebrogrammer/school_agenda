import React from "react";

const AssignmentList = ({assigments, autoUpdate}) => {
  const onDelete = async (id) => {
    const options = {
      method: "DELETE"
    }
    console.log(id)
    const url = `http://127.0.0.1:5000/delete_assignment/${id}`
    const response = await fetch(url, options)

    if (response.status === 400) {
      const data = JSON.stringify(response)
      alert(data.message)
    } else {
      autoUpdate();
    }
  }

  return <>
    <table>
      <thead>
        <tr>
          <td>assignment</td>
          <td>assignment day</td>
          <td>assignment time</td>
        </tr>
      </thead>
      <tbody>
        {assigments.map((assigments) => (
          <tr key={assigments.id}>
            <td>{assigments.assignment}</td>
            <td>{assigments.assignmentDay}</td>
            <td>{assigments.assignmentTime}</td>
            <td>
              <button onClick={() => onDelete(assigments.id)}>delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
}

export default AssignmentList;