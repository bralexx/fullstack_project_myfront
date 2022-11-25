function classes_parser(filter_name, filter_type, class_name) {
  return (
    <div key={filter_name + class_name + '_filter_option'}>
      <input key={filter_type + class_name} type={filter_type === 'class_mul'? 'checkbox' : 'radio'} id={class_name} name={class_name} value={1}></input>
      <label>{class_name}</label>
    </div>
  )
}

function ClassFilter(filter_info) {
  let wrapper = class_name => classes_parser(filter_info.name, filter_info.type, class_name)
  return (
    <div>
      <h3>{filter_info.name}</h3>
      <form>
        {filter_info.classes.map(wrapper)}
      </form>
    </div>
  );
}

export default ClassFilter;