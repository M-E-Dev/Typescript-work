import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne"
  }


  const nameList = [
    {
      first: "Bruce",
      last: "Wayne"
    },
    {
      first: "Clark",
      last: "Kent"
    },
    {
      first: "Harry",
      last: "Potter"
    }
  ]


  return (
    <div className="App">
      <Greet name="Harry" messageCount={20} isLoggedIn={false} />
      <Person name={personName}/>
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
