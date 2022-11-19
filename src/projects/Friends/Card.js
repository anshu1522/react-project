import { useState } from "react";
function Card({itemm,setList,indx}){
    const deleteItems=(keyy)=>{
     setList(initialList=>{
        return initialList.filter((listItem,idx)=>keyy!=idx);
     })
    }
    const [move, setMove] = useState(false)
  
    const triggerMove = () => {
      setMove(prevState => {
        return !prevState
      })
    }
    return(
  <div   onAnimationEnd={()=>deleteItems(indx)} 
  className={move ? 'movedClass' : 'visibleClass'}
>     
<div className="card">{itemm}
<div className="delete" onClick={triggerMove}>-</div></div>
</div>
       
    )
}
export default Card;