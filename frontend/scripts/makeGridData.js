export function makeGridData(lessons, assignments) {
  const daysArray = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag"];
  const timeArray = ["8:30", "9:20", "10:25", "11:15", "12:55", "13:45", "14:50", "15:40"];
  const listToCompare = [];

  // voeg de twee lijsten samen
  if (lessons.length >= assignments.length) {
    lessons.forEach((lesson, i) => {
      let objectToPush = {}
      assignments.forEach((assignment, j) => {
        if (lesson.lessonDay === assignment.assignmentDay && lesson.lessonTime === assignment.assignmentTime) {
          objectToPush = {
            lesson: lesson.lesson,
            teacher: lesson.teacher,
            lessonDay: lesson.lessonDay,
            lessonTime: lesson.lessonTime,
            collor: lesson.collor,
            assignment: assignment.assignment
          }
        } else {
          objectToPush = {
            lesson: lesson.lesson,
            teacher: lesson.teacher,
            lessonDay: lesson.lessonDay,
            lessonTime: lesson.lessonTime,
            collor: lesson.collor,
            assignment: "niks"
          }
        }
      })

      listToCompare.push(objectToPush);
    })
  }
  
  // Create a 2D array (8x5 grid)
  let arrayToReturn = new Array(timeArray.length).fill(null).map(() => new Array(daysArray.length).fill(null));

  arrayToReturn.forEach((row, i) => {
    row.forEach((_, j) => {
      const id = i * 10 + j + 10000;
      arrayToReturn[i][j] = {
        lesson: "geen les",
        teacher: "onbekend",
        lessonDay: daysArray[j],
        lessonTime: timeArray[i],
        assignment: "niks",
        collor: "white",
        id: id,
      };
    });
  });

  let x;
  let y;

  listToCompare.forEach((element, index) => {
    daysArray.forEach((day, j) => {
      if (day === element.lessonDay) {
        y = j;
      }
    })

    timeArray.forEach((time, k) => {
      if (time === element.lessonTime) {
        x = k;
      }
    })

    arrayToReturn[x][y] = element;
  })

  console.log(listToCompare)


  return arrayToReturn;
}