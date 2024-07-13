function Student(fName, lName, yearOfBirthday, marks) {
    this.fName = fName;
    this.lName = lName;
    this.yearOfBirthday = yearOfBirthday;
    this.marks = marks;
    this.visitLog = new Array(25);
}

Student.prototype.getAge = function() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.yearOfBirthday;
};

Student.prototype.getAvgMarks = function() {
    const sum = this.marks.reduce((startVal, currentValue) => {
        return startVal + currentValue;
    }, 0);
    return sum / this.marks.length;
};

Student.prototype.present = function() {
    addStudentAttendance(true, this.visitLog);
};

Student.prototype.absent = function() {
    addStudentAttendance(false, this.visitLog);
};

function addStudentAttendance(bool, visitLog) {
    for (let i = 0; i < visitLog.length; i++) {
        if (visitLog[i] === undefined) {
            visitLog[i] = bool;
            return;
        }
    }
    console.log("Журнал відвідувань закінчився!")
}

Student.prototype.summary = function() {
    const avgMark = this.getAvgMarks();
    const lessonsCount = this.visitLog.filter(log => log !== null).length;
    const countVisitLog = this.visitLog.filter(log => log === true).length;
    const avgVisitLog = countVisitLog / lessonsCount;

    if(avgMark > 90 && avgVisitLog > 0.9) {
        return "Молодець!";
    } else if(avgMark > 90 || avgVisitLog > 0.9) {
        return "Добре, але можна краще!";
    } else {
        return "Редиска!";
    }
};

let student1 = new Student("John", "Dou", "1992", [90, 96, 95, 97, 94, 92]);
let student2 = new Student("Silver", "Wolf", "1999", [80, 96, 85, 77, 94, 82]);
let student3 = new Student("Jane", "Smith", "2001", [98, 96, 95, 97, 94, 99]);
let student4 = new Student("Emily", "Brown", "2005", [60, 76, 65, 67, 74, 72]);

console.log(`${student1.fName} ${student1.lName} ${student1.getAge()} років, середній бал: ${student1.getAvgMarks()}`);

student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();

console.log(student1.summary());

console.log(`${student2.fName} ${student2.lName} ${student2.getAge()} років, середній бал: ${student2.getAvgMarks()}`);

student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();

console.log(student2.summary());

console.log(`${student3.fName} ${student3.lName} ${student3.getAge()} років, середній бал: ${student3.getAvgMarks()}`);

student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.absent();
student3.absent();
student3.absent();

console.log(student3.summary());

console.log(`${student4.fName} ${student4.lName} ${student4.getAge()} років, середній бал: ${student4.getAvgMarks()}`);

student4.present();
student4.present();
student4.present();
student4.present();
student4.present();
student4.present();
student4.present();
student4.present();
student4.present();
student4.present();
student4.present();
student4.absent();
student4.absent();
student4.absent();
student4.absent();

console.log(student4.summary());


