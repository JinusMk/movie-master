import { Image } from '../../../../common/UI/Image'
import { Text } from '../../../../common/UI/Text'
import styles from './MovieCard.module.scss'

const MovieCard = ({movie}) => {
    const { imdbID, title, type, year, poster } = movie
    
    return <div className={styles.movieCardWrapper}>
        <Image url={poster} alt={title} className={styles.imageWrapper}/>
        <Text fontSize={Text.fontSize.p14} className={styles.title} fontWeight={500}>{title}</Text>
        <Text fontSize={Text.fontSize.p12} className={styles.year} fontWeight={500}>{year}</Text>
    </div>
}

export default MovieCard