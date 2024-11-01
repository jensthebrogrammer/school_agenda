from flask import request, jsonify
from config import app, db
from models import Lessons, Assignments

@app.route("/get_lessons", methods=["GET"])
def get_lessons():
    data = Lessons.query.all()

    lessons = list(map(lambda x: x.to_json, data))
    return jsonify({"lessons": lessons}), 200


@app.route("/create_lesson", methods=["POST"])
def create_lesson():
    lesson_name = request.json.get("lessonName")
    teacher = request.json.get("teacher")
    lesson_day = request.json.get("lessonDay")
    lesson_time = request.json.get("lessonTime")
    collor = request.json.get("collor")

    if not lesson_name or not teacher or not lesson_day or not lesson_time or not collor:
        return jsonify({"message": "must include all data"}), 400

    new_lesson = Lessons(lesson=lesson_name, teacher=teacher, lesson_time=lesson_time, lesson_day=lesson_day, collor=collor)

    try:
        db.session.add(new_lesson)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": "an error occured" + str(e)}), 400

    return jsonify({"message": "lesson succesfully added"}), 200


@app.route("/delete_lesson/<int:user_id>", methods=["DELETE"])
def delete_lesson(user_id):
    lesson_to_delete = Lessons.query.get(user_id)

    try:
        db.session.delete(lesson_to_delete)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": "an error occured while deleting" + str(e)}), 400

    return jsonify({"message": "lesson succesfully deleted"}), 200


@app.route("/alter_lesson/<int:user_id>", methods=["PATCH"])
def alter_lesson(user_id):
    lesson_to_alter = Lessons.query.get(user_id)

    if not lesson_to_alter:
        return jsonify({"message": "lesson was not found"}), 400

    lesson_to_alter.lesson = request.json.get("lessonName")
    lesson_to_alter.teacher = request.json.get("teacher")
    lesson_to_alter.lesson_day = request.json.get("lessonDay")
    lesson_to_alter.lesson_time = request.json.get("lessonTime")
    lesson_to_alter.collor = request.json.get("collor")

    db.session.commit()

    return jsonify({"message": "lesson succesfully altered"}), 200


# and now for the assignments
@app.route("/get_assignments", methods=["GET"])
def get_assignments():
    data = Assignments.query.all()
    assignments = list(map(lambda x: x.to_json, data))

    return jsonify({"assignments": assignments}), 200


@app.route("/add_assignment", methods=["POST"])
def add_assignment():
    assignment = request.json.get("assignment")
    assignment_day = request.json.get("assignmentDay")
    assignment_time = request.json.get("assignmentTime")

    if not assignment or not assignment_day or not assignment_time:
        return jsonify({"message": "must include all data"}), 400

    new_assignment = Assignments(assignment=assignment, assignment_day=assignment_day, assignment_time=assignment_time)

    try:
        db.session.add(new_assignment)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": "something went wrong while adding:" + str(e)}), 400

    return jsonify({"message": "assignment successfully added"}), 200


@app.route("/delete_assignment/<int:user_id>", methods=["DELETE"])
def delete_assignment(user_id):
    to_delete = Assignments.query.get(user_id)

    if not to_delete:
        return jsonify({"message": "assignment was not found"}), 400

    try:
        db.session.delete(to_delete)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": "something went wrong while deleting:" + str(e)}), 400

    return jsonify({"message": "assignment was successfully deleted"}), 200


# ik maak voorlopig geen alter eigenschap voor Assignment.

if __name__ == "__main__":
    app.run(debug=True)