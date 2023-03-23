const movieListMapper = (data) =>
  data?.map(({ imdbID, Year, Type, Title, Poster }) => ({
    imdbID,
    title: Title,
    type: Type,
    year: Year,
    poster: Poster,
  }));

const paginationMapper = ({ page, totalResults }) => ({
  currentPage: page,
  totalPages: Math.floor(Number(totalResults ?? 0)/ 10),
});
const movieDetailsMapper = (data) => data;

export { movieListMapper, movieDetailsMapper, paginationMapper };
