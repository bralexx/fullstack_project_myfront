import FilterList from './FilterList'
import ObjectList from './ObjectList'

function Catalog() {
  return (
    <div className='catalog-div'>
      <div className='filter-list-div'><FilterList/></div>
      <div className='object-list-div'><ObjectList/></div>
    </div>
  );
}

export default Catalog