// console.log('veikia')

//switchas: kazkas = kazkam

// let grade = 9

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

// let h1Element = document.querySelector('h1')
// console.dir(h1Element.textContent)
// console.dir(h1Element.style.backgroundColor)
// console.dir(h1Element.style.color)

// h1Element.textContent = 'Sveikas'
// h1Element.style.backgroundColor = 'purple'
// h1Element.style.color = 'white'
// h1Element.style.textAlign = 'center'
// h1Element.style.padding = '20px'

// switch (grade) {
//     case 1:
//     case 2:
//         h1Element.textContent = 'Labai blogai'
//         h1Element.style.backgroundColor = 'red'
//         break
//     case 3:
//     case 4:
//         h1Element.textContent = 'Blogai'
//         break
//     case 5:
//     case 6:
//         h1Element.textContent = 'Vidutiniskai'
//         break
//     case 7:
//     case 8:
//         h1Element.textContent = 'Gerai'
//         break
//     case 9: 
//     case 10:
//         h1Element.textContent = 'Puikiai'
//         h1Element.style.backgroundColor = 'green'
//         break
//     default:
//         h1Element.textContent = 'Netinkamas skaicius'
// }


//namu darbai
// let light = 'blue'

// if (light === 'green') {
//     console.log('Galima eiti')
// } else if(light === 'yellow') {
//     console.log('Pasiruosk')
// } else if (light === 'red') {
//     console.log('STOP')
// } else {
//     console.log('sugedo')
// }








let greenButton = document.querySelector('button')

greenButton.addEventListener('click', () => {
    let light = 'green'
    trafficLight('green')
})

let yellowButton = document.querySelector('#yellow-button')

yellowButton.addEventListener('click', () => {
    let light = 'yellow'
    trafficLight('yellow')
})

let redButton = document.querySelector('#red-button')

redButton.addEventListener('click', () => {
    let light = 'red'
    trafficLight(light)
})

let errorButton = document.querySelector('#error-button')

errorButton.addEventListener('click', () => {
    let light = 'error'
    trafficLight(light)
})




function trafficLight(light) {
    let h1Element = document.querySelector('h1')
    console.dir(h1Element.textContent)
    console.dir(h1Element.style.backgroundColor)
    console.dir(h1Element.style.color)
    
    h1Element.style.color = 'white'
    h1Element.style.textAlign = 'center'
    
    switch (light) {
        case 'green':
            h1Element.textContent = 'galima eiti'
            h1Element.style.backgroundColor = 'green'
            break
        case 'yellow':
            h1Element.textContent = 'pasiruosk'
            h1Element.style.backgroundColor = 'yellow'
            break
        case 'red':
            h1Element.textContent = 'STOP'
            h1Element.style.backgroundColor = 'red'
            break
        default:
            h1Element.textContent = 'sugedo'
            h1Element.style.backgroundColor = 'black'
    }
}