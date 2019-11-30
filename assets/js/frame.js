const body = document.querySelector('body');
const frame = document.querySelector('.frame');

document.querySelector('.btn-mobile').addEventListener('click', () => {
  frame.classList.toggle('mobile');
  body.classList.toggle('backdrop');
});
