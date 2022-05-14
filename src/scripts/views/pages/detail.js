import TheMovieDbSource from '../../data/themoviedb-source';

const Detail = {
    async render() {
      return `
        <h2>Detail Page</h2>
      `;
    },

    async afterRender() {
      // Fungsi ini akan dipanggil setelah render().
      const movies = await TheMovieDbSource.detailMovies();
      console.info(movies);
    },
  };

  export default Detail;
