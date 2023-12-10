import './App.css';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <section className='landingPage' id='landingPage'>
        <img src="./images/burger.png" alt="failed to load"/>
      <div className='company'>
        <span>G</span>lazy
      </div>
      </section>
      <section className='about' id='about'>
      <h1> Who are we?</h1>
      <p>we are a Ghost kitchen that specialize in making authentic burgers with love. </p>
      </section>
      <section className='newest' id='newest'>
      <div>Newest Release</div>
      </section>
      <div>Footer</div>
    </div>
  );
}

export default App;
