import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var time = new Date();
time = time.getHours();
let wish;
var col ={};
if(time > 0 && time<12){
  wish = "Good Morning";
 col.color='green';
}
else if(time>12 && time<16){
  wish = "Good Afternoon";
  col.color='orange';
}
else{
  wish = "Good Evening";
  col.color='red';
}
ReactDOM.render(
<div>
<h1> Welcome, <span style={col}> {wish}</span></h1>
</div>,
document.getElementById('root'),);