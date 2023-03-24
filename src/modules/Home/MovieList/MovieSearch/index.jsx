import { Input } from 'common/components/Input';
import styles from './MovieSearch.module.scss';
import { memo } from 'react';
import icons from 'common/assets/icons';
import useLogic from './MovieSearch.logic';
import { Dropdown } from 'common/components/Dropdown';
import { DropdownContent } from 'common/components/Dropdown/DropdownContent';
import { DropdownItem } from 'common/components/Dropdown/DropdownItem';
import SuggestionItem from 'modules/Home/components/SuggestionItem';
import { IntersectionLoader } from 'common/components/IntersectionLoader';
import { Loading } from 'common/components/Loading';
import { Text } from 'common/components/Text';

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
          placeholder="Search for movies and click Enter..."
          leftIcon={icons.search}
          leftIconSize="var(--p20)"
          rightIcon={movieListSearch?.length ? icons.close : null}
          rightIconAction={handleClearSearch}
          value={movieListSearch ?? ''}
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
