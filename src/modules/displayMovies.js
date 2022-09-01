import { getLike, addLike } from './likes.js';
import movieCounter from './itemCounter.js';
import { displayMovieComments } from './commenttest.js';

const movies = document.querySelector('.main');
const displayMovies = [];

const popShow = async (movieList, appId) => {
  movies.innerHTML = '';
  movieList.forEach((item) => {
    const eachMovie = document.createElement('div');
    eachMovie.className = 'movie';
    eachMovie.id = `${item.id}`;
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
    commentButton.addEventListener('click', () => {
      displayMovieComments(item, appId);
    });
    const reserveButton = document.createElement('button');
    reserveButton.type = 'button';
    reserveButton.innerHTML = 'Reservations';
    reserveButton.className = 'reserv';
    const likes = document.createElement('div');
    likes.classList.add('likes');
    likes.id = `${item.id}`;
    const span = document.createElement('span');
    const like = document.createElement('i');
    like.className = 'fas fa-heart';
    likes.append(like, span);
    details.append(likes);
    like.addEventListener('click', () => {
      addLike(`${item.id}`, appId);
      const number = like.parentNode.lastChild.textContent.split(' ');
      like.parentNode.lastChild.innerHTML = `${Number(number[0]) + 1} likes`;
    });
    const likeSum = document.querySelectorAll('span');
    getLike().then((id) => {
      for (let i = 0; i < id.length; i += 1) {
        if (id[i].likes == undefined) {
          return;
        } 
        likeSum[i].textContent = `${id[i].likes} likes`;
      } 
    });
    const totalMovies = movieCounter('https://api.tvmaze.com/shows');
    totalMovies.then(
      (total) => {
        const movies = document.getElementById('movies');
        movies.innerHTML = `Movies ${total}`;
      },
    );
    eachMovie.append(img, details, buttons, likes, commentButton, reserveButton);
    movies.append(eachMovie);
  });
  getLike(appId);
};

export default async function getMovies() {
  fetch('https://api.tvmaze.com/shows')
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < 239; i += 1) {
        displayMovies.push(data[i]);
      }
      popShow(displayMovies);
    });
}