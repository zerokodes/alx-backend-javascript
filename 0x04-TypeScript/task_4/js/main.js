/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/Subjects.ts" />
/// <reference path="./subjects/Teacher.ts" />

// export constants for subjects
export const cpp = Subjects.Cpp;
export const java = Subjects.JavaClass;
export const react = Subjects.ReactClass;

//  create and export Teacher object
export const cTeacher: Subjects.Teacher = {
  firstName: "Sepi",
  lastName: 'Muke',
  experienceTeachingC: 10,
}

// Create subject objects and print to the console
const cppSubject = new cpp();
console.log('C++');
console.log(cppSubject.setTeacher(cTeacher));
console.log(cppSubject.getRequirements());
console.log(cppSubject.getAvailableTeacher());

const javaSubject = new java();
console.log('Java');
console.log(javaSubject.setTeacher(cTeacher));
console.log(javaSubject.getRequirements());
console.log(javaSubject.getAvailableTeacher());

const reactSubject = new react();
console.log('React');
console.log(reactSubject.setTeacher(cTeacher));
console.log(reactSubject.getRequirements());
console.log(reactSubject.getAvailableTeacher());
