import { Container } from 'react-bootstrap';
import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import General from './components/General';

function App() {
  return (
    <Container>
      <General />
      <Education />
      <Experience />
    </Container>
  );
}

export default App;
