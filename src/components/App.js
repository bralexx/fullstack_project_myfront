import './style.css'
import TopBar from './TopBar'
import Menu from './Menu'

import {useSelector} from 'react-redux'
import Content from './Content'

function App() {
  const menu_state = useSelector(state => state.menu_state)
  return (
    <div>
      <TopBar/>
      {menu_state === 1 ? 
        <div>
          <Menu/>
          <Content/> 
        </div>:
        <Content/>}
      
    </div>
  );
}

export default App;
