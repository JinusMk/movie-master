import { Text } from 'common/components/Text';
import styles from './MoviePlot.module.scss';
import PropTypes from 'prop-types';

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
MoviePlot.propTypes = {
  plot: PropTypes.string,
};
export default MoviePlot;
