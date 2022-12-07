console.log('--------------------1 LYGIS------------------');
let playerAnswer11 = prompt('Kiek bus 123 + 456?')
let correctAnswer11 = 579
let playerAnswer12 = prompt('Kaip vadinasi arciausiai zemes esanti zvaigze? (parasykite angliskai, is mazuju raidziu)')
let correctAnswer12 = 'sun'
let a12 = playerAnswer12 == correctAnswer12
let a11 = playerAnswer11 == correctAnswer11
let output1 = ''
let level1done = false

if (a11 && a12) {
    output1 = 'Patekai i kita lygi: abu atsakymai buvo teisingi.'
    level1done = true
} else if (a11) {
    output1 = 'Patekai i kita lygi: pirmas atsakymas buvo teisingas, o antras neteisingas.'
    level1done = true
} else if (a12) {
    output1 = 'Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras teisingas.'
    level1done = true
} else {
    output1 = 'Nepatekai i kita lygi: abu atsakymai buvo neteisingi :('
}
console.log(output1)
console.log(level1done)

let level2done = false
if (level1done) {
    console.log('--------------------2 LYGIS------------------'); 
    let playerAnswer21 = prompt('Kiek bus 554 + 333?')
    let correctAnswer21 = 887
    let playerAnswer22 = prompt('Kas sudaro 71% Zemes pavirsiaus? (parasykite lietuviskai, is mazuju raidziu)')
    let correctAnswer22 = 'vanduo'
    let a22 = playerAnswer22 == correctAnswer22
    let a21 = playerAnswer21 == correctAnswer21
    let output2 = ''

    if (a21 && a22) {
        output2 = 'Patekai i kita lygi: abu atsakymai buvo teisingi.'
        level2done = true
    } else if (a21) {
        output2 = 'Nepatekai i kita lygi: pirmas atsakymas buvo teisingas, o antras neteisingas.'
    } else if (a22) {
        output2 = 'Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras teisingas.'
    } else {
        output2 = 'Nepatekai i kita lygi: abu atsakymai buvo neteisingi :('
    }
    console.log(output2)
    console.log(level2done)
}



if (level2done) {
    console.log('--------------------3 LYGIS------------------');
    let playerAnswer31 = prompt('Kiek bus 2024 + 5055?')
    let correctAnswer31 = 7079
    let playerAnswer32 = prompt('Kiek Lietuvoje milijonu gyventoju, pagal 2022m. statistikas? (Atsakyma pateikite su vienu skaiciumi po tasko)')
    let correctAnswer32 = '2.6'
    let playerAnswer33 = prompt('Kada vyksta Kucios? (atsakyma pateikite mm/dd formatu)')
    let correctAnswer33 = '12/24'
    let output3 = ''
    let a33 = playerAnswer33 == correctAnswer33
    let a32 = playerAnswer32 == correctAnswer32
    let a31 = playerAnswer31 == correctAnswer31
    
    if (a31 && a32 && a33) {
        output3 = 'Patekai i kita lygi: visi atsakymai buvo teisingi'
    } else if (a31 && a32) {
        output3 = 'Patekai i kita lygi: pirmas ir antras atsakymai buvo teisingi, trecias neteisingas'
    } else if (a32 && a33) {
        output3 = 'Patekai i kita lygi: antras ir trecias atsakymai buvo teisingi, pirmas neteisingas'
    } else if (a31 && a33) {
        output3 = 'Patekai i kita lygi: pirmas ir trecias atsakymai buvo teisingi, antras neteisingas'
    } else if (a31) {
        output3 = 'Nepatekai i kita lygi: pirmas atsakymas buvo teisingas, antras ir trecias neteisingi'
    } else if (a32) {
        output3 = 'Nepatekai i kita lygi: antras atsakymas buvo teisingas, pirmas ir trecias neteisingi'
    } else if (a33) {
        output3 = 'Nepatekai i kita lygi: trecias atsakymas buvo teisingas, pirmas ir antras neteisingi'
    } else {
        output3 = 'Nepatekai i kita lygi: visi atsakymai buvo neteisingi'
    }
    console.log(output3)
} 