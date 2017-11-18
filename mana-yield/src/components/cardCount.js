import React from 'react';

const CardCount = function(props) {
  return (
    <input className='card-count'
           type='number'
           min='0'
           max='99'
           onChange={props.handleChange}
           value={props.defaultValue} />
  )
};

export default CardCount;
