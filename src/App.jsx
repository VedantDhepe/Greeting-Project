import React from 'react';
function App() {
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

    return (
      <>
      <div>
      <h1> Wellcome back to this React App page <span style={col}> {wish} </span></h1>
      </div>
      </>
  
  );
}

export default App;

