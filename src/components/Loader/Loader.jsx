import { Blocks } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div style={{ margin: 'auto', width: 100 }}>
      <Blocks
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperClass="progress-bar-wrapper"
        borderColor="#F4442E"
        barColor="#1954d2"
      />
    </div>
  );
};

export default Loader;
