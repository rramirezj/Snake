// Constantes iniciales

const size = 20
const snake = [0, 1, 2]

const box = document.getElementById('box');

// Crear el grid o tablero

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        const block =  document.createElement('div')
        box.appendChild(block)
    }   
}

// Dibujar la snake

const blocks = box.getElementsByTagName('div');
snake.forEach((index) => blocks[index].style = 'background-color: yellow');

setInterval(() => {
    const tail = snake.shift()
    blocks[tail].style = ''
    const newHead = snake[snake.length - 1] + 1
    snake.push(newHead)
    blocks[newHead].style = 'background-color: yellow'
}, 500)