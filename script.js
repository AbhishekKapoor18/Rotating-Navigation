const open = document.getElementById("open")
const close = document.getElementById("close")
const container = document.querySelector(".container")

//open.addEventListener('click', () => container.classList.add('show-nav'))

open.onclick = () => container.classList.add('show-nav') // Using evenTarget and onclick event instead of addEventListener

//close.addEventListener('click', () => container.classList.remove('show-nav'))

close.onclick = () => container.classList.remove('show-nav')


