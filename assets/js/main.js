// project description for mobile
if (document.documentElement.clientWidth < 768) {
  document.querySelectorAll('.slider-item__name').forEach(item => item.addEventListener('click', (e) => {
    e.target.nextElementSibling.classList.toggle('show');
    e.target.classList.toggle('opened');
  }));
}

// education block
const education_block = document.querySelector('.education');
const education_block_header = document.querySelector('.education h2');
education_block_header.addEventListener('click', (e) => {
  e.target.nextElementSibling.classList.toggle('d-none');
  education_block.classList.toggle('block');
  education_block_header.classList.toggle('opened');
});

// slider
const mySiema = new Siema({
  selector: '.slider__list',
  duration: 200,
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: true,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
});
document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());
