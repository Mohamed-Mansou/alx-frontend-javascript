export default class HolbertonCourse {
  constructor(name, lenght, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof lenght !== 'number') {
      throw TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw TypeError('Students must be array of strings');
    }
    for (const item of students) {
      if (typeof item !== 'string') {
        throw TypeError('Students must be array of strings');
      }
    }
    this._name = name;
    this._lenght = lenght;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = newName;
  }

  get lenght() {
    return this._lenght;
  }

  set lenght(newLenght) {
    if (typeof newLenght !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._lenght = newLenght;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw TypeError('Students must be array of strings');
    }
    for (const item of newStudents) {
      if (typeof item !== 'string') {
        throw TypeError('Students must be array of strings');
      }
    }
    this._students = newStudents;
  }
}
