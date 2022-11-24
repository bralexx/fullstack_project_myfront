import MenuButton from './MenuButton'
import SearchForm from './SearchForm'
import AccountInfo from './AccountInfo'


function TopBar() {
  return (
    <header className='top-bar-div'>
      {/* <div className='top-bar-menubutton-div'> */}
        <MenuButton/>
      {/* </div> */}
      <div className='top-bar-search-div'>
        <SearchForm/>
      </div>
      <div className='top-bar-accountinfo-div'>
        <AccountInfo/>
      </div>
    </header>
  );
}

export default TopBar;