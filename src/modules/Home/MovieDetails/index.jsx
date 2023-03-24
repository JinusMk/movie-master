import { ContentHolder } from 'common/UI/ContentHolder';
import { Loading } from 'common/UI/Loading';
import Header from 'modules/Header';
import DetailsHeader from './DetailsHeader';
import MovieCastAndCrew from './MovieCastAndCrew';
import useLogic from './MovieDetails.logic';
import styles from './MovieDetails.module.scss';
import MovieOverview from './MovieOverview';
import MoviePlot from './MoviePlot';

const MovieDetails = () => {
  const { movieDetails, movieDetailsLoader } = useLogic();
  const content = (
    <>
      <MovieOverview
        title={movieDetails?.title}
        poster={movieDetails?.poster}
        year={movieDetails?.year}
        genre={movieDetails?.genre}
        runtime={movieDetails?.runtime}
        country={movieDetails?.country}
        language={movieDetails?.language}
        imdbRating={movieDetails?.imdbRating}
        imdbVotes={movieDetails?.imdbVotes}
      />
      <MoviePlot plot={movieDetails?.plot} />
      <MovieCastAndCrew
        actors={movieDetails?.actors}
        director={movieDetails?.director}
        writer={movieDetails?.writer}
      />
    </>
  );
  return (
    <ContentHolder header={<Header />}>
      <div className={styles.movieDetailsWrapper}>
        <DetailsHeader />
        {movieDetailsLoader ? <Loading /> : content}
      </div>
    </ContentHolder>
  );
};
export default MovieDetails;
