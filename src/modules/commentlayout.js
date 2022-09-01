import movie from './displayMovies.js';


import { postComment, getComments } from './comment.js';


const commentPopup = (id) => {
  const body = document.querySelector('body');
  const popupSection = document.createElement('section');
  popupSection.className = 'popupSection';
  const content = document.createElement('div');
  content.className = 'popup-content';
  const title = document.createElement('h1');
  title.className = 'popup-title';
  const close = document.createElement('button');
  close.className = 'close-popup';
  const image = document.createElement('img');
  image.className = 'popup-img';
  const divider = document.createElement('div');
  divider.className = 'popup-divider';
  const commentUl = document.createElement('ul');
  commentUl.className = 'popup-comment-list';
  const commentForm = document.createElement('form');
  commentForm.className = 'popup-form';
  const formh2 = document.createElement('h2');
  formh2.className = 'popup-subtilte';
  formh2.setAttribute('id', 'popup-subtitle');
  const nameINput = document.createElement('input');
  nameINput.className = 'input-name';
  nameINput.setAttribute('name', 'name');
  nameINput.setAttribute('placeholder', 'Name');
  nameINput.setAttribute('type', 'text');
  nameINput.setAttribute('maxlength', '30');
  const commentInput = document.createElement('textarea');
  commentInput.className = 'inputMsg';
  commentInput.setAttribute('name', 'message');
  commentInput.setAttribute('placeholder', 'Comments');
  commentInput.setAttribute('type', 'text');
  commentInput.setAttribute('maxlength', '300');
  const btnInput = document.createElement('button');
  btnInput.setAttribute('type', 'submit');
  btnInput.className = 'commentSubmit';



  body.appendChild(popupSection);
  popupSection.appendChild(content);
  content.appendChild(title);
  content.appendChild(close);
  content.appendChild(image);
  content.appendChild(divider);
  content.appendChild(commentUl);
  content.appendChild(commentForm);
  commentForm.appendChild(formh2);
  commentForm.appendChild(nameINput);
  commentForm.appendChild(commentInput);
  commentForm.appendChild(btnInput);


  const popupData = async () => {
    fetch('https://api.tvmaze.com/shows')
      .then((res) => res.json())
      .then((data) => {

        document.querySelector('.popup-img').src = movie.image.medium;
        document.querySelector('#popup-subtitle').textContent = 'Add comment';
        document.querySelector('.commentSubmit').textContent = 'submit';
        document.querySelector('.close-popup').textContent = 'X';

      });

  }

  popupData();


  btnInput.addEventListener('submit', (e) => {
    e.preventDefault();
    postComment(id, nameINput.value, commentInput.value);
    commentUl.innerHTML = '';
    setTimeout(() => {
      updateComments(id);
    }, '500');
    nameINput.value = '';
    commentInput.value = '';
  });



  close.addEventListener('click', (e) => {
    e.preventDefault();
    commentPopup.remove();
  });
  window.addEventListener('click', (e) => {
    if (e.target === commentPopup) {
      commentPopup.remove();
    }
  });
};

export default commentPopup;