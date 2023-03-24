import routes from './lib/config/routes';
import { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.module.scss';
import MovieList from 'modules/Home/MovieList';

const MovieDetails = lazy(() => import('./modules/Home/MovieDetails'));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path={routes.MOVIE_LIST} element={<MovieList />} />
        <Suspense fallback="Loading">
          <Route exact path={routes.MOVIE_DETAILS} element={<MovieDetails />} />
        </Suspense>
      </Routes>
    </Router>
  );
};
export default App;
