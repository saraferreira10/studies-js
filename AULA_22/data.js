//const data = new Date();
//const data = new Date(2024, 1, 1, 18, 30);

const data = new Date();

console.log(typeof data);
console.log(data.toString());

console.log(data.getDate());
console.log(data.getMonth());
let diaDaSemana = data.getDay();
let txt;

switch (diaDaSemana) {
    case 0:
        txt = "domingo";
        break;
    case 1:
        txt = "segunda";
        break;
    case 2:
        txt = "Terça";
        break;
    case 3:
        txt = "Quarta";
        break;
    case 4:
        txt = "Quinta";
        break;
    case 5:
        txt = "Sexta";
        break;
    case 6:
        txt = "Sábado";
        break;
    default:
        txt = "oxe, tá certo isso?";
        break;
}

console.log(txt);

const dayOfWeek = txt;
const dayOfMonth = data.getDate();
const month = data.getMonth();
const year = data.getFullYear();
const hour = data.getHours();
const minutes = data.getMinutes();

let monthTxt;

switch (month) {
    case 0:
        monthTxt = "Janeiro";
        break;
    case 1:
        monthTxt = "Fevereiro";
        break;
    case 2:
        monthTxt = "Março";
        break;
    case 3:
        monthTxt = "Abril";
        break;
    case 4:
        monthTxt = "Maio";
        break;
    case 5:
        monthTxt = "Junho";
        break;
    case 6:
        monthTxt = "Julho";
        break;
    case 7:
        monthTxt = "Agosto";
        break;
    case 8:
        monthTxt = "Setembro";
        break;
    case 9:
        monthTxt = "Outubro";
        break;
    case 10:
        monthTxt = "Novembro";
        break;
    case 11:
        monthTxt = "Dezembro";
        break;
    default:
        monthTxt = "oxe, tá certo isso?";
        break;
}

function adicionarZeroEsquerda(num){
    return num < 10 ? `0${num}` : num;
}

document.getElementById('content').innerHTML = `${dayOfWeek}, ${adicionarZeroEsquerda(dayOfMonth)} de ${monthTxt} de ${year} ${adicionarZeroEsquerda(hour)}:${adicionarZeroEsquerda(minutes)}`;


