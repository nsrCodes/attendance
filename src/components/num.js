import React, {useState} from 'react';

function Num({data, raiseClick}) {
  const [select, setSelect ] = useState(data.present);
  const handleClick = () => {
    setSelect(!select)
    raiseClick(data.num)
  }
  return (
    <div 
      onClick = { handleClick }
      className = { select ? 'present' : 'absent' }
      >
      <h1>Num : {data.num} </h1>
    </div>
  );
}

export default Num;
