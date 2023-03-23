import Header from '../../Header'
import useLogic from './MovieList.logic'
import styles from './MovieList.module.scss'
import { ContentHolder } from '../../../common/UI/ContentHolder'
import MovieCard from './MovieCard'
import MovieSearch from './MovieSearch'

const MovieList = () => {
    const { movieList, movieListLoader } = useLogic()
    const empty = movieListLoader ? 'Loading...' : null
    
    return <ContentHolder header={<Header/>}>
        <MovieSearch />
        <div className={styles.movieListWrapper}>
            {movieList?.length ? movieList?.map(movie => <MovieCard key={movie?.imdbID} movie={movie}/>) : empty}
        </div>
    </ContentHolder>
}
export default MovieList