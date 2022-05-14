import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const Upcoming = {
    async render() {
      return `
        <div class="content">
            <h2>Upcoming in Cinema. Stay Tuned !!!</h2>
            <div id="movies" class="movies">
                
            </div>
        </div>
      `;
    },

    async afterRender() {
      // Fungsi ini akan dipanggil setelah render().
      const movies = await TheMovieDbSource.upComingMovies();
      const moviesContainer = document.querySelector('#movies');
      movies.forEach((movie) => {
          moviesContainer.innerHTML += createMovieItemTemplate(movie);
      });
    },
  };

  export default Upcoming;
