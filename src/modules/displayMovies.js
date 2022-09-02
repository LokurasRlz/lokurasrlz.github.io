const movies = document.querySelector('.main');

const displayMovies = [];

const popShow = (arr) => {
  movies.innerHTML = '';
  arr.forEach((movie) => {
    const eachMovie = `<div class=movie id=${movie.id}>
           <h1 class="movie-title">${movie.name}</h1>
           <img class="movie-image" src=${movie.image.medium}>
           <div class= "buttons">
             <button class="comment btn-${movie.id}">Comment</button>
             <button class="reserv btn-${movie.id}">Reservations</button>
             <i class="fas fa-heart" data-id="${movie.id}"></i>
          </div>
        </div>`;
    movies.insertAdjacentHTML('beforeend', eachMovie);
  });
};

export default function getMovies() {
  fetch('https://api.tvmaze.com/shows')
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < 249; i += 1) {
        displayMovies.push(data[i]);
      }
      popShow(displayMovies);
    });
}