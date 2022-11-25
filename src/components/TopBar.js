import MenuButton from './MenuButton'
import SearchForm from './SearchForm'
import AccountInfo from './AccountInfo'


function TopBar() {
  // var elem1 = document.querySelector('.top-bar-menubutton');
  // var menubuttonWeidth = getComputedStyle(elem1).width;
  // var elem2 = document.querySelector('.top-bar-accountinfo-div');
  // var accountinfoWeidth = getComputedStyle(elem2).width;
  // var searchBlockWeidth = window.innerWidth - parseInt(menubuttonWeidth) - parseInt(accountinfoWeidth);

  return (
    <header className='top-bar-div'>
        <MenuButton/>
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