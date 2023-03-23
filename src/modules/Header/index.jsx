import styles from './Header.module.scss'
// import { Text } from '../../common/UI/Text'
import { Text } from 'common/UI/Text'

const Header = () => {
    return <div className={styles.headerWrapper}>
        <Text className={styles.title} fontSize={Text.fontSize.p24} fontWeight={700}>Movie Master</Text>
    </div>
}
export default Header