// == is about comparison when you know the Data Types

var studentName1 = "Frank";
var studentName2 = `${studentName1}`;

console.log(studentName1 == studentName2); // true
console.log(studentName1 === studentName2); // true

var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshopEnrollment1 + 0;

console.log(workshopEnrollment1 == workshopEnrollment2); // true
console.log(workshopEnrollment1 === workshopEnrollment2); // true
