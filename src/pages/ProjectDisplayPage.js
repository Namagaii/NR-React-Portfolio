import React from 'react';
import ProjectData from '../data/ProjectData';
import { useParams } from 'react-router-dom'; 
import SingleProjectDisplay from '../components/SingleProjectDisplay';
import Header from '../components/Header';
import Footer from '../components/Footer'; 

const ProjectDisplayPage = () => {
  const {index} = useParams();
  return (
  <div style={{ height: "100%"}}>
      <Header />
      <main>
        <SingleProjectDisplay props={ProjectData[index]}/>
      </main>
      <Footer />
  </div>
  );
};

export default ProjectDisplayPage;
