import React from 'react';
import ReactDOM from 'react-dom/client';
import Dapp,{ Apps }  from './App';
import Len from './Lang';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <div>
      <ul>
        <Len g="한국어" cls="gnbkr"></Len>
        <Len g="중국어" cls="gnbcn"></Len>
        <Len g="영어" cls="gnben"></Len>
      </ul>      
      <Dapp /> 
      <Apps />
    </div> 
);
