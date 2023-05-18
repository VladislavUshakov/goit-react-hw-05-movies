import ClipLoader from 'react-spinners/ClipLoader';
import { CSSProperties } from 'react';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
};

const Spiner = () => (
  <ClipLoader
    cssOverride={override}
    size={70}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
);

export default Spiner;
