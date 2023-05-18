import Spiner from 'components/Spiner';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Cast = lazy(() => import('components/Cast'));
const MovieCard = lazy(() => import('components/MovieCard'));
const Reviews = lazy(() => import('components/Reviews'));
const SharedLayout = lazy(() => import('components/SharedLayout'));
const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => (
  <>
    <Suspense fallback={<Spiner />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieCard />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  </>
);

export default UserRoutes;
