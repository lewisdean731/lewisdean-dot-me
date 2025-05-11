import React from 'react';
import type { FC } from 'react';
import AbstractBackground from './Components/AbstractBackground';
import Panel from './Components/Panel';
import Button from './Components/Button';
import IframeResizer from '@iframe-resizer/react';

const App: FC = () => {
  return (
    <div className={'min-h-screen w-full'}>
      <AbstractBackground className='bg-buttery-white' />
      <Panel className='bg-transparent pt-3 font-mono'>
        <h1 className='text-6xl'>Lewis Dean</h1>
        <h1 className='m-1 text-2xl'>{'>'} Software Engineer</h1>
      </Panel>
      <br />
      <Panel>
        <h2 className={'text-2xl'}>About Me</h2>
        <p className='mt-2 text-sm'>
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
      <Panel>
        <h2 className='text-2xl'>Experience</h2>
        <p className='mt-2'>Software Engineer | 2021 - Present | Raytheon UK</p>
        <ul className='mt-2 list-inside list-disc text-sm'>
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
        <ul className='mt-2 list-inside list-disc text-sm'>
          <li>
            Responsible for maintaining the organisation&apos;s existing codebase as
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
      <Panel className='md:max-xl:w-fit'>
        <h2 className='mb-2 text-2xl max-md:text-center'>Find me</h2>
        <Button className='max-md:w-full md:ml-0'>
          <a href='https://www.linkedin.com/in/lewisdean731/' target='_blank' rel="noreferrer">
            LinkedIn
          </a>
        </Button>
        <Button className='max-md:w-full'>
          <a href='https://github.com/lewisdean731' target='_blank' rel="noreferrer">
            GitHub
          </a>
        </Button>
        <Button className='max-md:w-full'>
          <a href='https://sketchfab.com/yung_lenin' target='_blank' rel="noreferrer">
            SketchFab
          </a>
        </Button>
      </Panel>
      <br />
      <Panel className='p-0! bg-transparent'>
        {/* russianwarship.rip */}
        <IframeResizer
          src='https://russianwarship.rip/widgets/statistics?widgetWrapper=russianwarshiprip-widget&amp;lang=en&amp;charity=armySos&amp;colorTheme=light&amp;speed=700&amp;roundedCorners=none&amp;borderedWidget=none&amp;autoplayWidget=autoplay&amp;stopOnHover=stop'
          title='russianWarship.RIP - Total combat losses of the russian occupier'
          className='w-full'
          license={'GPLv3'}
        />
      </Panel>
      <br />
    </div>
  );
};

export default App;
