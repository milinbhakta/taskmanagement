import { Loader } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const LoadingPage = () => {
  return (
    <div
      className="loading-page"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Loader active inline="centered" size="massive">
        Loading...
      </Loader>
    </div>
  );
};

export default LoadingPage;
