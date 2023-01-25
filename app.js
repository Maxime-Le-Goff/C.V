/* Sélection des éléments HTML */
const link = document.getElementById('link')
const burger = document.getElementById('burger')
const ul = document.querySelector('ul')

link.addEventListener('click', function(e) {
  e.preventDefault()
  burger.classList.toggle('open')
  ul.classList.toggle('open')
})

const bars = document.querySelectorAll('.progress');
bars.forEach(item =>{
  let value = item.id;
  let contador = 0;
  let interval = setInterval(function(){
    item.style.width = contador + "%";
    if(contador == value){
      clearInterval(interval);
    }
    contador++;
  },8);
})

const text = document.querySelector(".sec-text");
console.log(text);
const textLoad = () => {
  setTimeout(() => {
    text.textContent = 'Rigoureux';
  },0);
  setTimeout(() => {
    text.textContent = 'Passionné';
  },4000);
  setTimeout(() => {
    text.textContent = 'Joyeux';
  },8000);
  setTimeout(() => {
    text.textContent = 'Bonne Humeur';
  },12000);
}
textLoad();
setInterval(textLoad,16000);