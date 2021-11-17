import { BrowserRouter, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import NavBar from './components/Navbar';


const App = () => {
  return (
    
    <div className="dome">

      <BrowserRouter >
          <NavBar />
          <Switch className="leftVerticalLine">
            
            <Route path="/" component={ HomePage } exact />
            

          </Switch>
        </BrowserRouter>
    </div>

  )
}

export default App;