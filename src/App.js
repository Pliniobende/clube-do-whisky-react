import './App.css';
import Home from './pages/Home'
import {BrowserRouter as Router} from 'react-router-dom';
import Signup from './components/Signup';

function App() {
  return (
    <Router>  
      <Home />
      {/* <Signup /> */}
    </Router>
  );
}

export default App;



