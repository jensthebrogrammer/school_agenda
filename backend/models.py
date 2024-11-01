from config import db

class Lessons(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    lesson = db.Column(db.String(30), nullable=False, unique=True)
    teacher = db.Column(db.String(30), nullable=False)
    lesson_day = db.Column(db.String(10), nullable=False)
    lesson_time = db.Column(db.String(10), nullable=False)
    collor = db.Column(db.String(10), nullable=False)

    def to_json(self):
        return {
            'id': self.id,
            'lesson': self.lesson,
            'teacher': self.teacher,
            'lessonDay': self.lesson_day,
            'lessonTime': self.lesson_time,
            'collor': self.collor
        }


class Assignments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    assignment = db.Column(db.String(150), nullable=False)
    assignment_day = db.Column(db.String(10), nullable=False)
    assignment_time = db.Column(db.String(10), nullable=False)

    def to_json(self):
        return {
            'id': self.id,
            'assignment': self.assignment,
            'assignmentDay': self.assignment_day,
            'assignmentTime': self.assignment_time
        }
