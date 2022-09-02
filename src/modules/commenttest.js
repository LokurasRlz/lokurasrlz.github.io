import * as CIAPI from './commentapi.js';

const modalBox = document.querySelector('.popup');
const modalCloseBtn = document.querySelector('#closepop');
const commentForm = document.querySelector('#form__comment');
const formMessageCom = document.querySelector('#form__message-com');
let timerId = '';
let newID = '';

const arrIntoString = (arr) => {
  let str = '';
  arr.forEach((el) => {
    str += `${el} | `;
  });
  return str;
};

const buildMovieDescription = (data) => {
  const movieDetails = document.querySelector('.movie__details');
  movieDetails.setAttribute('data-movieid', data.id);
  movieDetails.innerHTML = `<img src="${data.image.medium}" alt="${data.name} movie image" class="popup-img">
        <h2 class ="popup-title">${data.name}</h2>
        <ul class="movie__more">
          <li>
            <span class="item-category">Genre:</span>
            <p>${arrIntoString(data.genres)}</p>
          </li>
          <li>
            <span class="item-category">Ended:</span>
            <p>${data.ended}</p>
          </li>
          <li>
            <span class="item-category">Rating:</span>
            <p>${data.rating.average}</p>
          </li>
        </ul>
        ${data.summary}`;
};

const buildMovieComments = (arr) => {
  const movieComments = document.querySelector('.movie__comments');
  movieComments.innerHTML = '';
  const title = document.createElement('h3');
  title.textContent = CIAPI.countComments(arr);
  movieComments.appendChild(title);
  const commentList = document.createElement('ul');
  commentList.classList.add('comments__list');
  arr.forEach((comment) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = ` <div class="owner">
              <span>${comment.creation_date}</span>
              <span class="item-name">${comment.username}:</span>
            </div>
            <div class="comment">
              <p class="item-comment">${comment.comment}</p>
            </div>`;
    commentList.appendChild(listItem);
  });
  movieComments.appendChild(commentList);
};

const closeBox = (ident) => {
  const elDom = document.querySelectorAll(`.${ident}`);
  elDom.forEach((el) => {
    el.classList.add('box__hide');
  });
};

const displayMovieComments = (movie, appID) => {
  buildMovieDescription(movie);
  newID = appID;
  CIAPI.getComments(movie.id, appID).then((list) => {
    buildMovieComments(list);
    closeBox('reservationk');
    modalBox.classList.add('popup-display');
  });
};

modalCloseBtn.addEventListener('click', () => {
  const comBox = document.querySelectorAll('.commentk');
  comBox.forEach((el) => {
    el.classList.remove('box__hide');
  });
  const resBox = document.querySelectorAll('.reservationk');
  resBox.forEach((el) => {
    el.classList.remove('box__hide');
  });
  modalBox.classList.remove('popup-display');
});

const displayMessage = (eldom, msg) => {
  clearTimeout(timerId);
  if (msg) {
    eldom.textContent = msg;
    eldom.classList.add('error-message');
  }
  eldom.classList.add('visible');
  timerId = setTimeout(() => {
    eldom.classList.remove('error-message', 'visible');
  }, 10000);
};

const validString = (str) => {
  if (str.match(/^[a-zA-Z0-9À-ÿ\u00f1\u00d1\u00E0\u00FC_\- ]{1,30}$/)) return true;
  return false;
};

const validFormComment = (name, comment) => {
  name.value = name.value.trim();
  comment.value = comment.value.trim();
  if (!validString(name.value)) {
    name.focus();
    displayMessage(formMessageCom, 'Name field only allows alphanumeric, hyphens, underscores, and max 30 characters.');
    return false;
  }
  if (comment.value === '' || comment.value.length > 250) {
    comment.focus();
    displayMessage(formMessageCom, 'Insights field allows 1 to 250 characters.');
    return false;
  }
  return true;
};


const sendComment = (appID) => {
  const name = document.querySelector('#inp__username');
  const comment = document.querySelector('#inp__comments');
  const movieId = document.querySelector('.movie__details').getAttribute('data-movieId');

  if (validFormComment(name, comment)) {
    CIAPI.addComment(movieId, name.value, comment.value, appID).then((ans) => {
      if (ans === 'Created') {
        CIAPI.getComments(movieId, appID).then((list) => {
          buildMovieComments(list);
        });
        name.value = '';
        name.focus();
        comment.value = '';
        formMessageCom.textContent = 'Comment sent successfully';
        displayMessage(formMessageCom);
      } else {
        displayMessage(formMessageCom, 'Comments are not available for now. Try again later.');
      }
    });
  }
};


commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  sendComment(newID);
});


export { displayMovieComments };