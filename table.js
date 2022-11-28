const button = document.querySelector(".add_button");
const tbody = document.querySelector(".main_tbody");
const input = document.querySelector(".Input")

button.addEventListener('click', addTable);

function addTable() {

    const modifyButton = document.createElement("button");
    modifyButton.innerHTML = '수정';
    modifyButton.classList.add('modify-btn');
    
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '삭제';
    deleteButton.classList.add('delete-btn');

    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');
    const td6 = document.createElement('td');

    const timebowl = Date.now();
    const today = new Date(timebowl);

    td1.textContent = '1';
    td2.textContent = '';
    td3.textContent = '이학';
    td4.textContent = 'ilin51278@gmail.com';
    td5.textContent = today.toLocaleDateString();

    td6.appendChild(deleteButton);
    td6.appendChild(modifyButton);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tbody.appendChild(tr);
}