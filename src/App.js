import Car from './car.png';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className='App_title'>Game Launcher</div>
      <div className='container'> 
      <Card 
          name ="Car Game"
          img_src = {Car}
        />
        <Card 
          name ="Snake Game"
          img_src = {Car}
        />
        <Card 
          name ="Flappy Bird Game"
          img_src = {Car}
        />
        <Card 
          name ="PingPongg"
          img_src = {Car}
        />
      </div>
        
      </header>
    </div>
  );
}

export default App;
