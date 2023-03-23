import { Text } from 'common/UI/Text';
import styles from './MoviePlot.module.scss';

const MoviePlot = ({ plot }) => {
  return (
    <div className={styles.moviePlotWrapper}>
      <Text fontSize={Text.fontSize.p24} fontWeight={700} className={styles.heading}>
        Plot
      </Text>
      <Text className={styles.plot} fontSize={Text.fontSize.p16}>
        {plot}
      </Text>
    </div>
  );
};
export default MoviePlot;
