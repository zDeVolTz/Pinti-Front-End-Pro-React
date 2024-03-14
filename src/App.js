import './App.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
function App() {
  return (
    <div className='App__wrapper'>
        <Header />
        <div className='Main__wrapper'>
          <Sidebar />
          <Main />
        </div>
    </div>
  );
}

export default App;
