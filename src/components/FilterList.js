import ClassFilter from './ClassFilter'

const hardcoded_data = [
  {type: 'class_single', name:'sorting', classes:['type1', 'type2', 'type3']},
  {type: 'class_mul', name:'filter2', classes:['class21', 'class22']},
  {type: 'class_mul', name:'filter3', classes:['class1', 'class2', 'class3']},
  {type: 'class_mul', name:'filter4', classes:['class1', 'class2', 'class3']},
]


function create_filter(filter_data) {
  if (filter_data.type === 'class_mul' || filter_data.type === 'class_single') {
    return (
      <li key={filter_data.name + '_list_element'}>
        <ClassFilter name={filter_data.name} type={filter_data.type} classes={filter_data.classes}/>
      </li>
    )
  }
}

function FilterList() {
  return (
    <ul className='filter-list'>
      {hardcoded_data.map(create_filter)}
      <input type="submit" value="Submit"></input>
    </ul>
  );
}

export default FilterList;