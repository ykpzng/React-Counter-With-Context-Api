import logo from './logo.svg';
import './App.css';
import Provider from './context/Provider';
import FirstComponent from './components/ComponentOne';
import SecondComponent from './components/ComponentTwo';

function App() {
  return (
    <Provider>
      <div className="App">
        <FirstComponent />
        <SecondComponent />
      </div>
    </Provider>

  );
}
export default App;
