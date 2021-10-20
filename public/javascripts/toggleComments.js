const target = document.getElementsByClassName('target')
const button = document.getElementById('toggle')

button.addEventListener('click', () =>{
    target.classList.toggle('target')
})
