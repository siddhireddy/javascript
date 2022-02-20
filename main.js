const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const mmsg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

if (nameInput.value === '' || emailInput.value === '') {
    mmsg.classList.add('error');
    mmsg.innerHTML = 'Please enter fields';

    setTimeout(() => mmsg.remove(), 3000);
} else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode('${nameInput.value} : ${emailInput.value}'));

    userList.appendChild(li);

    //clear field
    nameInput.value = '';
    emailInput.value = '';   
}
}
