import { Container } from 'react-bootstrap';
import './App.css';
import Education from './components/Education';
import General from './components/General';

function App() {
  return (
    <Container>
      <General />
      <Education />
    </Container>
  );
}

export default App;
