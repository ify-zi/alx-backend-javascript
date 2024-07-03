interface Student {
  firstName: String;
	lastName: String;
	age: Number;
	location: String;
}

const student1: Student = {
  firstName: "Mike",
	lastName: "Owen",
	age: 24,
	location: "Los Angeles"
};

const student2: Student = {
  firstName: "Frank",
	lastName: "Angel",
	age: 22,
	location: "Chicago"
};

const studentList:  Array<Student> = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
const thead: HTMLTableSectionElement = document.createElement('thead');

const header: HTMLTableRowElement = thead.insertRow();
const header1: HTMLTableCellElement = header.insertCell();
const header2: HTMLTableCellElement = header.insertCell();
header1.innerHTML = 'First Name';
header2.innerHTML = 'Location';

  studentsList.forEach((student) => {
    const row: HTMLTableRowElement = tbody.insertRow();
    const cell1: HTMLTableCellElement = row.insertCell();
    const cell2: HTMLTableCellElement = row.insertCell();
    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
  });

table.appendChild(tbody);
document.body.appendChild(table);
