import React, { useState } from 'react';



function Toggle() {
    let [toggle,setToggle]=useState(true);
    let [color,setColor]=useState(true);

  return (
    <>
    
        <button onClick={()=>setToggle(true)}>show</button>
        <button onClick={()=>setToggle(false)}>hide</button>
        <button onClick={()=>setToggle(!toggle)}>toggle</button>
        { toggle ?<div className='box' style={color?{background:"blue"}:{background:"black"}}>
            <button onClick={()=>setColor(!color)}>color</button>
            </div>:null}
      
    
    
    </>
   
  );
}

export default Toggle;
