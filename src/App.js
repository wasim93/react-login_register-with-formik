import './App.css';
import RocketImg from './assets/rocket.png';
import Signup from './components/Signup';

function App() {
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-5'>
          <Signup />
        </div>
        <div className='col-md-7'>
          <img className='img-fluid w-100' src={RocketImg} alt='rocket-img' />
        </div>
      </div>
    </div>
  );
}

export default App;
