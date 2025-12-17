import { BarLoader } from 'react-spinners';

const Spinner = ({ color = 'blue', size = '150' }) => {
  const override = {
    display: 'block',
    margin: '0 auto 50px auto',
  };

  return (
    <BarLoader
      color={color}
      size={size}
      cssOverride={override}
      aria-label='Loading...'
    />
  );
};

export default Spinner;
