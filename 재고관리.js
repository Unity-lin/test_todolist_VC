const button = document.querySelector(".add_button");
const tbody = document.querySelector(".main_tbody");
const partNumData = document.querySelector(".partNumber_Input");
const partDetailData = document.querySelector(".partDetail_Input");
const factoringYearData = document.querySelector(".manufacturingYear_Input");
const unitCostData = document.querySelector(".unitCost_Input");
const qtyData = document.querySelector(".qty_Input");
const deliveryData = document.querySelector(".delivery_Input");

button.addEventListener('click', addpart);

function addpart(e) {
    e.preventDefault();
    if(validatePart()){
        const addButton = document.createElement("button");
        addButton.innerHTML = '추가';
        addButton.classList.add('add-btn');

        const tr = document.createElement('tr');
        const td1 = document.createElement('td');       //부품번호
        const td2 = document.createElement('td');       //부품상세내역
        const td3 = document.createElement('td');       //제조년도
        const td4 = document.createElement('td');       //단가
        const td5 = document.createElement('td');       //수량
        const td6 = document.createElement('td');       //납기
        const td7 = document.createElement('td');       //등록일
        const td8 = document.createElement('td');       //관리(추가버튼)

        const timebowl = Date.now(); //const는 수정 불가능
        const today = new Date(timebowl);
        const dateOption = {weekday: "long", year: "numeric", month: "long", day: "numeric"};

        td1.innerHTML = partNumData.value;
        td2.innerHTML = partDetailData.value;
        td3.innerHTML = factoringYearData.value;
        td4.innerHTML = unitCostData.value;
        td5.innerHTML = qtyData.value;
        td6.innerHTML = deliveryData.value;
        td7.innerHTML = today.toLocaleDateString("ko-KR", dateOption);
        
        td8.appendChild(addButton);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tr.appendChild(td8);
        tbody.appendChild(tr);
    }

}

const validatePart = () => {
    if(partNumData.value === "" || partDetailData.value === "" || factoringYearData.value === "" 
    || unitCostData.value === "" || qtyData.value === "" || deliveryData.value === ""){
        alert("모든 내용을 입력해주세요");
        return false;
    }
    return true;
};