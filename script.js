// console.log('sveikas');
// console.log('sveiki');

// var vardas = 'John'
// console.log(vardas)

// vardas = 'Steve'
// console.log(vardas)

// let pavarde = "Doe"
// console.log(pavarde) // tik karta kintamasis naudojamas

// let miestas = `Kaunas`

// const asmensKodas = 123456789;
// console.log(asmensKodas) // reiksmes pakeist negalima

// let amzius = 20
// amzius = 21
// console.log(amzius)

// let yraStudentas = true

// console.log(vardas + ' ' + pavarde)

// console.log("Hello, " + vardas + " " + pavarde + ", how are you?")
// console.log('Hello, ' + vardas + ' ' + pavarde + ', how are you?')
// console.log(`Hello, ${vardas} ${pavarde}, how are you?`)
// console.log(`${vardas} said: "Good Morning!"`)

// console.log("That's my car")
// console.log('John `said`: "That\'s my car"')

// amzius = 25

// console.log(vardas + ' ' + pavarde + ' (amzius ' + amzius + ' m.), asmens kodas: ' + asmensKodas + ', gyvenamasis miestas: ' + miestas + '.')
// console.log(`${vardas} ${pavarde} (amžius ${amzius} m.), asmens kodas: ${asmensKodas}, gyvenamasis miestas: ${miestas}.`)

// // MATEMATINIAI OPERATORIAI
// let num1 = 10 //number tipo
// let num2 = 22 //number tipo
// let num3 = '10' //string tipo


// // Matematiniai veiksmai kai abu skaiciai yra number tipo
// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)
// console.log(num1 % num2)

// // Matematiniai veiksmai kai vienas skaicius yra number tipo, o kitas skaicius yra string tipo
// console.log(num1 + num3) //sudeties atlikti nepavyksta, nes tiesiog prie vieno prideda kita
// console.log(num3 - num2)
// console.log(num3 * num2)
// console.log(num3 / num2)
// console.log(num2 % num3)

// SALYGOS
// console.log(10 < 10)
// console.log(10 > 10)
// console.log(10 <= 10)
// console.log(10 <= 10)
// console.log(10 >= 10)

// //loose equality (double equals)
// console.log(10 == 10)
// console.log('vardas' == 'vardas')
// console.log(10 == '10')

// //strict equality (triple equals)
// console.log(10 === 10) 
// console.log('vardas' === 'vardas')
// console.log(10 === '10') //triguba lygybe pirmiausiai patrikrina duomenu tipa, o tik po to turini

// console.log(10 != 10)
// console.log(10 !== 10)
// console.log(!true)
// console.log(!false)

// //IF, ELSE IF, ELSE
// let originalLight = 'GREEN'
// light = originalLight.toLowerCase() //pavercia stringa mazosiomis
// console.log(originalLight)
// console.log(light)

// if (light === 'green') {
//     console.log('Galima eiti')
// }

// if(light === 'yellow') {
//     console.log('Pasiruosk')
// }

// if (light === 'red') {
//     console.log('STOP')
// } else {
//     console.log('sugedo')
// }
// let light = 'blue'

// if (light === 'green' || light === 'Green' || 'GREEN') {
//     console.log('Galima eiti')
// } else if(light === 'yellow') {
//     console.log('Pasiruosk')
// } else if (light === 'red') {
//     console.log('STOP')
// } else {
//     console.log('sugedo')
// }

//LOTERIJOS BILIETAS
// let age = 120

// if (age < 18) {
//     console.log('Pirkti negalima')
// } else {
//     console.log('Pirkti galima')
// }

// if (age <= 17) {
//     console.log('Pirkti negalima')
// } else {
//     console.log('Pirkti galima')
// }

// if (age > 17 ) {
//     console.log('Pirkti galima')
// } else {
//     console.log('Pirkti negalima')
// }

// if (age >= 18 ) {
//     console.log('Pirkti galima')
// } else {
//     console.log('Pirkti negalima')
// }

// if (age < 0 ) {
//     console.log('Amzius per mazas')
// } else if (age >= 0 && age <= 17) {
//     console.log('Pirkti negalima')
// } else if (age >= 18 && age <= 120) {
//     console.log('Pirkti galima')
// } else {
//     console.log('Amzius per didelis')
// }

// let age = 120

// if (age < 0 ) {
//     console.log('Amzius per mazas')
// } else if (age <= 17) {
//     console.log('Pirkti negalima')
// } else if (age <= 120) {
//     console.log('Pirkti galima')
// } else {
//     console.log('Amzius per didelis')
// }


// let age = prompt('Enter your age')

// if (isNaN(age)) {
//     console.log('ivestas ne skaicius') 
// } else if (age < 0) {
//     console.log('ivestas amzius per mazas') 
// } else if  (age > 120) {
//     console.log('ivestas amzius per didelis')
// } else if (age == 6) {
//     console.log('tikriausiai i mokykla neina, taciau gali buti ir pirmokas')
// } else if (age < 6) {
//     console.log('i mokykla neina')
// } else if (age == 10) {
//     console.log('tikriausiai mokosi pradineje, taciau gali buti ir penktokas')
// } else if (age < 10) {
//     console.log('eina i pradine klase')
// } else if (age == 14) {
//     console.log('tikriausiai mokosi pagrindineje, taciau gali buti ir devintokas')
// } else if (age < 14) {
//     console.log('eina i pagrindine')
// } else if (age == 18) {
//     console.log('tikriausiai mokosi gimnazijoje, taciau mokykla gali buti ir baiges')
// } else if (age < 18) {
//     console.log('eina i progimnazija')
// } else if (age >= 120) {
//     console.log('amzius per didelis')
// } else {
//     console.log('mokykla baige')
// }

// let grade = prompt('iveskite ivertinima')

// if (isNaN(grade)) {
//     console.log('ivestas ne skaicius') 
// } else if (grade < 1) {
//     console.log('ivertinimas per mazas')
// } else if (grade > 5) {
//     console.log('ivertinimas per mazas')
// } else if (grade == 1) {
//     console.log('labai blogai')
// } else if (grade == 2) {
//     console.log('blogai')
// } else if (grade == 3) {
//     console.log('vidutiniskai')
// } else if (grade == 4) {
//     console.log('gerai')
// } else if (grade == 5) {
//     console.log('labai gerai')
// }


// let promptVariable = prompt('Enter your age')
// console.log(promptVariable)

// let personAge = 45
// console.log(personAge)
// console.log(isNaN(personAge))

// SLAPTAZODIS
// let password = 'asd            # ff'
// let trimPassword = password.trim().replaceAll(' ', '')
// let passwordLength = trimPassword.length
// console.log(password)
// console.log(passwordLength)

// if (passwordLength > 15 && trimPassword.includes('#')) {

//   if (passwordLength < 21) {
//         console.log('slaptazodis tinkamas, taciau rekomenduojama bent 21 simbolis')
//     } else {
//         console.log('slaptazodis tinkamas!') 
//     }

// } else {
//     console.log('slaptazodis per trumpas. turetu buti bent 16 simboliu')
// }





//skaiciuotuvas (nd)

let num1 = Number(prompt('enter a number'))
let num2 = Number(prompt('enter another number'))
// let num3 = num1 * num2
// let num4 = num1 / num2
// let num5 = num1 + num2
// let num6 = num1 - num2
let action = prompt('enter an action')

console.log(action)

if(action == '*') {
    console.log(num1 * num2)
} else if(action === '/') {
    console.log(num1 / num2)
} else if(action === '+') {
    console.log(num1 + num2)
} else if(action === '-') {
    console.log(num1 - num2)
} else {
    console.log('not an action')
}




