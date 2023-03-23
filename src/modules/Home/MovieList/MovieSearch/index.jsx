import { Input } from '../../../../common/UI/Input'
import styles from './MovieSearch.module.scss'
import { memo } from 'react'

const MovieSearch = () => {
    return <div className={styles.movieSearchWrapper}>
        <Input placeholder="Search for movies..."/>
    </div>
}
export default memo(MovieSearch)