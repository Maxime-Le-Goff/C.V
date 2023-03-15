const text = document.querySelector(".sec-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = 'RIGOUREUX';
  },0);
  setTimeout(() => {
    text.textContent = 'PASSIONNE';
  },3000);
  setTimeout(() => {
    text.textContent = 'CURIEUX';
  },6000);
}
textLoad();
setInterval(textLoad,9000);

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



const card = document.querySelector('.Card_card');
const itemCard = document.querySelector('.Card_add i');
document.querySelector('.Card_add').addEventListener('click',() => {
  card.classList.toggle('Card_on');
  if(itemCard.classList.contains('fa-minus')){
    itemCard.classList.replace('fa-minus','fa-plus');
  }
  else{
    itemCard.classList.replace('fa-plus','fa-minus');
  }
})