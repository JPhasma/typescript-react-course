import './App.css';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/Personlist';

function App() {
  const personName = {
    first: 'Kory',
    last: 'Anders',
  };

  const nameList = [
    { first: 'Kory', last: 'Anders' },
    { first: 'Rachel', last: 'Roth' },
    { first: 'Gar', last: 'Logan' },
    { first: 'Dick', last: 'Grayson' },
    { first: 'Barbara', last: 'Gordon' },
  ];

  return (
    <div className='App'>
      <Status status='loading' />
      <Heading>Placeholder text</Heading>
      <h1>REACT | TYPESCRIPT</h1>
      <Greet name={'Jane'} messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
