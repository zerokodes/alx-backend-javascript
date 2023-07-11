// create director Interfaces
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Create teacher interface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Create Director classe
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

// Create teacher class
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

function createEmployee(salary: number | string) : Teacher | Director {
    if (salary < 500){
        return new Teacher();
    }
    return new Director();
}


function isDirector(employee: Teacher | Director) {
    return (employee instanceof Director);
}


function executeWork(employee: Teacher | Director): void{
    if (employee instanceof Teacher){
        console.log(employee.workTeacherTasks());
    }
    else {
        console.log(employee.workDirectorTasks());
    }
}


type Subjects = "Math" | "History"; 

function teachClass(todayClass: Subjects): String {
    if (todayClass === "Math")
    {
        return "Teaching Math"
    }
    else{
        return "Teaching History"
    }
}
