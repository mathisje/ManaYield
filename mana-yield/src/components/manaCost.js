import React from 'react';
import './../css/mana.css';

const ManaCost = function(props) {
  let style = {padding:'1px',margin:'2px'};
  return (
    <div className='mana-cost'>
      {
        props.costArray.map((symbol, index) => {
          return (
            <i key={index}
               className={'ms ms-' + symbol + ' ms-cost ms-shadow ms-2x'}
               style={style} />
          )
        })
      }
    </div>
  )
};

export default ManaCost;
