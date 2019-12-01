const body = document.querySelector('body');
const frame = document.querySelector('.frame');

document.querySelector('.btn-mobile').addEventListener('click', (e) => {
  frame.classList.toggle('mobile');
  body.classList.toggle('backdrop');
  e.target.textContent = frame.classList.contains('mobile') ? 'Desktop' : 'Mobile';
});
