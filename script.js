'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const clsBtn = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');

// here we have used new thing that is classList which is used to add or remove the class attributes to perform the certain functions

// and we are also using the refactoring method which follows the dry principle

const closeModal = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  console.log('button clicked');
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', openModal);
}

clsBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !model.classList.contains('hidden')) {
    closeModal();
  }
});
