
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element= {<Login/>}/>
      <Route exact path='/home' element= {<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
