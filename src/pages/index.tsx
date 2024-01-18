import JsonFormatter from "@/app/components/jsonFormatter";
import type { NextPage } from "next";

const Home: NextPage = () => {

  const jsonData = {
    name: 'Lewis Dean',
    location: 'United Kingdom',
    profession: 'Sofware Engineer',
    interests: [
      'Football',
      'Plymouth Argyle',
      '3D Modelling',
      'Game Development',
      'Video Games',
      'Board Games'
    ],
    education: {
      institution: 'Bournemouth University',
      subject: 'BSc. Software Engineering',
      grade: 'First class with honours'
    },
    'work-history': {
      '2021-Present': "Raytheon UK",
      '2019-2020': "UKCloud" 
    },
    'external-links': {
      GitHub: '[Find me on GitHub]https://github.com/lewisdean731',
      LinkedIn: '[Find me on LinkedIn]https://www.linkedin.com/in/lewisdean731',
      Steam: '[Find me on Steam]https://steamcommunity.com/id/flafarflafarflafar',
      SketchFab: '[Find me on SketchFab]https://sketchfab.com/yung_lenin',
    },
  };

  return (
    <div className="text-blue1">
    <JsonFormatter jsonData={jsonData} />
    </div>
  );
};

export default Home;