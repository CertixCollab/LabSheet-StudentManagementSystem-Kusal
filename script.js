let students = JSON.parse(localStorage.getItem('students')) || [];
let editIndex = -1;

const modal = document.getElementById('modal');
const viewModal = document.getElementById('viewModal');
const addBtn = document.getElementById('addBtn');
const closeBtn = document.querySelector('.close');
const closeViewBtn = document.querySelector('.close-view');
const studentForm = document.getElementById('studentForm');
const formTitle = document.getElementById('formTitle');

