const hardcoded_data = [
  {property: 'prop1'},
  {property: 'prop2'},
  {property: 'prop3'},
]

function FilterList() {
  return (
    <ul className='filter-list'>
      {hardcoded_data.map(filter => <li>filter.property</li>)}
    </ul>
  );
}

export default FilterList;