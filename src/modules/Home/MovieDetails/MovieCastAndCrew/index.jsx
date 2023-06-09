import { Text } from 'common/components/Text';
import styles from './MovieCastAndCrew.module.scss';
import PropTypes from 'prop-types';

const MovieCastAndCrew = ({ actors, director, writer }) => {
  const CrewItem = (label, name) => (
    <div className={styles.crewItem}>
      <Text className={styles.role} fontWeight={700} fontSize={Text.fontSize.p16}>
        {label}
      </Text>
      <Text className={styles.name} title={name} ellipsis fontSize={Text.fontSize.p16}>
        {name}
      </Text>
    </div>
  );
  return (
    <div className={styles.castAndCrewWrapper}>
      <div className={styles.cast}>
        <Text fontSize={Text.fontSize.p24} fontWeight={700} className={styles.heading}>
          Cast
        </Text>
        <div className={styles.actorsList}>
          {actors?.map((actor) => (
            <Text fontSize={Text.fontSize.p16} key={actor} className={styles.actorName}>
              {actor}
            </Text>
          ))}
        </div>
      </div>
      <div className={styles.crew}>
        <Text fontSize={Text.fontSize.p24} fontWeight={700} className={styles.heading}>
          Crew
        </Text>
        <div className={styles.crewWrapper}>
          {CrewItem('Director', director)}
          {CrewItem('Writer', writer)}
        </div>
      </div>
    </div>
  );
};
MovieCastAndCrew.propTypes = {
  actors: PropTypes.arrayOf(PropTypes.string),
  director: PropTypes.string,
  writer: PropTypes.string,
};
export default MovieCastAndCrew;
