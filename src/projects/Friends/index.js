import './style.css';
import Card from './Card';
import friends from '../data';
import { useState } from 'react';
function Friends (){
    const [list,setList]=useState();
    const [cap,setCap]=useState([]);
    const addHandler=()=>{
 setCap((start)=>{
    return [...start,list];
 })
 setList("");
    }
    const textCapture=(props)=>{
setList(props.target.value);
    }
    
    return(
<div className="container">
<div className='header'>Friends
<div>
<input  value={list}onChange={textCapture}></input>
<button style={{margin:10}} onClick={addHandler}>submit </button>
</div>
</div>
<div className='body'>

{cap.map((item)=>
    <Card itemm={item}/>
)}

<div className='addButton'>+</div>
</div>
</div>



    );
}
export default Friends;