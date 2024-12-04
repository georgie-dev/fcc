import './App.css';
import {Header, Stories} from './components'

function App() {
  return (
    <div className='bg-black flex flex-col gap-[2px]'>
      <Header/>
      <Stories/>
    </div>
  );
}

export default App;
