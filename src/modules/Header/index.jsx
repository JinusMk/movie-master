import styles from './Header.module.scss'
import { Text } from '/src/common/UI/Text'

const Header = () => {
    return <div className={styles.headerWrapper}>
        <Text>Movie Master</Text>
    </div>
}
export default Header