const hardcoded_data = [
  {text:1},
  {text:2},
  {text:3},
]

function ObjectList() {
  return (
    <ul className='object-list'>
      {hardcoded_data.map(obj => <li className='object'>obj.text</li>)}
    </ul>
  );
}

export default ObjectList;