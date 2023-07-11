// create interface
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [others: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    printTeacher(firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string) {
    return (firstName[0] + ". " + lastName);
}


interface StudentInterface {
    firstName: string;
    lastName: string;
}

interface StudentConstructor {
    new(f: string, l: string): {firstName: string, lastName: string};
}

class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;

    constructor(fname: string, lname: string) {
        this.firstName = fname;
        this.lastName = lname;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return (this.firstName);
    }
}
