
import './App.css';
import Header from './components/Header/Header';
import { HashRouter, Route, Routes } from 'react-router-dom';
import AllHeroes from './components/AllHeroes/AllHeroes';

function App() {
  return (
    <div>
      <HashRouter>
          <Header />
        <Routes>
          <Route path='/allHeroes' element={<AllHeroes />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

