import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';

function App() {
  const personName = {
    first: 'Kory',
    last: 'Anders',
  };
  return (
    <div className='App'>
      <h1>REACT | TYPESCRIPT</h1>
      <Greet name={'Jane'} messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
    </div>
  );
}

export default App;
