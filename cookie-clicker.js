let count = 0
let Button = document.querySelector('#button')
let h1Element = document.querySelector('#h1')

h1Element.style.color = 'black'

Button.addEventListener('click', () => {
    count = count + 1
    h1Element.textContent = count

    if(h1Element.textContent >= 500) {
        h1Element.style.color = 'white'
        h1Element.style.backgroundColor = '#8b00cc'
    } else if(h1Element.textContent >= 400) {
        h1Element.style.color = '#be33ff'
    } else if(h1Element.textContent >= 200){
        h1Element.style.color = '#cf66ff'
    } else if(h1Element.textContent >= 100) {
        h1Element.style.color = '#df99ff'
    }
})

