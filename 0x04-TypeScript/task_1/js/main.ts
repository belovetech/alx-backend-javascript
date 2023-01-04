interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index: string]: any;
}

// Teacher example
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

interface Directors extends Teacher {
  numberOfReports: number;
}

// Director example
const director1: Directors = {
  firstName: 'James',
  lastName: 'Smith',
  location: 'USA',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher('Raheem', 'Abeeb'));
console.log(teacher3);
console.log(director1);
