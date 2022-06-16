import './App.css';
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from 'react-bootstrap';
import { Route, HashRouter as Router } from 'react-router-dom';
import ContactsPage from './pages/ContactsPage';
import ProjectDisplayPage from './pages/ProjectDisplayPage';
import data from './data/ProjectData';
import ModuleInputSlot from './components/ModuleInputSlot';
import ModuleDisplayArea from './components/ModuleDisplayArea';
import { useState } from 'react';

function App() {
  console.log(process.env.PUBLIC_URL) 
  const [dropInstructions, setDropInstructions] = useState("Testing");
  return (
    <main className='main'>
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path="/">
        <Header />
        <p id="drop-instructions-p">{dropInstructions}</p>
        <ModuleInputSlot />
        <ModuleDisplayArea />
        <Footer />
        </Route>
        <Route path="/showproject/:index">
          <ProjectDisplayPage />
        </Route>
        <Route path="/contacts">
          <ContactsPage />
        </Route>
      </Router>
    </main>
  );
}

export default App;
