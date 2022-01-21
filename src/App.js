import './App.css';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <div className='container__title'>
        <h1>App</h1> 
        </div>
        <div className='container__homepage'>
          <Homepage changeColor={false}/>
        </div>
        </div>
  );
}

export default App;
