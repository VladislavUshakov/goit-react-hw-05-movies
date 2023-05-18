import { NavLink } from 'react-router-dom';
import css from './UserNavigation.module.css';

const setColor = ({ isActive }) =>
  isActive
    ? {
        color: 'tomato',
      }
    : { color: 'black' };

const UserNavigation = () => (
  <nav className={css.navigation}>
    <NavLink to={'/'} style={setColor}>
      Home
    </NavLink>
    <NavLink to={'/movies'} style={setColor}>
      Movies
    </NavLink>
  </nav>
);

export default UserNavigation;
