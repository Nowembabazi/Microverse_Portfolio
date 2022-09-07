const menuItem = document.querySelector('.mobile-item');
const closeMobileItems = document.querySelectorAll('.closeMenu');
const displayMobileMenu = () => {
  menuItem.style.display = 'block';
};
const closeMobileMenu = () => {
  menuItem.style.display = 'none';
};
document.querySelector('.openMenu').addEventListener('click', displayMobileMenu);
closeMobileItems.forEach(((element) => element.addEventListener('click', closeMobileMenu)));
/* Project Detail objects */

/* Contact Form validation */
const regex = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$';
document.querySelector('#form').addEventListener('submit', (e) => {
  for (let i = 0; i < e.target.length; i += 1) {
    if (e.target[i].classList.contains('form-control')) {
      if (e.target[i].value === '') {
        // e.target[i].nextElementSibling.style.display = 'block';
        e.target[i].parentElement.nextElementSibling.innerText = `Please enter your ${e.target[i].getAttribute('placeholder')}`;
        e.target[i].parentElement.nextElementSibling.style.color = 'red';
        e.preventDefault();
      } else if (e.target[i].type === 'input' && e.target[i].value.length > e.target[i].getAttribute('maxlength')) {
        e.target[i].parentElement.nextElementSibling.innerText = `The maximum number of character is ${e.target[i].getAttribute('maxlength')}`;
        e.target[i].parentElement.nextElementSibling.style.color = 'red';
        e.preventDefault();
      } else if (e.target[i].type === 'email' && e.target[i].value !== e.target[1].value.toLowerCase()) {
        e.target[i].parentElement.nextElementSibling.innerText = 'Please enter your email in lowercase';
        e.target[i].parentElement.nextElementSibling.style.color = 'red';
        e.preventDefault();
      } else if (e.target[i].type === 'email' && regex.test(e.target[i].value) !== e.target[i].value) {
        e.target[i].parentElement.nextElementSibling.textContent = 'Please enter a valid email address';
        e.target[i].parentElement.nextElementSibling.style.color = 'red';
        e.preventDefault();
      } else {
        e.target[i].parentElement.nextElementSibling.style.display = 'none';
        e.target[i].parentElement.nextElementSibling.innerText = '';
      }
    }

  }
});
