import './App.css';
import Button from './components/Button';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

function App() {
  // const personName = {
  //   first: "Bruce",
  //   last: "Wayne"
  // }
  // const nameList = [
  //   {
  //     first: "Bruce",
  //     last: "Wayne"
  //   },
  //   {
  //     first: "Clark",
  //     last: "Kent"
  //   },
  //   {
  //     first: "Harry",
  //     last: "Potter"
  //   }
  // ]
  return (
    <div className="App">
      {/* <Greet name="Harry" messageCount={20} isLoggedIn={false} />
      <Person name={personName}/>
      <PersonList names={nameList}/> */}
      {/* --------------------------------------- */}
      {/* <Status status="success" />
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Greet name="Harry" isLoggedIn={false} /> */}
      {/* --------------------------------------- */}
      {/* <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id)
        }} /> */}
      <Input value="" handleChange={(event) => console.log(event)} />
    </div>
  );
}
export default App;
