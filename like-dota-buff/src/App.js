import './App.css';
import Header from './components/Header/Header';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';

function App() {
  const menuItems = useSelector(state => {
    return state.headerReducer.nemuItems;
  })
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          {
            menuItems.map(item => {
              const returnValue = item.subMenuItems.map(itemSub => <Route path={itemSub.pathTo} element={itemSub.forElement} />);
              return (
                <>
                  <Route path={item.pathTo} element={item.forElement} />
                  {returnValue}
                </>
              )
            })
          }
        </Routes>
      </HashRouter>
    </div>
  );
}


export default App;

