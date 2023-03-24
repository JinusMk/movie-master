import styles from './Header.module.scss';
import { memo } from 'react';
import { Text } from 'common/components/Text';
import { Icon, icons } from 'common/components/Icon';

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <Icon source={icons.logo} size="2rem" className={styles.logo} />
      <Text className={styles.title} fontSize={Text.fontSize.p24} fontWeight={700}>
        Movie Master
      </Text>
    </div>
  );
};
export default memo(Header);
