import {useDispatch} from 'react-redux'
import {CMSAction} from '../store/MenuStateReduser'

function MenuButton() {
  let dispatch = useDispatch()
  let open_close_menu = () => dispatch(CMSAction);
  return (
    <button id='top-bar-menu-button' onClick={open_close_menu}></button>
  )
}

export default MenuButton