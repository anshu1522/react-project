import './style.css';
import Card from './Card';
import friends from './data';


function Group(){
   
    
    return(
        <>
        <div className='main'>
<div className='header'>names</div>
<div className='body'>
    
   {friends.map((item) => (
<Card itemm={item}/>
   ))}
</div>
 {/* <div className='addButton' onClick={addEvent}>+</div> */}
 </div>
        </>
    )
}
export default Group;