import { Icon, icons } from 'common/components/Icon';
import { Text } from 'common/components/Text';
import useLogic from './DetailsHeader.logic';
import styles from './DetailsHeader.module.scss';

const DetailsHeader = () => {
  const { onNavigateBack } = useLogic();
  return (
    <div className={styles.detailsHeaderWrapper} onClick={onNavigateBack} role="presentation">
      <Icon source={icons.backArrow} />
      <Text fontSize={Text.fontSize.p16} fontWeight={500} className={styles.text}>
        Back to home
      </Text>
    </div>
  );
};
export default DetailsHeader;
