const movieListMapper = (data) =>
  data?.map(({ imdbID, Year, Title, Poster }) => ({
    imdbID,
    title: Title,
    year: Year,
    poster: Poster,
  }));

const paginationMapper = ({ page, totalResults }) => ({
  currentPage: page,
  totalPages: Math.floor(Number(totalResults ?? 0) / 10),
});

const movieDetailsMapper = ({
  Actors,
  Awards,
  Country,
  Director,
  Genre,
  Language,
  Plot,
  Poster,
  Ratings,
  Runtime,
  Title,
  Writer,
  Year,
  imdbID,
  imdbRating,
  imdbVotes,
}) => ({
  actors: Actors?.split(','),
  awards: Awards,
  country: Country,
  director: Director,
  genre: Genre,
  language: Language,
  plot: Plot,
  poster: Poster,
  ratings: Ratings,
  runtime: Runtime,
  title: Title,
  writer: Writer,
  year: Year,
  imdbID,
  imdbRating,
  imdbVotes,
});

export { movieListMapper, movieDetailsMapper, paginationMapper };
