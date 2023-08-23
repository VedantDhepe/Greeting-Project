import React from 'react';
function Apps() {
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
<<<<<<< HEAD
    return (
      <>
      <div>
      <h1> Wellcome back to the home page <span style={col}> {wish} </span></h1>
      </div>
      </>
  
  );
}

export default Apps;
=======
  return(
    <>
   
   return (
        <div>
        <h1> Welcome Back to this page <span style={col}> {wish} </span></h1>
        </div>
    );
    </>
  );
}

export default App;
>>>>>>> 30d0d9f76fafabe3d510666b06e954f3f173d2a2
