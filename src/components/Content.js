import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Catalog from './Catalog'
import LoginPage from './LoginPage'

function Content() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Catalog/>}/>
        <Route path='/login_page/' element={<LoginPage/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default Content;