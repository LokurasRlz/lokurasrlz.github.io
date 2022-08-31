import { getLike, setLike } from './likes.js';

export default async function getMovies() {
  fetch('https://api.tvmaze.com/shows')
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < 20; i += 1) {
        displayMovies.push(data[i]);
      }
      console.log(displayMovies);
      popShow(displayMovies);
    });
}

const movies = document.querySelector('.main');
const displayMovies = [];

const popShow = async (movieList, appId) => {
  movies.innerHTML = '';
  movieList.forEach((item) => {
    const eachMovie = document.createElement('div');
    eachMovie.className = 'movie';
    eachMovie.id = `main-${item.id}`;
    const img = document.createElement('img');
    img.className = 'movie-image';
    img.src = item.image.medium;
    const details = document.createElement('h1');
    details.className = 'movie-title';
    details.innerHTML = `${item.name}`;
    const buttons = document.createElement('div');
    buttons.className = 'buttons';
    const commentButton = document.createElement('button');
    commentButton.type = 'button';
    commentButton.innerHTML = 'Comments';
    commentButton.className = 'comment';
    const reserveButton = document.createElement('button');
    reserveButton.type = 'button';
    reserveButton.innerHTML = 'Reservations';
    reserveButton.className = 'reserv';
    const likes = document.createElement('div');
    likes.className = 'likes';
    const span = document.createElement('span');
    const like = document.createElement('i');
    like.className = 'fas fa-heart';
    likes.append(like, span);
    details.append(likes);
    like.addEventListener('click', () => {
      setLike(`main-${item.id}`, appId);
      const number = like.parentNode.lastChild.textContent.split(' ');
      like.parentNode.lastChild.innerHTML = `${Number(number[0]) + 1} likes`;
    });
    eachMovie.append(img, details, buttons, likes, commentButton, reserveButton);
    movies.append(eachMovie);
  });
  getLike(appId);
};

