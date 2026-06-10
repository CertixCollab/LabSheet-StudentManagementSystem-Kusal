let students = JSON.parse(localStorage.getItem('students')) || [];
let editIndex = -1;

const modal = document.getElementById('modal');
const viewModal = document.getElementById('viewModal');
const addBtn = document.getElementById('addBtn');
const closeBtn = document.querySelector('.close');
const closeViewBtn = document.querySelector('.close-view');
const studentForm = document.getElementById('studentForm');
const formTitle = document.getElementById('formTitle');

addBtn.onclick = () => {
    formTitle.textContent = 'Add New Student';
    modal.style.display = 'block';
    studentForm.reset();
    editIndex = -1;
};

closeBtn.onclick = () => {
    modal.style.display = 'none';
};

closeViewBtn.onclick = () => {    
    viewModal.style.display = 'none';
};

window.onclick = (e) => {
    if (e.target === modal) modal.style.display = 'none';
    if (e.target === viewModal) viewModal.style.display = 'none';
};

studentForm.onsubmit = (e) => {
    e.preventDefault();
    
    const id = document.getElementById('studentId').value.trim();
    const name = document.getElementById('studentName').value.trim();
    const age = document.getElementById('studentAge').value.trim();
    const course = document.getElementById('studentCourse').value;

    if (!id || !name || !age || !course) {
        alert('All fields are required!');
        return;
    }

    if (isNaN(age) || age <= 0) {
        alert('Age must be a valid number!');
        return;
    }

    if (editIndex === -1 && students.some(s => s.id === id)) {
        alert('Student ID already exists!');
        return;
    }

    const student = { id, name, age, course };

    if (editIndex === -1) {
        students.push(student);
    } else {
        students[editIndex] = student;
    }

    localStorage.setItem('students', JSON.stringify(students));
    modal.style.display = 'none';
    displayStudents();
};


function displayStudents() {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';
    
    students.forEach((student, index) => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
            <td>
                <span class="action-btn" onclick="viewStudent(${index})">👁</span>
                <span class="action-btn" onclick="editStudent(${index})">✏</span>
                <span class="action-btn" onclick="deleteStudent(${index})">🗑</span>
            </td>
        `;
    });
}


displayStudents();

