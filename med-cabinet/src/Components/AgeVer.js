import React from 'react';
import AgeGate from 'agegate';


function AgeVer(){

    let options = {
        form: document.querySelector('form'),
        countries: true,
        expiry: Infinity
      }
      
      let gate = new AgeGate(options, (err) => {
        if (err) throw new Error('You shall not pass');
        else console.log('Fly, you fools');
      })
      
    return(
    <form name='agegate'>
        <input type='number' name='year'/>

        <button type='submit'>Enter</button>
    </form>
)}