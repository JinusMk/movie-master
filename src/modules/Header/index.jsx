import styles from './Header.module.scss';
import { memo } from 'react';
import { Text } from 'common/components/Text';

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <Text className={styles.title} fontSize={Text.fontSize.p24} fontWeight={700}>
        Movie Master
      </Text>
    </div>
  );
};
export default memo(Header);
