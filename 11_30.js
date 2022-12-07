// let personAge = 6.5;

// if (personAge < 0) {
//   console.log('Amzius privalo buti teigiamas skaicius');
// } else if (personAge < 6) {
//   console.log('I mokykla neina');
// } else if (personAge < 7) {
//   console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.');
// } else if (personAge < 10) {
//   console.log('Pradines klases');
// } else if (personAge < 11) {
//   console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.');
// } else if (personAge < 14) {
//   console.log('Pagrindine');
// } else if (personAge < 15) {
//   console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.');
// } else if (personAge < 18) {
//   console.log('Gimnazija');
// } else if (personAge < 19) {
//   console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.');
// } else if (personAge < 120) {
//   console.log('Mokykla baige');
// } else {
//   console.log('Amzius per didelis');
// }

let lightColor = 'green'

switch (lightColor) {
    case 'green':
        console.log('galima eiti')
        break
    case 'yellow':
        console.log('pasiruosk')
        break
    case 'red':
        console.log('stop')
        break
    default:
        console.log('sugedo')
}

// let personAge = 5

// switch (personAge) {
//     case 0:
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log('i mokykla neina')
//         break
//     case 6:
//         console.log('i mokykla tikriausiai neina, bet gali buti pirmokas')
//         break
//     case 7:
//     case 8:
//     case 9:
//         console.log('pradinukas')
//         break
//     case 10:
//         console.log('tikriausiai mokosi pradineje, bet gali buti ir penktokas')
//         break
//     case 11:
//     case 12:
//     case 13:
//         console.log('vidurine')
//         break
//     case 14:
//         console.log('tikriausiai mokosi pagrindineje, bet gali buti ir devintokas')
//         break
//     case 15:
//     case 16:
//     case 17:
//         console.log('gimnazija')
//         break
//     case 18:
//         console.log('tikriausiai mokosi gimnazijoje, taciau mokykla gali buti ir baiges')
//         break
//     default:
//         console.log('baige')

// }

let personAge = 150

switch (true) {
    case (personAge < 6):
        console.log('i mokykla neina')
        break
    case (personAge < 7):
        console.log('i mokykla tikriausiai neina, bet gali buti pirmokas')
        break
    case (personAge < 10):
        console.log('pradinukas')
        break
    case (personAge < 11):
        console.log('tikriausiai mokosi pradineje, bet gali buti ir penktokas')
        break
    case (personAge < 14):
        console.log('vidurine')
        break
    case (personAge < 15):
        console.log('tikriausiai mokosi pagrindineje, bet gali buti ir devintokas')
        break
    case (personAge < 18):
        console.log('gimnazija')
        break
    case (personAge < 19):
        console.log('tikriausiai mokosi gimnazijoje, taciau mokykla gali buti ir baiges')
        break
    default:
        console.log('baige')

}


//AND (&&) ir OR (||) operatoriai
let num = 10

if (num === 5 || num === 7) {
    console.log('Skaicius yra 5 arba 7')
} else {
    console.log('ivestas skaicius nera 5 arba 7')
}

if (num <= 15 && num >= 10) {
    console.log('skaicius yra tarp 10 ir 15')
} else {
    console.log('skaicius nera tarp 10 ir 15')
}


// UŽDUOTIS: sukurti galvosūkį su keletu klausimu
// PIRMAS LYGIS: 
// 1. Norint patekti į kitą lygį, reikia atsakyti bent į vieną klausimą iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris klausimas buvo neteisingas.
console.log('--------------------1 LYGIS------------------');

// Kiek bus 123 + 456 = 579
let correctAnswer11 = 579
// Kaip vadinasi arciausiai zemes esanti zvaigze
let correctAnswer12 = 'sun'

let playerAnswer11 = 555
let playerAnswer12 = 'moon'

//1. Patekai i kita lygi: abu atsakymai buvo teisingi.
//2. Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras teisingas.
//3. Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas teisingas.
//4. Nepatekai i kita lygi: abu atsakymai buvo neteisingi :(
// bus 4 salygos

//ANTRAS LYGIS:
//1. Norint patekti i kita lygi reikia atsakyti i abu klausimus is dvieju
//2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parasyti kuris atsakymas buvo neteisingas

//TRECIAS LYGIS:
//