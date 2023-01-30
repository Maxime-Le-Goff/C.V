const card = document.querySelector('.Card_card');
const itemCard = document.querySelector('.Card_add i');
console.log(itemCard);
document.querySelector('.Card_add').addEventListener('click',() => {
  card.classList.toggle('Card_on');
  console.log(itemCard);
  if(itemCard.classList.contains('fa-minus')){
    itemCard.classList.replace('fa-minus','fa-plus');
  }
  else{
    itemCard.classList.replace('fa-plus','fa-minus');
  }
})