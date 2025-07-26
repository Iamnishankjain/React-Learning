import AppName from './components/AppName';
import AppSlogan from './components/AppSlogan';
import AppDate from './components/AppDate';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <center>
      <AppName />
      <AppSlogan />
      <AppDate />
    </center>
  );
}

export default App;
