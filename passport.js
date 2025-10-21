const btn = document.getElementById('change');
btn.addEventListener('click', changeLang)

let issued = document.getElementById('issued');
let area = document.getElementById('area');
let nm = document.getElementById('name');
let surname = document.getElementById('surname');
let patron = document.getElementById ('patronymic')
let  gender = document.getElementById('gender');
let town = document.getElementById('town');
let region = document.getElementById('region');

const eng = ['THE MINISTRY OF INTERNAL AFFAIRS OF RUSSIA', 'IN THE LIPETSK REGION', 'ZATONSKIKH', 'ALINA', 'ROMANOVNA', 'F', 'LIPETSK', 'LIPETSK AREA'];
const rus = ['УМВД России', 'По Липецкой области', 'Затонских', 'Алина', 'Романовна','ЖЕН.', 'г.Липецк', 'Липецкой области']

function changeLang() {
    if (btn.innerText == 'Click to show English version') {

        issued.innerHTML = eng[0];
        area.innerText = eng[1];
        surname.innerText = eng[2];
        nm.innerText = eng[3];
        patron.innerText = eng[4];
        gender.innerText = eng[5];
        town.innerHTML = eng[6];
        region.innerHTML = eng[7];


        btn.innerText = 'Вернуться к русской версии'
    } else {
        issued.innerText = rus[0];
        area.innerText = rus[1];
        surname.innerText = rus[2];
        nm.innerText = rus[3];
        patron.innerText = rus[4];
        gender.innerText = rus[5];
        town.innerText = rus[6];
        region.innerText = rus[7];

        btn.innerText = 'Click to show English version'

    };
};


