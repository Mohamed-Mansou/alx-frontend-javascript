export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrade = newGrades.filter((grade) => grade.studentId === student.id);

      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: matchingGrade.length > 0 ? matchingGrade[0].grade : 'N/A',
      };
    });
}
