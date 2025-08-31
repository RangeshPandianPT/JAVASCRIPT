const students = [];

function addStudent(name, score) {
   score =  Number(score);
   score = score ?? 0;
   name = name.trim().toUpperCase();
   students.push({ name, score });
}

function getGrade() {
    students.map((student) => {
        let grade = 'F';
        if (student.score >= 90) grade = 'A';
        else if (student.score >= 75) grade = 'B';
        else if (student.score >= 50) grade = 'C';
        else if (student.score >= 35) grade = 'D';
        return { ...student, grade };
    })
}

function getTopScorer() {
   return students.filter((student) => student.score >=75) 
}

function findStudent(name) {
    return students.find((student) => student.name == name)
}

function checkFailing() {
    return students.some((student) => student.score < 35 )
}

function calculateAverage() {
    const total = students.reduce((acc ,student) => acc+student.score, 0);
    return total/students.length;
}
function displayStudents() {
    const graded = getGrade();
    console.log ("Student Data");
    console.log("All Student with Grades");
    console.log("Name | Score | Grade");
    graded.forEach((student) => {
        console.log(`${student.name} | ${student.score} | ${student.grade} `);

})
}

addStudent("Alice", 85);
addStudent("Bob", 67);
addStudent("Charlie", 45);
addStudent("David", 30);
addStudent("Eve", 95); 
addStudent("Frank", 72);
addStudent("Grace", 88);
addStudent("Heidi", 54);
addStudent("Ivan", 29);
addStudent("Judy", 76);




console.log("Top Scorers (Score >= 75):");
console.log(getTopScorer());

console.log("Searching for Bob:");
console.log(findStudent("Bob"));

console.log("Is there any failing student? ")
console.log(checkFailing() ? "Yes some students are failed": "No all students are passed");
console.log("Average Score: " + calculateAverage());