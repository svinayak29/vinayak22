import logo from './logo.svg';
import './App.css';
import { Firstcomponent } from './firstcomponent';
import { Secondcomponent } from './Secondcomponent';
import { Thirdcomponent } from './Thirdcomponent';
import {Button} from './Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Firstcomponent/>
        <Secondcomponent/>
        <Thirdcomponent/>
        <Button/>

        
        
        
      </header>
    </div>
  );
}

export default App;
