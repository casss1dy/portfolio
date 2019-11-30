const body = document.querySelector('body');
const frame = document.querySelector('.frame');

document.querySelector('.btn-mobile').addEventListener('click', () => {
  let scrollTop = window.pageYOffset;
  console.log(scrollTop);
  frame.classList.toggle('mobile');
  body.classList.toggle('backdrop');
  window.scrollTo(0, scrollTop + 'px');
});
