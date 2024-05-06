
const slides = document.querySelector('.slides');

const li = slides.querySelectorAll('li');



li.forEach((item) => {
item.addEventListener('click', function (e) {
removeClasses(li)
item.classlist.add('bn');
e.preventDefault();});
});
function removeClasses (obj) {
obj.forEach((ite) =>{
ite.classList.remove('bn');
  });};
