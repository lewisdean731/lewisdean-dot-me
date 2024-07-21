import type { FC } from 'react';
import AbstractBackground from './AbstractBackground';
import Panel from './Panel';

const App: FC = () => {
  return (
    <div className={'w-full min-h-screen'}>
      <AbstractBackground bgClassName={'bg-buttery-white'} />
      <Panel className={'mt-0 pt-3 border-none bg-buttery-white-50/75 font-mono'}>
        <h1 className="text-6xl">Lewis Dean</h1>
        <h1 className="m-1 text-2xl">Software Engineer</h1>
      </Panel>
    </div>
  );
};

export default App;
