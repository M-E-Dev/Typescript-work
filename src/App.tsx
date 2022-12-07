import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import LoggedIn from './components/state/LoggedIn';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import User from './components/state/User';
import UserCont from './components/context/UserCont';
import Counter from './components/state/Counter';
import { ThemeContextProvider } from './components/context/ThemeContext';
import Box from './components/context/Box';
import { UserContexPovider } from './components/context/UserContext';

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
      {/* <Input value="" handleChange={(event) => console.log(event)} /> */}
      {/* <Container styles={{backgroundColor: "pink", padding:"1rem"}} /> */}
      {/* <LoggedIn/> */}
      {/* <User/> */}
      {/* <Counter/> */}
      {/* <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider> */}
      <UserContexPovider>
        <UserCont/>
      </UserContexPovider>
    </div>
  );
}
export default App;
