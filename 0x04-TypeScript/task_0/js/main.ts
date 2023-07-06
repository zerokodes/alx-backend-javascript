// Interface creation
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// 
const std1:Student = {
    firstName: "Pita",
    lastName: "Zee",
    age:25,
    location: "Kitwe",
}

const std2:Student = {
    firstName: "Sepi",
    lastName: "Muke",
    age: 24,
    location: "Lusaka"
}

// Create Array with 2 student variables
const studentsList: Student[] = [std1, std2]

// Create vanilla js table 
const table: HTMLTableElement = document.createElement('table');

document.body.appendChild(table);
const thead: HTMLTableSectionElement = table.createTHead();
const row: HTMLTableRowElement = thead.insertRow();
const th1: HTMLTableCellElement = row.insertCell(0);
const th2: HTMLTableCellElement = row.insertCell(1);
th1.innerHTML = ("<b>First Name</b>");
th2.innerHTML = ("<b>Location</b>");
const body: HTMLTableSectionElement = table.createTBody();
// Iterate the array to get student name and location
studentsList.map((student) => {
	const newRow: HTMLTableRowElement = body.insertRow();
	const firstNameRow: HTMLTableCellElement = newRow.insertCell();
	const locationRow: HTMLTableCellElement= newRow.insertCell();
	firstNameRow.innerHTML = student.firstName;
	locationRow.innerHTML = student.location;
})
