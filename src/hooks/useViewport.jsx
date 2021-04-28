import { useContext } from 'react';
import { viewportContext } from '../contexts/viewport';

const useViewport = () => {
  const { width } = useContext(viewportContext);

  return { width };
};

export default useViewport;
