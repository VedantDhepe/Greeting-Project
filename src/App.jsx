import React from 'react';
function App() {
  var time = new Date(); 
    time = time.getHours();
    let wish;
    var col ={};
    if(time >= 0 && time<12){
        wish = "Good Morning";
        col.color='green';
    }
    else if(time>=12 && time<16){
        wish = "Good Afternoon";
        col.color='orange';
    }
    else if(time>=16 && time <19){
        wish = "Good Evening";
    }
    else{
        wish = "Good Night";
        col.color='red';
    }

    return (
      <>
      <div>
      <h1>It's {time} hour of the Day <br/> <span style={col}> {wish} </span></h1>
      </div>
      </>
  
  );
}

export default App;

