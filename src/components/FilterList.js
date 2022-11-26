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
      <ClassFilter name={filter_data.name} type={filter_data.type} classes={filter_data.classes}/>
    )
  }
}

function FilterList() {
  return (
    <div id='filter-list-container'>
      <div id='filter-list-title-container'> 
        <p id='filter-list-title'>Filter list</p>
      </div>
      <form className='filter-list'>
        {hardcoded_data.map(create_filter)}
        <input id='filter-list-submit-button' type="submit" value="Apply filters"></input>
      </form>
    </div>
  );
}

export default FilterList;