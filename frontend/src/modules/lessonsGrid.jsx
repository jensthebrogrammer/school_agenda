import React from "react";
import Navbar from "./navBar";
import { makeGridData } from "../../scripts/makeGridData";
import { Link } from "react-router-dom";


const LessonsGrid = ({lessons, assignments}) => {
  const gridData = makeGridData(lessons, assignments)

  function getClassName (element) {
    if (element === "niks") {
      return "niks"
    } else {
      return "huistaak"
    }
  }

  return (
    <>
      <Navbar />
      <div className="lessonsGrid">
        <table>
          <thead>
            <tr>
              <th>maandag</th>
              <th>dinsdag</th>
              <th>woensdag</th>
              <th>donderdag</th>
              <th>vrijdag</th>
            </tr>
          </thead>
          <tbody>
            {gridData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell) => (
                  <td key={cell.id}>
                    <Link to="/lessonShow" state={cell}>
                      <button className={`lessonGrid_button ${cell.collor}`}>
                        <div>
                          <p>{cell.lesson}</p>
                          <p>{cell.lessonTime}</p>
                          <button
                            className={getClassName(cell.assignment)}
                          >
                            
                          </button>
                        </div>
                      </button>
                    </Link>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}


export default LessonsGrid;