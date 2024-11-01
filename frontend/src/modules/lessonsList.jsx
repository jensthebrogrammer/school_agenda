import React from "react";


const LessonsList = ({lessons, autoUpdate}) => {
  const onDelete = async (id) => {
    const options = {
      method: "DELETE"
    }

    const url = `http://127.0.0.1:5000/delete_lesson/${id}`
    const response = await fetch(url, options)

    if (response.status === 400) {
      const data = JSON.stringify(response)
      alert(data.message)
    } else {
      autoUpdate();
    }
  }

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>lesson</th>
              <th>teacher</th>
              <th>lesson day</th>
              <th>lesson time</th>
              <th>color</th>
            </tr>
          </thead>
          <tbody>
            {lessons.map((lessons) => (
              <tr key={lessons.id}>
                <td>{lessons.lesson}</td>
                <td>{lessons.teacher}</td>
                <td>{lessons.lessonDay}</td>
                <td>{lessons.lessonTime}</td>
                <td>{lessons.collor}</td>
                <td><button onClick={() => onDelete(lessons.id)}>delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default LessonsList;