import type { FC } from 'react';
import AbstractBackground from './AbstractBackground';

const App: FC = () => {
  return <div className={'w-full min-h-screen overflow-hidden bg-buttery-white'}>
    <AbstractBackground />
  </div>;
};

export default App;
