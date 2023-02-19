import { Outlet } from 'react-router-dom';
import { StyledLink } from './SharedLayout.styled';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <div>
      <div>
        <nav>
          <StyledLink to="/" end>
            {' '}
            Home{' '}
          </StyledLink>
          <StyledLink to="/movies">Movie</StyledLink>
        </nav>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
