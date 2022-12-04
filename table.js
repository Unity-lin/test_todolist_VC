const button = document.querySelector(".add_button");
const tbody = document.querySelector(".main_tbody");
const titleData = document.querySelector(".title_Input");
const nameData = document.querySelector(".name_Input");
const emailData = document.querySelector(".email_Input");
let numberSeq = 0;


button.addEventListener('click', addTable);

function addTable(e) {

    e.preventDefault();
    if(validateTable()){
    numberSeq = numberSeq + 1;
    const modifyButton = document.createElement("button");
    modifyButton.innerHTML = '수정';
    modifyButton.classList.add('modify-btn');
    
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '삭제';
    deleteButton.classList.add('delete-btn');

    const tr = document.createElement('tr');
    const td1 = document.createElement('td');       //순번
    const td2 = document.createElement('td');       //제목
    const td3 = document.createElement('td');       //이름
    const td4 = document.createElement('td');       //이메일
    const td5 = document.createElement('td');       //가입일
    const td6 = document.createElement('td');       //수정 삭제버튼

    const timebowl = Date.now(); //const는 수정 불가능
    const today = new Date(timebowl);
    const dateOption = {weekday: "long", year: "numeric", month: "long", day: "numeric"};

    td1.innerHTML = numberSeq;
    td2.innerHTML = titleData.value;
    td3.innerHTML = nameData.value;
    td4.innerHTML = emailData.value;
    td5.innerHTML = today.toLocaleDateString("ko-KR", dateOption);

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
}

const validateTable = () => {
    if(titleData.value === "" || nameData.value === "" || emailData.value === ""){
        alert("모든 내용을 입력해주세요");
        return false;
    }
    return true;
};