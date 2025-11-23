/*You are given an array of student objects. Each student object contains a name and marks. Write a function processStudents that performs the following steps:

Filter the students to create a new array of students who scored above 60 marks.
Sort the filtered array in descending order of marks.
Map the sorted array to extract only the names of the students.
Return the array of sorted names.
Example:

Input:

  { "name": "Alice", "marks": 58 },
  { "name": "Bob", "marks": 85 },
  { "name": "Charlie", "marks": 92 },
  { "name": "David", "marks": 45 },
  { "name": "Emma", "marks": 76 },
  { "name": "Frank", "marks": 63 },
  { "name": "Grace", "marks": 89 },
  { "name": "Hannah", "marks": 95 },
  { "name": "Ian", "marks": 54 },
  { "name": "Jack", "marks": 79 },
  { "name": "Kate", "marks": 67 },
  { "name": "Leo", "marks": 88 },
  { "name": "Mia", "marks": 91 },
  { "name": "Nathan", "marks": 72 },
  { "name": "Olivia", "marks": 82 }
]
Output: ["Hannah", "Charlie", "Mia", "Grace", "Leo", "Bob", "Olivia", "Jack", "Emma", "Nathan", "Kate", "Frank"]

Submis */
function processStudents(students) {
  return students
    .filter(student => student.marks > 60)                       // Step 1: Filter
    .sort((a, b) => b.marks - a.marks)                           // Step 2: Sort DESC
    .map(student => student.name);                               // Step 3: Extract names
}
const students = [
  { name: "Alice", marks: 58 },
  { name: "Bob", marks: 85 },
  { name: "Charlie", marks: 92 },
  { name: "David", marks: 45 },
  { name: "Emma", marks: 76 },
  { name: "Frank", marks: 63 },
  { name: "Grace", marks: 89 },
  { name: "Hannah", marks: 95 },
  { name: "Ian", marks: 54 },
  { name: "Jack", marks: 79 },
  { name: "Kate", marks: 67 },
  { name: "Leo", marks: 88 },
  { name: "Mia", marks: 91 },
  { name: "Nathan", marks: 72 },
  { name: "Olivia", marks: 82 }
];

console.log(processStudents(students));
