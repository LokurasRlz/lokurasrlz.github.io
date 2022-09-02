import { getLike, addLike } from './likes.js';
import movieCounter from './itemCounter.js';
import displayMovieComments from './comment.js';


const movies = document.querySelector('.main');
const displayMovies = [];
const popShow = async (movieList, appId) => {
  const APIlikes = await getLike();
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
    span.classList.add(`like2`);
    const apiLike =
      APIlikes.filter((like) => like.item_id === item.id.toString())[0]
        ?.likes || 0;
    span.innerText = `${apiLike} likes`;
    const like = document.createElement('i');
    like.className = 'fas fa-heart';
    likes.append(like, span);
    details.append(likes);
    like.addEventListener(
      'click',
      async (e) => {
        const number = e.target.parentNode.lastChild.textContent.split(' ');
        e.target.parentNode.lastChild.innerHTML = `${
          parseInt(number[0], 10) + 1
        } likes`;
        await addLike(`${item.id}`);
      },
      { once: true }
    );
    const totalMovies = movieCounter('https://api.tvmaze.com/shows');
    totalMovies.then((total) => {
      const movies = document.getElementById('movies');
      movies.innerHTML = `Movies ${total}`;
    });
    eachMovie.append(
      img,
      details,
      buttons,
      likes,
      commentButton,
      reserveButton
    );
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