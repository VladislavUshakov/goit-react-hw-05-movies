import PropTypes from 'prop-types';
import css from './Container.module.css';

const Container = ({ children }) => (
  <div className={css.container}>{children}</div>
);

export default Container;

Container.propTypes = {
  children: PropTypes.node,
};
