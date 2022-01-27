import './App.css';
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import ContactsPage from './pages/ContactsPage';
import ProjectDisplayPage from './pages/ProjectDisplayPage';
import data from './data/ProjectData';

function App() { 
  return (
    <div style={{height:"95%", backgroundColor: "#63B1FF"}}>
      <Route path="/">
      <Header />
      <div className='ProjectDisplayArea'>
        <Row xs={1} md={2} className="g-1">
          <Project props={{...data[0], index: 0}} />
          <Project props={{...data[1], index: 1}} />
          <Project props={{...data[2], index: 2}} />
          <Project props={{...data[3], index: 3}} />
        </Row>
      </div>
      <Footer />
      </Route>
      <Route path="/showproject/:index">
        <ProjectDisplayPage />
      </Route>
      <Route path="/contacts">
        <ContactsPage />
      </Route>
    </div>
  );
}

export default App;
