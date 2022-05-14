import TheMovieDbSource from '../../data/themoviedb-source';

const NowPlaying = {
    async render() {
      return `
        <h2>Now Playing Page</h2>
      `;
    },

    async afterRender() {
      // Fungsi ini akan dipanggil setelah render().
      const movies = await TheMovieDbSource.nowPlayingMovies();
      console.info(movies);
    },
  };

  export default NowPlaying;
