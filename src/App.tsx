import type { FC } from 'react';
import AbstractBackground from './AbstractBackground';
import Panel from './Panel';

const App: FC = () => {
  return (
    <div className={'w-full min-h-screen'}>
      <AbstractBackground className={'bg-buttery-white blur-xs'} />
      <Panel className={'!w-fit mt-0 pt-3 border-0 !bg-buttery-white-50/75 font-mono'}>
        <h1 className='text-6xl'>Lewis Dean</h1>
        <h1 className='m-1 text-2xl'>{'>'} Software Engineer</h1>
      </Panel>
      <br />
      <br />
      <Panel className='opacity-90'>
        <h2 className='text-2xl'>About Me</h2>
        <p className='mt-2'>
          I am a hardworking and determined individual, who is good at problem
          solving and always does their best to complete the given task. I have
          worked at Raytheon UK for the last 3 years and developed a wide range
          of skills both technically and socially. I work well with colleagues,
          both as a team member or team leader, inside and out of the office. In
          my spare time I have fun applying my skills in asset development to
          create 3D models, regularly compete in my local 5-a-side football
          league, and I am currently learning the Unity Engine.
        </p>
      </Panel>
      <br />
      <Panel className='opacity-90'>
        <h2 className='text-2xl'>Experience</h2>
        <p className='mt-2'>Software Engineer | 2021 - Present | Raytheon UK</p>
        <ul className='list-disc list-inside text-sm mt-2'>
          <li>
            Full-Stack role focusing on React, Typescript and microservices
          </li>
          <li>
            Led design and implementation of new innovative solutions for
            customers
          </li>
          <li>
            Trusted to lead colleagues in my team and to support others across
            the business function with technical challenges and knowledge
            sharing
          </li>
          <li>
            Liaised with BAs and customers directly to better understand their
            requirements and solve the unique challenges involved in meeting
            them
          </li>
        </ul>
        <p className='mt-2'>
          Undergraduate Developer | Jul. 2019 - Sept. 2020 | UKCloud
        </p>
        <ul className='list-disc list-inside text-sm mt-2'>
          <li>
            Responsible for maintaining the organisation's existing codebase as
            well as owning solutions to new technical challenges throughout the
            entire SDLC
          </li>
          <li>
            Gained invaluable hands-on experience with both frontend and backend
            software projects including products such as RabbitMQ, Jenkins and
            OpenShift
          </li>
          <li>
            Practiced agile methodologies in a professional environment and took
            lead in scrum planning and retro activities
          </li>
        </ul>
      </Panel>
      <br />
      <Panel className='opacity-90'>
        <h2 className='text-2xl'>Get in Contact</h2>
      </Panel>
    </div>
  );
};

export default App;
