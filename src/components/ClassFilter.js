function classes_parser(filter_name, filter_type, class_name) {
  return (
    <div key={filter_name + class_name + '_filter_option'} className='filter-element-option-container'>
      <input key={filter_type + class_name} type={filter_type === 'class_mul'? 'checkbox' : 'radio'} id={class_name} name={class_name} value={1}></input>
      <label className='filter-element-option-title'>{class_name}</label>
    </div>
  )
}

function ClassFilter(filter_info) {
  let wrapper = class_name => classes_parser(filter_info.name, filter_info.type, class_name)
  return (
    <div className='filter-element-container'>
      <p className='filter-element-title'>{filter_info.name}</p>
        {filter_info.classes.map(wrapper)}
    </div>
  );
}

export default ClassFilter;