const hardcoded_data = [
  {key:1, text:"here can be some object from the database"},
  {key:2, text:2},
  {key:3, text:3},
  {key:4, text:5},
  {key:5, text:3},
  {key:6, text:3},
  {key:7, text:3},
  {key:8, text:3},
  {key:9, text:3},
  {key:10, text:10},
]

function ObjectList() {
  return (
    <ul className='object-list'>
      {hardcoded_data.map(obj => <li key={obj.key} className='object'>{obj.text}</li>)}
    </ul>
  );
}

export default ObjectList;