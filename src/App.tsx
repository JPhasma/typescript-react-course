import './App.css';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/Personlist';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';

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
      <Greet name={'Jane'} messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <Container
        styles={{
          border: '1px solid black',
          padding: '1rem',
          margin: '2rem 0',
        }}
      ></Container>
      <PersonList names={nameList} />
      <Input
        value=''
        handleChange={(event) => console.log(event.target.value)}
      />
      <Button
        handleClick={(event, id) => {
          console.log('Button clicked', event, 'id: ', id);
        }}
      />
    </div>
  );
}

export default App;
