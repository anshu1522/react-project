import './style.css';
import Card from './Card';
import friends from '../data';
import { useState } from 'react';


function Group(){
   
    const[go,setGo]=useState(friends)
    return(
        <>
        <div className='main'>
<div className='header'>names</div>
<div className='body'>
    
   {go.map((item,index) => (
<Card itemm={item} key={index} indx={index} setGo={setGo}/>
   ))}
</div>
 {/* <div className='addButton' onClick={addEvent}>+</div> */}
 </div>
        </>
    )
}
export default Group;