import { Input } from '../../../../common/UI/Input';
import styles from './MovieSearch.module.scss';
import { memo } from 'react';
import icons from 'common/assets/icons';
import useLogic from './MovieSearch.logic';
import { Dropdown } from 'common/UI/Dropdown';
import { DropdownContent } from 'common/UI/Dropdown/DropdownContent';
import { DropdownItem } from 'common/UI/Dropdown/DropdownItem';
import SuggestionItem from '../SuggestionItem';
import { IntersectionLoader } from 'common/UI/IntersectionLoader';
import { Loading } from 'common/UI/Loading';
import { Text } from 'common/UI/Text';

const MovieSearch = () => {
  const {
    movieListSearch,
    suggestions,
    suggestionsLoader,
    handleMovieSearchChange,
    showLoadMore,
    handleLoadeMore,
    openSuggestions,
    handleClearSearch,
    handleKeyDown,
    ref,
  } = useLogic();

  const empty = suggestionsLoader ? <Loading /> : <Text>No results found</Text>;
  const suggestionsList = (
    <>
      {suggestions?.map((suggestion) => (
        <DropdownItem className={styles.dropdownItem} key={suggestion?.id}>
          <SuggestionItem
            id={suggestion?.id}
            title={suggestion?.title}
            year={suggestion?.year}
            poster={suggestion?.poster}
          />
        </DropdownItem>
      ))}
      {showLoadMore && (
        <IntersectionLoader onChange={handleLoadeMore} isLoading={suggestionsLoader} />
      )}
    </>
  );
  return (
    <div className={styles.movieSearchWrapper} ref={ref}>
      <Dropdown>
        <Input
          placeholder="Search for movies..."
          leftIcon={icons.search}
          leftIconSize="var(--p20)"
          rightIcon={movieListSearch?.length ? icons.close : null}
          rightIconAction={handleClearSearch}
          value={movieListSearch}
          onChange={(e) => handleMovieSearchChange(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <DropdownContent customOpen={openSuggestions} className={styles.suggestionWrapper}>
          {suggestions?.length > 0 ? suggestionsList : empty}
        </DropdownContent>
      </Dropdown>
    </div>
  );
};
export default memo(MovieSearch);
