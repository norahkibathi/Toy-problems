// the funciton aims at calculating grading systems 
function gradingSystem (grade) {
    if (grade>=79) {
        return "A";
    }
    else if (grade>= 60 && grade < 79) {
        return "B";
    }
    else if (grade>=49 && grade <= 59) {
        return "C";
    }
       else if (grade>=40 && grade <49) {
        return "D";
    }
        else
    return 'E';
}
console.log(gradingSystem(5))






