/* Sélection des éléments HTML */
const link = document.getElementById('link')
const burger = document.getElementById('burger')
const ul = document.querySelector('ul')
window.addEventListener('DOMContentLoaded',progressBar)

link.addEventListener('click', function(e) {
  e.preventDefault()
  burger.classList.toggle('open')
  ul.classList.toggle('open')
})
function progressBar(){
  console.log('oui')
  let pb = document.getElementById('pb-rigueur');
  console.log(pb)
  pb.style.transition= "width 5s ease-in-out 0s"
}
// function pbclick(e){
//   var elem = document.getElementById("pb-rigueur");
//   var width = 1;
//   var id = setInterval(frame, 10);
//   function frame() {
//     if (width >= 100) {
//       clearInterval(id);
//     } else {
//       width++;
//       elem.style.width = width + '%';
// }
//   }
// }