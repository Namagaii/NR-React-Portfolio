import './App.css';
import CardButtons from './components/CardButtons';
import Flashcard from './components/Flashcard';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <div className='app'>
      <Header />
      <Nav />
      <Flashcard />
      <CardButtons />
      {/* Todo: Add footer here */}
    </div>
  );
}

export default App;
