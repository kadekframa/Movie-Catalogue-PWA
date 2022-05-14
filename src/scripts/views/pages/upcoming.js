import TheMovieDbSource from '../../data/themoviedb-source';

const Upcoming = {
    async render() {
      return `
        <h2>Upcoming page</h2>
      `;
    },

    async afterRender() {
      // Fungsi ini akan dipanggil setelah render().
      const movies = await TheMovieDbSource.upComingMovies();
      console.info(movies);
    },
  };

  export default Upcoming;
