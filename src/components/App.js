import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './style.css'
import Catalog from './Catalog'
import TopBar from './TopBar'

function App() {
  return (
    <div>
      <TopBar/>
      <Router>
        <Routes>
          <Route path='/' element={<Catalog/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
