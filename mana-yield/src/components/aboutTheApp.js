import React from 'react';

const AboutTheApp = function(props) {

  let craAcknowledgementText = 'This project was bootstrapped with ';
  let craAcknowledgement = (
    <div>
      {craAcknowledgementText}
      <a href='https://github.com/facebookincubator/create-react-app' target='blank' >Create React App</a>
    </div>
  );

  let manaAcknowledgementText = 'Mana symbols by ';
  let manaAcknowledgement = (
    <div>
      {manaAcknowledgementText}
      <a href='https://github.com/andrewgioia/Mana' target='blank' >Andrew Gioia</a>
    </div>
  );

  return (
    <div className='about'>
      {craAcknowledgement}
      {manaAcknowledgement}
    </div>
  )
};

export default AboutTheApp;
