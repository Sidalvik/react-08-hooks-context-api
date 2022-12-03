import './App.css';
import Separator from './Components/Separator/Separator';
import UseEffect from './Components/UseEffect/UseEffect';

function App() {
  return (
    <div className="App">
      <h1 className=''>Курс React.<br></br>Домашнее задание по&nbsp;теме<br></br>"Hooks & Context API"</h1>
      <h2 className='mx-auto text-center'>Задание 1. "useEffect (UseEffect)"</h2>
      <div className='task-1' id='task-1'>
        <UseEffect/>
      </div>
      <Separator/>
      {/* <h2 className='mx-auto text-center'>Задание 2. "useJsonFetch (UseJsonFetch)"</h2>
      <div className='task-2' id='task-2'>
        <UseJsonFetch className = {''}/>
      </div>
      <Separator/> */}
    </div>
  );
}

export default App;
